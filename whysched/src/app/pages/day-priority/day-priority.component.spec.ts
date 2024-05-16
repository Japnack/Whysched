import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayPriorityComponent } from './day-priority.component';

describe('DayPriorityComponent', () => {
  let component: DayPriorityComponent;
  let fixture: ComponentFixture<DayPriorityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DayPriorityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DayPriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
