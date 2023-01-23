import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividerColorModuleComponent } from './divider-color-module.component';

describe('DividerColorModuleComponent', () => {
  let component: DividerColorModuleComponent;
  let fixture: ComponentFixture<DividerColorModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DividerColorModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DividerColorModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
