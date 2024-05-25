import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-day-priority-item',
  templateUrl: './day-priority-item.component.html',
  styleUrl: './day-priority-item.component.scss',
})
export class DayPriorityItemComponent implements OnInit {
  @Input() priority!: string;
  @Input() degrees!: number;

  array!: Array<number>;

  ngOnInit() {
    this.array = new Array(Number(this.degrees)).fill(1);
  }
}
