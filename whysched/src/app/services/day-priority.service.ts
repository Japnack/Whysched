import { Injectable } from '@angular/core';
import { DayPriority } from '../pages/day-priority-page/components/day-priority-form/models/day-priority';

@Injectable()
export class DayPriorityService {
  KEY = 'WHYSCHED';

  storePriorities(dayPriority: DayPriority) {
    localStorage.setItem(this.KEY, JSON.stringify(dayPriority));
  }
  getPriorities(): DayPriority | null {
    const response = localStorage.getItem(this.KEY);
    if (!response) return null;
    return JSON.parse(response);
  }
}
