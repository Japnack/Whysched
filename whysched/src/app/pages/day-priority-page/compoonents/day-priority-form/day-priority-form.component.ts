import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DayPriorityService } from '../../../../services/day-priority.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-day-priority',
  templateUrl: './day-priority-form.component.html',
  styleUrl: './day-priority-form.component.scss',
})
export class DayPriorityFormComponent {
  router = inject(Router);
  dayPriorityService = inject(DayPriorityService);

  todayDate = new Date().toLocaleDateString();
  userMessage = '';
  form = this.formBuilder.group({
    priority: '',
  });

  priorities: string[] = [];

  constructor(private formBuilder: FormBuilder) {}

  addPriority() {
    if (this.priorities.length >= 3) {
      this.userMessage = 'Only three priorities are allowed in a day';
      return;
    }

    const priority = this.form.get('priority')?.getRawValue();

    if (priority) {
      this.priorities.push(priority);
      this.form.get('priority')?.setValue('');
    }
  }

  submitDayPriorities() {
    this.dayPriorityService.storePriorities({
      date: this.todayDate,
      priorities: this.priorities,
    });

    this.router.navigateByUrl('/');
  }
}
