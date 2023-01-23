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
  @Input() content!: TextClass;

  modules = {
    imageDropAndPaste: {
      handler: () => {return false}
    },
  }

  FONT_NAMES = FONT_NAMES;
  FONT_NAMES_LOWER = FONT_NAMES_LOWER;
  constructor(private renderer: Renderer2) { 
  }

  ngOnInit(): void {
  }

}



