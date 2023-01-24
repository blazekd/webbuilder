
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Quill from 'quill';
import ImageDropAndPaste from 'quill-image-drop-and-paste';
import { NewComponentComponent } from './add/new-component/new-component.component';
import { EditMenuModule, EditDialog, NavComponentClass, SectionComponentClass, GridComponentClass, FooterComponentClass } from './components/component-classes';
import { FONT_NAMES, FONT_NAMES_LOWER } from './components/constants';
import { EditNavComponent } from './edit/edit-nav/edit-nav.component';
import { EditComponent } from './edit/edit.component';

@Component({
  selector: 'app-create-web',
  templateUrl: './create-web.component.html',
  styleUrls: ['./create-web.component.scss']
})
export class CreateWebComponent implements OnInit {

  
  // showMenu = false;
  // showSettings = false;
  showPc = true;


  components: ComponentData[] = [
    {type: 'nav', data: NavComponentClass.webnode()},
    // {type: 'header', data: HeaderComponentClass.empty()},
    // {type: 'text', data: TextComponentClass.empty()},
    {type: 'section', data: SectionComponentClass.webnode0()},
    // {type: 'section', data: SectionComponentClass.grid()},
    {type: 'section', data: SectionComponentClass.webnode1()},
    {type: 'section', data: SectionComponentClass.webnode2()},
    {type: 'section', data: SectionComponentClass.webnode3()},
    {type: 'section', data: SectionComponentClass.webnode4()},
    // {type: 'section', data: SectionComponentClass.title()},
    // {type: 'grid', data: GridComponentClass.test2()},
    // {type: 'section', data: SectionComponentClass.image()},
    // {type: 'section', data: SectionComponentClass.text()},
    // {type: 'section', data: SectionComponentClass.columns()},
    // {type: 'section', data: SectionComponentClass.empty()},

    {type: 'footer', data: FooterComponentClass.webnode()},
  ]
  scrolledTop = true;
  // pageSettings: PageSettings = { title: 'Název stránky', defaultFont: 'Roboto', defaultFontWeight: '300'}
  // oldPageSettings: PageSettings = Object.assign({}, this.pageSettings);
  favicon = '???'

  constructor(public dialog: MatDialog) { }



  ngOnInit(): void {

  }


  // activateMenu() {
  //   this.showSettings = false;
  //   this.showMenu = !this.showMenu;
  // }

  // activateSettings() {
  //   this.showMenu = false;
  //   // this.showSettings = !this.showSettings;
  //   // if (this.showSettings)
  //   //   this.oldPageSettings = Object.assign({}, this.pageSettings);
  // }

  // setSettings(event: any) {
  //   console.log(event);
  //   // if (event === undefined)
  //   //   this.pageSettings = this.oldPageSettings;
  //   // else {
  //   //   this.pageSettings = event;
  //   // }
  //   this.showSettings = false;
  // }

  // addComp() {
  //   this.components.push({type: 'header', data: 'Real friends, Real life', background: 'pozadi1', classes: new Map().set('text-align', 'text-left').set('text-align-v', 'align-items-end').set('section-size', 'section-large').set('font', 'roboto').set('font-size', 'font-size-32').set('font-weight', 'font-weight-light'), classesString: ''});
  // }

