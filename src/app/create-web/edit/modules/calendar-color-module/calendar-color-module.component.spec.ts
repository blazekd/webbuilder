import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarColorModuleComponent } from './calendar-color-module.component';

describe('CalendarColorModuleComponent', () => {
  let component: CalendarColorModuleComponent;
  let fixture: ComponentFixture<CalendarColorModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarColorModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarColorModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
