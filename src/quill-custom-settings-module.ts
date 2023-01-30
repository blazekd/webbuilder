import { NgModule } from '@angular/core';
import Quill from 'quill'
import ImageDropAndPaste from 'quill-image-drop-and-paste';
import { FONT_NAMES } from './app/create-web/constants';

function fillSelect(select: any, values: any, defaultValue: any = false) {
    values.forEach((value: any) => {
      const option = document.createElement('option');
      if (value === defaultValue) {
        option.setAttribute('selected', 'selected');
      } else {
        option.setAttribute('value', value);
      }
      option.innerText = value;
      select.appendChild(option);
    });
  }
  
  Quill.register('modules/imageDropAndPaste', ImageDropAndPaste)
  
  const BubbleTheme = Quill.import("themes/bubble");
  const BaseToolTip = Quill.import("ui/tooltip")
  const icons = Quill.import("ui/icons")
  
  
  const ColorPicker = Quill.import('ui/color-picker');
  
  class MyColorPicker extends ColorPicker {
    constructor(select: any, icons: any) {
      super(select, icons);
      
    }
  
    buildItem(option: any) {
      const item = document.createElement('span');
      // @ts-expect-error
      item.tabIndex = '0';
      item.setAttribute('role', 'button');
      item.classList.add('ql-picker-item');
      // item.classList.add('custom-class');
      if (option.hasAttribute('value')) {
        item.setAttribute('data-value', option.getAttribute('value'));
      }
      if (option.textContent) {
        item.setAttribute('data-label', option.textContent);
        item.setAttribute('title', option.textContent);
      }
      item.addEventListener('click', () => {
        this.selectItem(item, true);
      });
      item.addEventListener('keydown', event => {
        switch (event.key) {
          case 'Enter':
            this.selectItem(item, true);
            event.preventDefault();
            break;
          case 'Escape':
            this.escape();
            event.preventDefault();
            break;
          default:
        }
      });
      
      item.style.backgroundColor = option.getAttribute('value') || '';
      return item;
    }
  }
  
  class ExtendBubbleTheme extends BubbleTheme {
    constructor(quill: any, options: any) {
      super(quill, options);
      quill.root.setAttribute('spellcheck', false)
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
    //custom color pickers
    buildPickers(selects: HTMLElement[], icons: any) {
      //select classes from selects and run it here, other to super.buildPickers()
      const COLORS = [
        'none',
        '#000000',
        '#e60000',
        '#ff9900',
        '#ffff00',
        '#008a00',
        '#0066cc',
        '#9933ff',
        '#ffffff',
        '#facccc',
        '#ffebcc',
        '#ffffcc',
        '#cce8cc',
        '#cce0f5',
        '#ebd6ff',
        '#bbbbbb',
        '#f06666',
        '#ffc266',
        '#ffff66',
        '#66b966',
        '#66a3e0',
        '#c285ff',
        '#888888',
        '#a10000',
        '#b26b00',
        '#b2b200',
        '#006100',
        '#0047b2',
        '#6b24b2',
        '#444444',
        '#5c0000',
        '#663d00',
        '#666600',
        '#003700',
        '#002966',
        '#3d1466',
      ];
  
  
      let [thisPickers, superPickers] = partition(selects, (select: any) => (select.classList.contains('ql-background') ||
      select.classList.contains('ql-color')));
      super.buildPickers(superPickers, icons);
      //ad to this.pickers instead
      let newPickers = Array.from(thisPickers).map((select: any) => {
        const format = select.classList.contains('ql-background')
          ? 'background'
          : 'color';
        if (select.querySelector('option') == null) {
          fillSelect(
            select,
            COLORS,
            // //format === 'background' ? '#ffffff' : '#000000',
            'none'
          );
        }
        return new MyColorPicker(select, icons[format]);
    })
    const update = () => {
      newPickers.forEach((picker) => {
          picker.update();
      });
    };
    this.quill.on('editor-change', update);
  
  }
  }
  
  function partition(array: Array<any>, isValid: any) {
    return array.reduce(([pass, fail], elem) => {
      return isValid(elem) ? [[...pass, elem], fail] : [pass, [...fail, elem]];
    }, [[], []]);
  }
  
  class ExtendBubbleTooltip extends BaseToolTip {
    constructor(quill: any, bounds: any) {
      super(quill, bounds);
      this.quill.on(
        'editor-change',
        (type: any, range: any, oldRange: any, source: any) => {
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
      quill.getModule("toolbar").container.addEventListener("mousedown", (e: any) => {
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
  

  
    var fontStyles = "";
  FONT_NAMES.forEach(function(font: any) {
      fontStyles += ".ql-bubble .ql-picker.ql-font .ql-picker-item[data-value='" + font + "']::before {" +
          "content: '" + font + "';" +
          "font-family: '" + font + "', sans-serif;" +
          "}"
  });

  var node = document.createElement('style');
  node.innerHTML = fontStyles;
  document.body.appendChild(node);
  
  
  
  
  let Header = Quill.import('formats/header');
  Header.create = function(value: any) {
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
  
    value(node: any) {
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
  
    value(node: any) {
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


  
@NgModule({
})
export class QuillCustomSettingModule {}