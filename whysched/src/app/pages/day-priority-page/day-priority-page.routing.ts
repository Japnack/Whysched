import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayPriorityFormComponent } from './compoonents/day-priority-form/day-priority-form.component';
import { DayPriorityComponent } from './compoonents/day-priority/day-priority.component';
import { DayPriorityPageComponent } from './day-priority-page.component';

const routes: Routes = [
  {
    path: '',
    component: DayPriorityPageComponent,
    children: [
      { path: '', component: DayPriorityFormComponent },
      { path: 'my-day', component: DayPriorityComponent },
      { path: '**', redirectTo: '' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DayPriorityPageRoutingModule {}
