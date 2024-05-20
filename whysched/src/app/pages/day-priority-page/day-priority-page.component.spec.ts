import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayPriorityPageComponent } from './day-priority-page.component';

describe('DayPriorityPageComponent', () => {
  let component: DayPriorityPageComponent;
  let fixture: ComponentFixture<DayPriorityPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DayPriorityPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DayPriorityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
