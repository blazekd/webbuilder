import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividerSizeModuleComponent } from './divider-size-module.component';

describe('DividerSizeModuleComponent', () => {
  let component: DividerSizeModuleComponent;
  let fixture: ComponentFixture<DividerSizeModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DividerSizeModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DividerSizeModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
