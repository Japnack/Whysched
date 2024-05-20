import { Routes } from '@angular/router';
import { DayPriorityFormComponent } from './pages/day-priority-form/day-priority-form.component';
import { DayPriorityComponent } from './pages/day-priority/day-priority.component';

export const routes: Routes = [
  {
    path: '',
    component: DayPriorityComponent,
  },
  { path: 'today-goal', component: DayPriorityFormComponent },
];
