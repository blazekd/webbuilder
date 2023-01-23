import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundModuleComponent } from './background-module.component';

describe('BackgroundModuleComponent', () => {
  let component: BackgroundModuleComponent;
  let fixture: ComponentFixture<BackgroundModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
