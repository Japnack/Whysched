import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayPriorityItemComponent } from './day-priority-item.component';

describe('DayPriorityItemComponent', () => {
  let component: DayPriorityItemComponent;
  let fixture: ComponentFixture<DayPriorityItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DayPriorityItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DayPriorityItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
