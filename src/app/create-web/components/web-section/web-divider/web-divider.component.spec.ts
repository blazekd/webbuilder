import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDividerComponent } from './web-divider.component';

describe('WebDividerComponent', () => {
  let component: WebDividerComponent;
  let fixture: ComponentFixture<WebDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebDividerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
