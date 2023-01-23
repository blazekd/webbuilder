import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarStyleModuleComponent } from './calendar-style-module.component';

describe('CalendarStyleModuleComponent', () => {
  let component: CalendarStyleModuleComponent;
  let fixture: ComponentFixture<CalendarStyleModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarStyleModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarStyleModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
