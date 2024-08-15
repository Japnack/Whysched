import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayPriorityFormComponent } from './day-priority-form.component';

describe('DayPriorityComponent', () => {
  let component: DayPriorityFormComponent;
  let fixture: ComponentFixture<DayPriorityFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DayPriorityFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DayPriorityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
