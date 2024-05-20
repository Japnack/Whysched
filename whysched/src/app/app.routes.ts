import { Routes } from '@angular/router';

import { DayPriorityPageComponent } from './pages/day-priority-page/day-priority-page.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/day-priority-page/day-priority-page.module').then(
        (m) => m.DayPriorityPageModule
      ),
  },
];
