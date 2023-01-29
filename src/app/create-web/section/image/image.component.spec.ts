import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebImageComponent } from './image.component';

describe('WebImageComponent', () => {
  let component: WebImageComponent;
  let fixture: ComponentFixture<WebImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
