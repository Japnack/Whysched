import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DayPriorityComponent } from './compoonents/day-priority/day-priority.component';
import { DayPriorityFormComponent } from './compoonents/day-priority-form/day-priority-form.component';
import { DayPriorityPageRoutingModule } from './day-priority-page.routing';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-day-priority-page',

  templateUrl: './day-priority-page.component.html',
  styleUrl: './day-priority-page.component.scss',
})
export class DayPriorityPageComponent {
  todayDate = new Date().toLocaleDateString();
}