  addComp(i: number) {
    if (this.dialog.openDialogs.length > 0)
      return;

    const dialogRef = this.dialog.open(NewComponentComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined)
        this.newComponent(result);
        switch (result) {
          case 'title':
            this.components.splice(i, 0, {type: 'section', data: SectionComponentClass.title()});
            break;
          case 'section':
            this.components.splice(i, 0, {type: 'section', data: SectionComponentClass.empty()});
            break;
          case 'text':
            this.components.splice(i, 0, {type: 'section', data: SectionComponentClass.text()});
            break;
          case 'text2':
            this.components.splice(i, 0, {type: 'section', data: SectionComponentClass.text2()});
            break;
          case 'cards':
            this.components.splice(i, 0, {type: 'section', data: SectionComponentClass.grid()});
            break;
          default:
            alert("Není implementováno!!");
            break;
        }
    });

    
  }

  newComponent(result: any) {

  }

  editComp(i: number) {
    if (this.dialog.openDialogs.length > 0)
      return;
    let dialogRef;
    switch (this.components[i].type) {
      case 'nav':
        dialogRef = this.dialog.open(EditComponent, {
          // data: NavComponentClass.fromComponent(this.components[i])
          data: EditDialog.navDialog(this.components[i].data)
        });
        break;
      // case 'header':
      //   // dialogRef = this.dialog.open(EditHeaderCompComponent, {
      //   //   // data: NavComponentClass.fromComponent(this.components[i])
      //   //   data: this.components[i].data
      //   // });
      //   break;
      // case 'image':
      //   break;
      // case 'review':
      //   break;
      case 'section':
        dialogRef = this.dialog.open(EditComponent, {
          // data: NavComponentClass.fromComponent(this.components[i])
          data: EditDialog.sectionDialog(this.components[i].data)
        });
        break;
      case 'footer':
        dialogRef = this.dialog.open(EditComponent, {
          // data: NavComponentClass.fromComponent(this.components[i])
          data: EditDialog.footerDialog(this.components[i].data)
        });
        break;
      default:
        break;
    }

    if (dialogRef === undefined)
      return;

    // dialogRef.componentInstance.change.subscribe(result => {
    //   console.log(result)
    //   if (result !== undefined) 
    //     this.components[i] = NavComponentClass.toComponent(result);
    // });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        console.log(result);
        // this.components[i] = result;
        this.components[i].data = result;
        // this.components = this.components.slice();
      }
    });
  }

  moveCompUp(index: number) {
    // console.log('move up: ' + index);
    [this.components[index-1], this.components[index]] = [this.components[index], this.components[index-1]];
  }

  moveCompDown(index: number) {
    // console.log('move down: ' + index);
    [this.components[index], this.components[index+1]] = [this.components[index+1], this.components[index]];
  }

  deleteComp(index: number) {
    // console.log('delete: ' + index);
    this.components.splice(index, 1);
  }

  onElementScroll(event:any) {
  //   console.log(event.target.scrollTop);
  //   if (event.target.scrollTop == 0) {
  //     this.scrolledTop = true;
  //   } else {
  //     this.scrolledTop = false;
  //   }
  }
}

export interface ComponentData {
  type: string;
  //data: string;
  // object: any;
  data: any;
}

Quill.register('modules/imageDropAndPaste', ImageDropAndPaste)

const BubbleTheme = Quill.import("themes/bubble");
const BaseToolTip = Quill.import("ui/tooltip")
const icons = Quill.import("ui/icons")
class ExtendBubbleTheme extends BubbleTheme {
  constructor(quill:any, options:any) {
    super(quill, options);
    quill.root.setAttribute('spellcheck', false)
    // console.log(options);
  }

  extendToolbar(toolbar: any) {
    // console.log(toolbar.quill.options.modules); // if HEADER module, if TEXT module.. add correct buttons
    // if (toolbar.quill.options.modules.clipboard !== undefined) {
    //   console.log('hasClipboard')
    //   var customButton = document.querySelector('#ql-tooltip-submenu')
    //   customButton?.insertAdjacentHTML('beforeend', '<button>two</button>');
    //   // customButton?.appendChild()
    //   console.log(customButton)
    // }

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
        // console.log('type: ' + type);
        // console.log('source: ' + source);
        // console.log('fočus: ' +  this.quill.hasFocus())
        // console.log('fočus2: ' +  document.activeElement === this.textbox)
        // console.log('************************')
        if (
          !this.quill.hasFocus()
        ) {
          // this.hide();
          // console.log('asdasijdasdasj')
          // quill.root.classList.remove('ql-editing');
          quill.root.classList.remove('ql-border');
        }
        if (type !== 'selection-change') return;
        if (
          source === 'user'
        ) {
          this.show();
          // console.log(this.root);
          this.root.classList.add('ql-flip');
          this.root.classList.add('ql-position');
          quill.root.classList.add('ql-editing');
          if (this.quill.hasFocus())
            quill.root.classList.add('ql-border');
        } else if (
          document.activeElement !== this.textbox &&
          !this.quill.hasFocus()
        ) {
          this.hide();
          // console.log('ajajaaj')
          quill.root.classList.remove('ql-editing');
          // quill.root.classList.remove('ql-border');
        }
      },
    );
    quill.getModule("toolbar").container.addEventListener("mousedown", (e:any) => {
      e.preventDefault();
    });
  }
}
ExtendBubbleTooltip.TEMPLATE = [
  '<span class="ql-tooltip-arrow"></span>',
  '<div class="ql-tooltip-editor">',
  '</div>',
  '<div class="ql-tooltip-submenu">',
  '</div>',
].join('');

