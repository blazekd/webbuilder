import { AfterViewInit, HostListener, Inject, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResizeEvent } from 'angular-resizable-element';
import { PopupDialogComponent } from 'src/app/popup-dialog/popup-dialog.component';
import { ImageClass } from '../../component-classes';

@Component({
  selector: 'app-section-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit, AfterViewInit {
  @Input() content!: ImageClass;
  // content: ImageClass;
  @ViewChild('wrapper') wrapper!: ElementRef;
  @ViewChild('imageContainer') imageContainer!: ElementRef;
  // @HostListener('document:mousemove', ['$event']) 
  // onMouseMove(e:any) {
  //   console.log(e);
  // }
//   @HostListener('document:mouseup', ['$event'])
// onMouseUp(event: MouseEvent) {
//   this.resizeEnd(event)
// }


initWidth = 1;


  constructor(public dialog: MatDialog, private renderer: Renderer2) {
    // this.content = data;
   }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    // console.log((parseInt(getComputedStyle(this.wrapper.nativeElement, '').width)));
    // this.initWidth = (parseInt(getComputedStyle(this.wrapper.nativeElement, '').width));
    // this.wrapper.nativeElement.style.width = this.initWidth + "px";
    // this.wrapper.nativeElement.style.height = this.content.height;
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        console.log(mutation)
        if (this.content.style == 2) {
          // console.log((this.imageContainer.nativeElement as ElementRef))
          // console.log(parseInt(getComputedStyle(this.imageContainer.nativeElement,'').width)-20)
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
    // const MIN_DIMENSIONS_PX: number = 50;
    // if (
    //   event.rectangle.width &&
    //   event.rectangle.height &&
    //   (event.rectangle.width < MIN_DIMENSIONS_PX ||
    //     event.rectangle.height < MIN_DIMENSIONS_PX)
    // ) {
    //   return false;
    // }
    // console.log(event)
    if (this.content.style == 2) 
    { 
      let x = event.rectangle.height && (event.rectangle.height > parseInt(getComputedStyle(this.imageContainer.nativeElement).width));
      // console.log(this.bottom,event.edges.bottom,event.edges.bottom && this.bottom < event.edges.bottom, x)
      if ((event.edges.bottom && (event.edges.bottom > 0 && x)) || (x && event.edges.bottom && this.bottom < event.edges.bottom))
      {
        // console.log('xx')
        return false;
      }
      this.bottom = event.edges.bottom!;
    }

    return true;
  }

  onResizeEnd(event: ResizeEvent): void {
    // this.style = {
    //   // position: 'fixed',
    //   // left: `${event.rectangle.left}px`,
    //   // top: `${event.rectangle.top}px`,
    //   // width: `${event.rectangle.width}px`,
    //   height: `${event.rectangle.height}px`,
    // };
    this.content.height = event.rectangle.height + 'px'
  }

  onResize(event: ResizeEvent): void {
    // this.style = {
    //   // position: 'fixed',
    //   // left: `${event.rectangle.left}px`,
    //   // top: `${event.rectangle.top}px`,
    //   // width: `${event.rectangle.width}px`,
    //   height: `${event.rectangle.height}px`,
    // };
    // if ( event.rectangle.width && event.rectangle.height && (event.rectangle.height >= event.rectangle.width))
    // {
    //   this.content.height = event.rectangle.width + 'px';
    // }
    this.content.height = event.rectangle.height + 'px'
  }

  // xxx(event: any) {
  //   console.log(event)
  // }
// m_posX = 0;
// m_posY = 0;
  // resizeX(e: any, dir: ResizeDirection){
  //   // console.log(dir)
  //   // console.log(e);
  //   // console.log(e.x)
  //   // this.wrapper.nativeElement.style.marginLeft = '10%';
  //   // this.wrapper.nativeElement.style.marginRight = '10%';
  //   var parent = this.wrapper.nativeElement;
  //   var dx = this.m_posX - e.x;
  //   // var dy = this.m_pos - e.y;
  //   this.m_posX = e.x;
  //   // console.log(dx);
  //   // console.log((parseInt(getComputedStyle(parent, '').width))/this.initWidth)
  //   // parent.style.width = (parseInt(getComputedStyle(parent, '').width) + dx*2*dir) + "px";
  //   var newWidth = Math.min(parseInt(getComputedStyle(parent, '').width) + dx*2*dir, this.initWidth);
  //   // console.log(newWidth)
  //   // console.log(newWidth / this.initWidth);
  //   // console.log(newWidth)
  //       parent.style.width = newWidth / this.initWidth*100 + "%";

    // parent.style.marginLeft = (parseInt(getComputedStyle(parent, '').marginLeft) + dx*dir) + "px";
    // parent.style.marginRight = (parseInt(getComputedStyle(parent, '').marginRight) + dx*dir) + "px";
    // console.log(this.wrapper)
    // console.log(parent.style.width)
    // parent.style.width = "100%";
    // console.log(parent.style.width)
    // parent.style.height = (parseInt(getComputedStyle(parent, '').width) + dy) + "px";


}

// ngOnChanges(changes: SimpleChanges): void {
//   console.log(changes)
//   if (this.content.style == 2) {
//     this.content.height = Math.min(parseInt(getComputedStyle(this.imageContainer.nativeElement,'').width)-20, (parseInt(getComputedStyle(this.wrapper.nativeElement, '').height))) + 'px'
//   }
//   console.log(this.imageContainer)
// }

// resizeY(e: any) {
//   var parent = this.wrapper.nativeElement;
//   var wrapper = this.imageContainer.nativeElement;

//   // console.log(this.wrapper)
//   var dy = this.m_posY - e.y;
//   // var dy = this.m_pos - e.y;
//   this.m_posY = e.y;
//   // parent.style.height = (parseInt(getComputedStyle(parent, '').height) - dy) + "px";
//   // this.content.height = (parseInt(getComputedStyle(parent, '').height) - dy) + "px";

//   let parentHeight = parseFloat(getComputedStyle(parent, '').height) - dy;
//   let wrapperWidth = parseFloat(getComputedStyle(wrapper, '').width);
//   let xxx = parentHeight / wrapperWidth;

//   console.log(parentHeight, wrapperWidth, xxx)
//   this.content.height = xxx*100 + '%';







//   // console.log(getComputedStyle(parent, '').height)
//   // let maxWidth = parseFloat(getComputedStyle(this.imageContainer.nativeElement,'').width)-20;
//   // let oldHeight = parseFloat(getComputedStyle(parent, '').height)
//   // let height = oldHeight - dy;
//   // let newHeight = ((oldHeight / maxWidth) - (dy/maxWidth)) * 100;



//   // if (this.content.style == 2) {
//   //   newHeight = Math.min(parseInt(getComputedStyle(this.imageContainer.nativeElement,'').width)-20, (parseInt(getComputedStyle(parent, '').height) - dy))
//   // }









//   // console.log({height, maxWidth, newHeight, dy, e})


//   // let newHeightPerc = (parseInt(getComputedStyle(this.imageContainer.nativeElement,'').width)-20 / newHeight)*100;
//   // console.log(newHeight)









//   // if (this.content.style == 2) {
//   //   newHeight = Math.min(100, newHeight)
//   // }


//   // console.log(parseInt(getComputedStyle(this.imageContainer.nativeElement,'').width)-20, (parseInt(getComputedStyle(parent, '').height) - dy) + "px");
//   // this.content.height = newHeight + 'px';





//   // this.content.height = newHeight + '%';


//   // console.log(this.initHeight);
//   // var newHeight = parseInt(getComputedStyle(parent, '').height) - dy;
//   // parent.style.height = newHeight + "px";
//   // console.log(newHeight)
//   // console.log((parseInt(getComputedStyle(parent, '').height))/this.initHeight)
// }

// globalListenFunc!: Function;
//   resizeInit(e: any, dir: ResizeDirection) {
//     this.m_posX = e.x;
//     this.m_posY = e.y;
//     // e.preventDefault();
//     this.globalListenFunc = this.renderer.listen('document', 'mousemove', e => {
//       // console.log(e);
//       if (dir === ResizeDirection.BOTTOM)
//         this.resizeY(e);
//       else {
//         // this.resizeX(e,dir);
//       }

//     });
//     // this.renderer.listen('document', 'mouseup', e => {
//     //   console.log(e);
//     //   // this.resizeEnd(e);
//     // });
//     // document.addEventListener("mousemove", this.resize, false);
//   // document.addEventListener("mouseup", function(){
      
//   // }, false);
//   }

//   resizeEnd(e:any) {
//     // document.removeEventListener("mousemove", this.resize, false);
//     if (this.globalListenFunc)
//       this.globalListenFunc();
//   }

//   public get resizeDirection(): typeof ResizeDirection {
//     return ResizeDirection; 
//   }


// enum ResizeDirection {
//   RIGHT = -1,
//   BOTTOM = 0,
//   LEFT = 1,

// }


