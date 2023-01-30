import { AfterViewInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component, Input, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResizeEvent } from 'angular-resizable-element';
import { PopupDialogComponent } from 'src/app/popup-dialog/popup-dialog.component';
import { ImageClass } from '../../component-classes';

@Component({
  selector: 'app-section-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements AfterViewInit {
  @Input() content!: ImageClass;
  @ViewChild('wrapper') wrapper!: ElementRef;
  @ViewChild('imageContainer') imageContainer!: ElementRef;

  constructor(public dialog: MatDialog) { }

  ngAfterViewInit() {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        console.log(mutation)
        if (this.content.style == 2) {
          this.content.height = Math.min(parseInt(getComputedStyle(this.imageContainer.nativeElement,'').width)-20, parseInt(this.content.height)) + 'px'
        }
        console.log(this.content.height)
      });
    });

    observer.observe(this.wrapper.nativeElement, {
      attributeFilter: ['mystyle'] //detect changes in style
    });
  }

  editDialog() {
    if (this.dialog.openDialogs.length > 0)
      return;
      //todo change dialog
      const dialogRef = this.dialog.open(PopupDialogComponent);

  dialogRef.afterClosed().subscribe(result => {
    //console.log(result);
    if (result !== undefined)
      this.content.src = result;
  });

  }
  
  public style: object = {};
  bottom: number | boolean = 0;

  validate = (event: ResizeEvent): boolean => {
    if (this.content.style == 2) 
    { 
      let x = event.rectangle.height && (event.rectangle.height > parseInt(getComputedStyle(this.imageContainer.nativeElement).width));
      if ((event.edges.bottom && (event.edges.bottom > 0 && x)) || (x && event.edges.bottom && this.bottom < event.edges.bottom))
      {
        return false;
      }
      this.bottom = event.edges.bottom!;
    }

    return true;
  }

  onResizeEnd(event: ResizeEvent): void {
    this.content.height = event.rectangle.height + 'px'
  }

  onResize(event: ResizeEvent): void {
    this.content.height = event.rectangle.height + 'px'
  }

}