Quill.register("themes/bubble2", ExtendBubbleTheme, true);
const Parchment = Quill.import('parchment');


const AlignStyle = Quill.import('attributors/style/align');
const BackgroundStyle = Quill.import('attributors/style/background');
const ColorStyle = Quill.import('attributors/style/color');
const DirectionStyle = Quill.import('attributors/style/direction');
const FontStyle = Quill.import('attributors/style/font');

// let Blocka = Quill.import('blots/block');

// class FontStyle extends Blocka { }
// FontStyle.blotName = 'font';
// FontStyle.whitelist = FONT_NAMES;


// FontStyle.Scope = Parchment.Scope.BLOCK;
const SizeStyle = Quill.import('attributors/style/size');
SizeStyle.whitelist = null;
SizeStyle.scope = Parchment.Scope.BLOCK;
ColorStyle.scope = Parchment.Scope.BLOCK;
BackgroundStyle.scope = Parchment.Scope.BLOCK;
Quill.register(AlignStyle, true);
Quill.register(BackgroundStyle, true);
Quill.register(ColorStyle, true);
Quill.register(DirectionStyle, true);
Quill.register(FontStyle, true);
Quill.register(SizeStyle, true);

var Font = Quill.import('formats/font');
// // We do not add Aref Ruqaa since it is the default
Font.whitelist = null;
Font.scope = Parchment.Scope.BLOCK;
Quill.register(Font, true);



// const BlockEmbed = Quill.import('blots/embed');

// https://github.com/quilljs/quill/issues/409
// class CustomColor extends Parchment.Attributor.Style {
//   value(node:any) {
//     let value = super.value(node);
//     console.log(value);
//     if (!value.startsWith('rgb(')) return value;

//     value = value.replace(/^[^\d]+/, '').replace(/[^\d]+$/, '');

//     console.log('#' + value.split(',').map(function(component:any) {
//       return ('00' + parseInt(component, 10).toString(16)).slice(-2);
//     }).join(''))

//     return '#' + value.split(',').map(function(component:any) {
//       return ('00' + parseInt(component, 10).toString(16)).slice(-2);
//     }).join('');
//   }
//   constructor(a: any, b: any, c: any) {
//     super(a,b,c);
//   }

// }

// const customColorAttributor = new CustomColor('custom-color', 'color', {
//     scope: Parchment.Scope.BLOCK,
// });

// Quill.register('attributors/style/color',customColorAttributor);


// const ListItemBlot = Quill.import('formats/list/item');
// class CustomListItem extends ListItemBlot {
//   optimize(context:any) {
//     super.optimize(context);
//     // console.log('???????????')
//     if (this.children.length === 1) {
//       const child = this.children.head;
//       const attributes = child.attributes;

//       if (attributes && attributes.attributes.color) {
//         const color = attributes.attributes.color.value(child.domNode);
//         super.format('custom-color', color);
//       }
//     } else {
//       if (this.attributes.attributes.hasOwnProperty('custom-color')) {
//         super.format('custom-color', null);
//       }
//     }
// }
// }
// Quill.register('formats/list/item',CustomListItem);

// const Block = Quill.import('blots/block');

//   class HeadLine extends Block {}
//   HeadLine.blotName = 'headline';
//   HeadLine.tagName = 'h1';
//   HeadLine.className = 'headline-class';
//   Quill.register(HeadLine, true);

//   class Content extends Block {}
//   Content.blotName = 'content';
//   Content.tagName = 'div';
//   Content.className = 'content-class';
//   Quill.register(Content, true);


//   class Size extends Block {}
//   Content.blotName = 'size';
//   Content.tagName = 'h1';
//   Quill.register(Size, true);

  // Change the icon in the toolbar
  // const icons = Quill.import('ui/icons');
  // icons['headline'] = '<button>H</button>';
  // icons['content'] = '<button>C</button>';

  var fontStyles = "";
FONT_NAMES.forEach(function(font) {
    fontStyles += ".ql-bubble .ql-picker.ql-font .ql-picker-item[data-value='" + font + "']::before {" +
        "content: '" + font + "';" +
        "font-family: '" + font + "', sans-serif;" +
        "}"
});
// FONT_NAMES_LOWER.forEach(function(font) {
//   // var fontName = font.toLowerCase().replace(/\s/g, "-");
//   // console.log(fontName);
//   fontStyles += ".ql-bubble .ql-picker.ql-font .ql-picker-label[data-value='" + font + "']::before, .ql-bubble .ql-picker.ql-font .ql-picker-item[data-value='" + font + "']::before {" +
//       "content: '" + font + "';" +
//       "font-family: '" + font + "', sans-serif;" +
//       "}" 
//       // +
//       // ".ql-font-" + fontName + "{" +
//       // " font-family: '" + font + "', sans-serif;" +
//       // "}";
// });
var node = document.createElement('style');
node.innerHTML = fontStyles;
document.body.appendChild(node);




