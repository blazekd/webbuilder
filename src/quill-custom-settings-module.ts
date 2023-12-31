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
      this.tooltip = new ExtendBubbleTooltip(this.quill, this.options.bounds);
      this.tooltip.root.appendChild(toolbar.container);
      this.buildButtons(Array.from(toolbar.container.querySelectorAll('button')), icons);
      this.buildPickers(Array.from(toolbar.container.querySelectorAll('select')), icons);
    }
    // custom color pickers
    buildPickers(selects: HTMLElement[], icons: any) {
      // select classes from selects and run it here, other to super.buildPickers()
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
      // add to this.pickers instead
      let newPickers = Array.from(thisPickers).map((select: any) => {
        const format = select.classList.contains('ql-background')
          ? 'background'
          : 'color';
        if (select.querySelector('option') == null) {
          fillSelect(
            select,
            COLORS,
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
          if (
            !this.quill.hasFocus()
          ) {
            quill.root.classList.remove('ql-border');
          }
          if (type !== 'selection-change') return;
          if (
            source === 'user'
          ) {
            this.show();
            if (this.root.getBoundingClientRect().top > 250)
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
            quill.root.classList.remove('ql-editing');
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
  

  
  class LetterSpacingAttributor extends Parchment.Attributor.Style {
    add (node: any, value: any) {
  
      let num = this.value(node);
  
      if (num == undefined) {
        if (value[0] == '+') {
          let numx = parseFloat(value);
          return super.add(node, `${numx}em`)
        } else if (value[0] == '-') {
          this.remove(node);
          return true;
        } else {
          return super.add(node, `${value}em`)
        }
  
      }
      else if (num <= 0 && value[0] == '-') {
        this.remove(node);
        return true
      } else if (value[0] == '+' || value[0] == '-') {
        let numx = num + parseFloat(value);
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
        default:
          base = 100;
      }

      if (num == undefined) {
        if (value[0] == '+') {
          let numx = base + parseFloat(value);
          return super.add(node, `${numx}%`)
        } else if (value[0] == '-') {
          this.remove(node);
          return true;
        } else if (base <= value) {
          return super.add(node, `${value}%`)
        }
        else {
          this.remove(node);
          return true;
        }
  
      }
      else if (num <= base && value[0] == '-') {
        this.remove(node);
        return true
      } else if (value[0] == '+' || value[0] == '-') {

        let numx = num + parseFloat(value);
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