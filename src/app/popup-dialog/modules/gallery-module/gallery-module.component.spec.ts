import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryModuleComponent } from './gallery-module.component';

describe('GalleryModuleComponent', () => {
  let component: GalleryModuleComponent;
  let fixture: ComponentFixture<GalleryModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
