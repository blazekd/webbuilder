import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageUploadModuleComponent } from './image-upload-module.component';

describe('ImageUploadModuleComponent', () => {
  let component: ImageUploadModuleComponent;
  let fixture: ComponentFixture<ImageUploadModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageUploadModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageUploadModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
