import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebGridComponent } from './web-grid.component';

describe('WebGridComponent', () => {
  let component: WebGridComponent;
  let fixture: ComponentFixture<WebGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