let Header = Quill.import('formats/header');
Header.create = function(value: any) {
  // ignore value, always create h4
  // console.log('header: ' + value);
  // console.log(typeof value)
  switch(+value) {
    case 1:
      return document.createElement('h1');
    case 2:
      return document.createElement('h2');
    case 3:
      return document.createElement('h3');
    case 4:
      return document.createElement('h4');
    case 5:
      return document.createElement('h5');
    case 6:
      return document.createElement('h6');
    case 7:
      return document.createElement('h7');
    case 8:
      return document.createElement('h8');
    case 10:
      return document.createElement('blockquote');
  }

  return document.createElement('p');
};

// let Inline = Quill.import('blots/inline');
// class CustomHeader extends Inline {
//   static create(value: any) {
//     let node = super.create();
//     node.setAttribute('style', 'font-size:150%; color: purple');
//     node.setAttribute('src', value.url);
//     return node;
//   }

//   static value(node) {
//     return {
//       alt: node.getAttribute('alt'),
//       url: node.getAttribute('src')
//     };
//   }
// }

// EmphBlot.blotName = 'em';
// EmphBlot.tagName = 'em';
// EmphBlot.className = 'custom-em';
// ReactQuill.Quill.register('formats/em', EmphBlot);

// let Block = Quill.import('blots/block');
// class CustomHeader extends Block {
//   static formats(domNode: any) {
//     console.log(domNode);
//     return this.tagName.indexOf(domNode.tagName) + 1;
//   }
// }
// CustomHeader.blotName = 'custom-header';
// CustomHeader.tagName = ['H1', 'H2', 'p', 'div', 'aaa', 'bbb'];
// Quill.register('formats/custom-header', CustomHeader);
// class CustomHeader extends Block {
//   static formats(domNode: any) {
//     console.log(domNode);
//     return this.tagName;
//   }
// }
// CustomHeader.blotName = 'custom-header';
// CustomHeader.tagName = 'h1'
// Quill.register('formats/custom-header', CustomHeader);
// class CustomHeader2 extends Block {
//   static formats(domNode: any) {
//     console.log(domNode);
//     return this.tagName;
//   }
// }
// CustomHeader2.blotName = 'custom-header2';
// CustomHeader2.tagName = 'bbb'
// Quill.register('formats/custom-header2', CustomHeader2);

// // Quill.getModule("toolbar").addHandler("image",YOUR_HANDLER_HERE);
// icons['custom-header'] = 'X';
// icons['custom-header2'] = 'Y';


class IndentAttributor extends Parchment.Attributor.Style {
  add (node: any, value: any) {
    if (value === 0) {
      this.remove(node)
      return true
    } else {
      return super.add(node, `${value}em`)
    }
  }

  constructor(a: any, b: any, c: any) {
        super(a,b,c);
      }
}

let IndentStyle = new IndentAttributor('indent', 'text-indent', {
  scope: Parchment.Scope.BLOCK,
  whitelist: ['1em', '2em', '3em', '4em', '5em', '6em', '7em', '8em', '9em']
})


Quill.register(IndentStyle, true);

// let xxxx = ['0.2em', '0.3em', '0.4em', '0.5em', '0.6em', '0.7em', '0.8em', '0.9em'];

class LetterSpacingAttributor extends Parchment.Attributor.Style {
  add (node: any, value: any) {

    let num = this.value(node);

    if (num == undefined) {
      // console.log('x', value)
      if (value[0] == '+') {
        // console.log('xx')
        let numx = parseFloat(value);
        return super.add(node, `${numx}em`)
      } else if (value[0] == '-') {
        // console.log('xy')
        this.remove(node);
        return true;
      } else {
        // console.log('xz')
        return super.add(node, `${value}em`)
      }

    }
    else if (num <= 0 && value[0] == '-') {
      // console.log('y')
      this.remove(node);
      return true
    } else if (value[0] == '+' || value[0] == '-') {
      // console.log('z')
      // console.log(super.add(node, `${value}em`));
      // console.log(this.value(node), parseFloat(value))
      let numx = num + parseFloat(value);
      // console.log(num, value, node)
      return super.add(node, `${numx}em`)
    }
    else {
      return super.add(node, `${value}%`)
    }
  }

