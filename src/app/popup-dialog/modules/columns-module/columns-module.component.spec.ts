import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnsModuleComponent } from './columns-module.component';

describe('GridModuleComponent', () => {
  let component: ColumnsModuleComponent;
  let fixture: ComponentFixture<ColumnsModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnsModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnsModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
