import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebImageDialogComponent } from './web-image-dialog.component';

describe('WebImageDialogComponent', () => {
  let component: WebImageDialogComponent;
  let fixture: ComponentFixture<WebImageDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebImageDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebImageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
