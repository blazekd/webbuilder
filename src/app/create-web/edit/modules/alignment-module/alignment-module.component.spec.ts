import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlignmentModuleComponent } from './alignment-module.component';

describe('AlignmentModuleComponent', () => {
  let component: AlignmentModuleComponent;
  let fixture: ComponentFixture<AlignmentModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlignmentModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlignmentModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
