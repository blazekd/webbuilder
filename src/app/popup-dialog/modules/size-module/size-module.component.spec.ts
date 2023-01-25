import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeModuleComponent } from './size-module.component';

describe('SizeModuleComponent', () => {
  let component: SizeModuleComponent;
  let fixture: ComponentFixture<SizeModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SizeModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SizeModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
