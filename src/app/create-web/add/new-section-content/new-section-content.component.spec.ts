import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSectionContentComponent } from './new-section-content.component';

describe('NewSectionContentComponent', () => {
  let component: NewSectionContentComponent;
  let fixture: ComponentFixture<NewSectionContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSectionContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSectionContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
