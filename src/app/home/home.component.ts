import { Component } from '@angular/core';
// import * as Quill from 'quill'; 
import Quill from 'quill';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  htmlText ="<p>Testing</p>"


  constructor()
  {

  }
}

const BubbleTheme = Quill.import("themes/bubble");
const BaseToolTip = Quill.import("ui/tooltip")
const icons = Quill.import("ui/icons")
class ExtendBubbleTheme extends BubbleTheme {
  constructor(quill:any, options:any) {
    super(quill, options);
   
  }

  extendToolbar(toolbar: any) {
    this.tooltip = new ExtendBubbleTooltip(this.quill, this.options.bounds);
    this.tooltip.root.appendChild(toolbar.container);
    this.buildButtons(Array.from(toolbar.container.querySelectorAll('button')), icons);
    this.buildPickers(Array.from(toolbar.container.querySelectorAll('select')), icons);
  }
}

class ExtendBubbleTooltip extends BaseToolTip {
  constructor(quill:any, bounds:any) {
    super(quill, bounds);
    this.quill.on(
      'editor-change',
      (type:any, range:any, oldRange:any, source:any) => {
        if (type !== 'selection-change') return;
        if (

          source === 'user'
        ) {
          this.show();

          this.root.classList.add('ql-flip');
          this.root.classList.add('ql-position');
          quill.root.classList.add('ql-editing');
        } else if (
          document.activeElement !== this.textbox &&
          this.quill.hasFocus()
        ) {
          this.hide();
          quill.root.classList.remove('ql-editing');
        }
      },
    );
  }
}
ExtendBubbleTooltip.TEMPLATE = [
  '<span class="ql-tooltip-arrow"></span>',
  '<div class="ql-tooltip-editor">',
  '</div>',
].join('');

Quill.register("themes/bubble2", ExtendBubbleTheme);

