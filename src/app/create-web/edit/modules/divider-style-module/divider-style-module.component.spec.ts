import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividerStyleModuleComponent } from './divider-style-module.component';

describe('DividerStyleModuleComponent', () => {
  let component: DividerStyleModuleComponent;
  let fixture: ComponentFixture<DividerStyleModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DividerStyleModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DividerStyleModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
