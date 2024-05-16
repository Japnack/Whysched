import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-day-priority',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './day-priority.component.html',
  styleUrl: './day-priority.component.scss',
})
export class DayPriorityComponent {
  todayDate = new Date().toLocaleDateString();
  form = this.formBuilder.group({
    priority: '',
  });

  priorities: string[] = [];

  constructor(private formBuilder: FormBuilder) {}

  addPriority() {
    const priority = this.form.get('priority')?.getRawValue();
    if (priority) {
      this.priorities.push(priority);
      this.form.get('priority')?.setValue('');
    }
  }
}
