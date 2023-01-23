import { CdkDrag } from '@angular/cdk/drag-drop';
import { AfterViewInit, Component, ContentChild, ElementRef, EventEmitter, Injector, Input, OnInit, Output, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { MatIcon } from '@angular/material/icon';
import { TextClass } from '../../component-classes';
import { FONT_NAMES, FONT_NAMES_LOWER } from '../../constants';

@Component({
  selector: 'web-section-text',
  templateUrl: './web-text.component.html',
  styleUrls: ['./web-text.component.scss']
})
export class WebTextComponent implements OnInit {
  // @Output() delete: EventEmitter<any> = new EventEmitter();
  @Input() content!: TextClass;
  // @ViewChild('xxx',{ read: ElementRef})
  // private xxx!: ElementRef;
  // pepa: any = 'aaa';
  // @ViewChild('vc') vc!: ElementRef;

  // @HostBinding('attr.cdkDrag') myHiliteDirective = new CdkDrag(this.elementRef);
//   fonts = FONT_NAMES.map(function (x, i) { 
//     return [x, FONT_NAMES_LOWER[i]] 
// });
  modules = {
    // toolbar: [
    //   ['bold', 'italic'],        // toggled buttons
    //   // ['blockquote', 'code-block'],
    
    //   // [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    //   // [{ 'list': 'ordered'}, { 'list': 'bullet' }], //list custom with block 
    //   // [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    //   // [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    //   // [{ 'direction': 'rtl' }],                         // text direction
    
    //   // [{ 'size': FONT_SIZES }],  // custom dropdown
    //   // [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    //   [{ 'header': [1, 2, 3, false, 10] }],
    //   // [ {'kokotina': ['custom-header', 'custom-header2']}],
    //         // [ 'custom-header', 'custom-header2'],
    //         // [{ 'custom-header': [1, 2, 3, 4, 5, 6] }],
    //   // [{ 'placeholder': ['[GuestName]', '[HotelName]'] }]
    //   [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    //   // [{ 'font': FONT_NAMES_LOWER }],
    //   [{'font': FONT_NAMES}],
    //   [{ 'align': [] }],
    //   // [{
    //   //   'indent': '-1'
    //   // }, {
    //   //   'indent': '+1'
    //   // }],
    //   // [{
    //   //   'letter-spacing': '-0.1'
    //   // }, {
    //   //   'letter-spacing': '+0.1'
    //   // }],

      
    //   ['clean']                                         // remove formatting button
    // ]
    imageDropAndPaste: {
      handler: () => {return false}
    },
  }

  FONT_NAMES = FONT_NAMES;
  FONT_NAMES_LOWER = FONT_NAMES_LOWER;
  constructor(private renderer: Renderer2) { 
  }

  // ngAfterViewInit() {
  //   if (this.xxx) {
  //     // console.log('content was present');
  //     // console.log(this.xxx.nativeElement.innerHTML)
  //     // console.log(this.xxx.nativeElement.children[0])
  //     this.pepa = this.xxx.nativeElement.children[0];
  //     this.xxx.nativeElement.remove();
  //     // console.log(this.pepa)
  //   }
  // }
  ngOnInit(): void {
  }

  editorCreated(quill: any) {
    console.log(quill.getModule("toolbar"))
    // quill.getModule("toolbar").addButton("indent","+1");
    // this.createButton(quill, 'arrow_downward',this.moveDown)
    // this.createButton(quill, 'arrow_upward', this.moveUp)
    // this.createButton(quill, 'arrow_back', this.moveLeft)
    // this.createButton(quill, 'arrow_forward', this.moveRight)
    // this.createHandle(quill);
    // this.createButton(quill, 'delete')

  }


  // createButton(quill: any, icon: string) {
  //   const newIcon = this.renderer.createElement('mat-icon');
  //   this.renderer.appendChild(newIcon, this.renderer.createText(icon));


  //   this.renderer.addClass(newIcon, 'mat-icon');
  //   this.renderer.addClass(newIcon, 'material-icons');

  //   var menu = quill.theme.tooltip.root.querySelector('.ql-tooltip-submenu')
  //   this.renderer.appendChild(menu, newIcon)
  //   this.renderer.addClass(menu, 'ql-tooltip-submenu-show')
    
  //   // newIcon.addEventListener('click', () => clickFn);
  //   this.renderer.listen(newIcon, 'click', ()=> {
  //     // console.log('delete');
  //     // console.log(this.content)
  //     this.delete.emit();
  //   });
  //   // console.log(this.pepa)
  // }

  // createHandle(quill: any) {
  //   var menu = quill.theme.tooltip.root.querySelector('.ql-tooltip-submenu')
  //   this.renderer.appendChild(menu, this.pepa)
  //   this.renderer.addClass(menu, 'ql-tooltip-submenu-show')
  // }


  // delete() {
  //   // console.log(this.content)
  //   console.log('delete');

  // }

}



