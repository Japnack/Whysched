import { Component, inject, OnInit } from '@angular/core';
import { DayPriorityService } from '../../../../services/day-priority.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-day-priority',
  providers: [DayPriorityService],
  templateUrl: './day-priority.component.html',
  styleUrl: './day-priority.component.scss',
})
export class DayPriorityComponent implements OnInit {
  router = inject(Router);
  dayPriorityService = inject(DayPriorityService);

  todayDate = new Date().toLocaleDateString();
  priorities!: string[];

  PRIORITY_MAX = 3;

  ngOnInit(): void {
    const dayPriority = this.dayPriorityService.getPriorities();
    if (dayPriority && dayPriority.date === this.todayDate) {
      this.priorities = dayPriority.priorities;
    } else {
      this.router.navigateByUrl('my-day');
    }
  }
}
