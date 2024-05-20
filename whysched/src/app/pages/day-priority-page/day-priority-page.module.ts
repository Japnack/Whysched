import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DayPriorityPageComponent } from './day-priority-page.component';
import { DayPriorityFormComponent } from './compoonents/day-priority-form/day-priority-form.component';
import { DayPriorityPageRoutingModule } from './day-priority-page.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DayPriorityService } from '../../services/day-priority.service';

@NgModule({
  declarations: [DayPriorityPageComponent, DayPriorityFormComponent],
  providers: [DayPriorityService],
  imports: [
    CommonModule,
    RouterModule,
    DayPriorityPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class DayPriorityPageModule {}
