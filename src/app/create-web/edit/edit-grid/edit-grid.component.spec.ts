import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGridComponent } from './edit-grid.component';

describe('EditGridComponent', () => {
  let component: EditGridComponent;
  let fixture: ComponentFixture<EditGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
