import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorModuleComponent } from './color-module.component';

describe('ColorModuleComponent', () => {
  let component: ColorModuleComponent;
  let fixture: ComponentFixture<ColorModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