  value(node:any) {
    return parseFloat(super.value(node)) || undefined; // Don't return NaN
  }

  constructor(a: any, b: any, c: any) {
        super(a,b,c);
      }
}

let LetterSpacingStyle = new LetterSpacingAttributor('letter-spacing', 'letter-spacing', {
  scope: Parchment.Scope.BLOCK,
  whitelist: null
})

icons['letter-spacing'] = []
icons['letter-spacing']['+0.1'] = '<svg width="18" height="18" viewBox="0 0 18 18"><path class="ql-stroke" d="M 1,10 4,1 7,10"></path><path class="ql-stroke" d="M 3,8 H 6"></path><path class="ql-stroke" d="M 11,1 14,10 17,1"></path><polyline class="ql-stroke" points="5,13 5,17 3,15 5,13"></polyline><polyline class="ql-stroke" points="13,13 13,17 15,15 13,13"></polyline></svg>';
icons['letter-spacing']['-0.1'] = '<svg width="18" height="18" viewBox="0 0 18 18"><path class="ql-stroke" d="M 3,10 6,1 9,10"></path><path class="ql-stroke" d="M 5,8 H 7"></path><path class="ql-stroke" d="M 9,1 12,10 15,1"></path><polyline class="ql-stroke" points="5,13 5,17 7,15 5,13"></polyline><polyline class="ql-stroke" points="13,13 13,17 11,15 13,13"></polyline></svg>';

Quill.register(LetterSpacingStyle, true);

class FontSizeButtonAttributor extends Parchment.Attributor.Style {
  add (node: any, value: any) {
    // console.log(super.value(node));
    // console.log('f')
    // console.log(node.nodeName)
    let num = this.value(node);
    let base = 100;
    switch(node.nodeName.toLowerCase()) {
      case 'h1':
        base = 200;
        break;
      case 'h2':
        base = 150;
        break;
      case 'h3':
        base = 117;
        break;
      // case 'p':
      // case 'blockquote':
      default:
        base = 100;
    }
    // console.log(value, num)
    if (num == undefined) {
      // console.log('x', value)
      if (value[0] == '+') {
        // console.log('xx')
        let numx = base + parseFloat(value);
        return super.add(node, `${numx}%`)
      } else if (value[0] == '-') {
        // console.log('xy')
        this.remove(node);
        return true;
      } else if (base <= value) {
        // console.log('xz')
        // console.log(value, base)
        return super.add(node, `${value}%`)
      }
      else {
        // console.log('xa')
        this.remove(node);
        return true;
      }

    }
    else if (num <= base && value[0] == '-') {
      // console.log('y')
      this.remove(node);
      return true
    } else if (value[0] == '+' || value[0] == '-') {

      // console.log('z')
      // console.log(super.add(node, `${value}em`));
      // console.log(this.value(node), parseFloat(value))
      let numx = num + parseFloat(value);
      // console.log(num, value, node)
      return super.add(node, `${numx}%`)
    }
    else {
      return super.add(node, `${value}%`)
    }
  }

  value(node:any) {
    return parseFloat(super.value(node)) || undefined; // Don't return NaN
  }

  constructor(a: any, b: any, c: any) {
        super(a,b,c);
      }
}

let FontSizeButtonStyle = new FontSizeButtonAttributor('font-size-button', 'font-size', {
  scope: Parchment.Scope.BLOCK,
  whitelist: null
})

icons['font-size-button'] = []
icons['font-size-button']['+10'] = '<svg width="18" height="18" viewBox="0 0 18 18"><path class="ql-stroke" d="M 3,16 8,3 12,16"></path><path class="ql-stroke" d="M 5,12 H 9"></path><polyline class="ql-stroke" points="13,4 17,4 15,2 13,4"></polyline></svg>';
icons['font-size-button']['-10'] = '<svg width="18" height="18" viewBox="0 0 18 18"><path class="ql-stroke" d="M 3,16 7,5 10,16"></path><path class="ql-stroke" d="M 5,13 H 9"></path><polyline class="ql-stroke" points="13,2 17,2 15,4 13,2"></polyline></svg>';

Quill.register(FontSizeButtonStyle, true);