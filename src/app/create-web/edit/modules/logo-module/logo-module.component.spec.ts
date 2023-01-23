import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoModuleComponent } from './logo-module.component';

describe('LogoModuleComponent', () => {
  let component: LogoModuleComponent;
  let fixture: ComponentFixture<LogoModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
