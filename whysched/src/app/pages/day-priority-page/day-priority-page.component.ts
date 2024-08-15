import { Component } from '@angular/core';

@Component({
  selector: 'app-day-priority-page',
  templateUrl: './day-priority-page.component.html',
  styleUrl: './day-priority-page.component.scss',
})
export class DayPriorityPageComponent {
  todayDate = new Date().toLocaleDateString();
}
