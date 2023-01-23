import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebTextComponent } from './web-text.component';

describe('WebTextComponent', () => {
  let component: WebTextComponent;
  let fixture: ComponentFixture<WebTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
