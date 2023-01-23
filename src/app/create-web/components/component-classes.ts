import { Type } from "@angular/core";
import { BackgroundModuleComponent } from "../edit/modules/background-module/background-module.component";
import { ButtonModuleComponent } from "../edit/modules/button-module/button-module.component";
import { ColorModuleComponent } from "../edit/modules/color-module/color-module.component";
import { LayoutModuleComponent } from "../edit/modules/layout-module/layout-module.component";
import { LogoModuleComponent } from "../edit/modules/logo-module/logo-module.component";
import { SizeModuleComponent } from "../edit/modules/size-module/size-module.component";
import { ColumnsModuleComponent } from '../edit/modules/columns-module/columns-module.component';
import { LOREM } from './constants';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { DividerColorModuleComponent } from "../edit/modules/divider-color-module/divider-color-module.component";
import { DividerStyleModuleComponent } from '../edit/modules/divider-style-module/divider-style-module.component';
import { DividerSizeModuleComponent } from '../edit/modules/divider-size-module/divider-size-module.component';
import { CalendarColorModuleComponent } from '../edit/modules/calendar-color-module/calendar-color-module.component';
import { CalendarStyleModuleComponent } from "../edit/modules/calendar-style-module/calendar-style-module.component";




export class NavComponentClass {

  constructor(public layout: LayoutClass, public color: ColorClass, public size: SizeClass, public logo: LogoAndTitleClass, public background: BackgroundClass) {
  }

  static empty() : NavComponentClass {
    return new NavComponentClass(new LayoutClass(), ColorClass.default(), new SizeClass('width2', 'height2'), LogoAndTitleClass.default(), BackgroundClass.default())
  }

  static webnode() : NavComponentClass {
    return new NavComponentClass(new LayoutClass(), ColorClass.default(), new SizeClass('width2', 'height2'), LogoAndTitleClass.webnode(), BackgroundClass.default())
  }
}

export class SectionComponentClass {
  color: ColorClass;
  size: SizeClass;
  background: BackgroundClass;
  alignment: AlignmentClass;
  columns: ColumnWrapperClass;
  constructor(color: ColorClass, size: SizeClass, background: BackgroundClass, alignment: AlignmentClass, columns: ColumnWrapperClass) {
    // console.log(this.content)
    this.color = color;
    this.size = size
    this.background = background;
    // this.content = content;
    this.alignment = alignment;
    this.columns = columns;
    // this.content = content;
  }

  // static empty() : SectionComponentClass {
  //   return new SectionComponentClass(ColorClass.default(), new SizeClass('width1', 'height5'), new BackgroundClass('nonebg', undefined, 'none'), [new ColumnClass([new TextClass('')])], new AlignmentClass(), new GridClass())
  // }
  static empty() : SectionComponentClass {
    return new SectionComponentClass(
      ColorClass.default(), 
      new SizeClass('width1', 'height5'), 
      BackgroundClass.default(), 
      // Array(5).fill(undefined).map(a => new ColumnClass([])),
      new AlignmentClass(),
      new ColumnWrapperClass([]))
  }
  static text() : SectionComponentClass {
    return new SectionComponentClass(ColorClass.default(), 
      new SizeClass('width1', 'height5'), 
      BackgroundClass.default(), 
      new AlignmentClass(), 
      new ColumnWrapperClass(
      [[
          new ColumnClass([new TextClass(LOREM[0])])
        ]], 
      ))
  }


  static grid() : SectionComponentClass {
    return new SectionComponentClass(ColorClass.default(), 
      new SizeClass('width1', 'height5'), 
      BackgroundClass.default(), 
      new AlignmentClass(), 
      new ColumnWrapperClass(
      [[
          new ColumnClass([GridComponentClass.test2()],100,false)
        ]], 
      ))
  }

  static calendar() : SectionComponentClass {
    return new SectionComponentClass(ColorClass.default(), 
      new SizeClass('width1', 'height5'), 
      BackgroundClass.default(), 
      new AlignmentClass(), 
      new ColumnWrapperClass(
      [[
          new ColumnClass([new CalendarComponentClass()],100,false)
        ]], 
      ))
  }

  static text2() : SectionComponentClass {
    return new SectionComponentClass(
      ColorClass.default(), 
      new SizeClass('width1', 'height5'),
      BackgroundClass.default(),
      new AlignmentClass(), 
      new ColumnWrapperClass(      
        [[
        new ColumnClass([new TextClass(LOREM[0])]), 
        new ColumnClass([new TextClass(LOREM[1])])
        ]],2))
  }
  static webnode0() : SectionComponentClass { // webnode!!!
    return new SectionComponentClass(
      ColorClass.default(), 
      new SizeClass('width3', 'height3'), 
      BackgroundClass.webnode(),

      new AlignmentClass(), 
      new ColumnWrapperClass(      [[
        new ColumnClass(
          [
            new TextClass('<p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><h1><br></h1><h1 style="color: rgb(255, 255, 255); text-align: center; font-size: 300%; letter-spacing: 0.7em;">OPEN YOUR MIND</h1><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><h2 style="color: rgb(255, 255, 255); text-align: center; font-family: Tahoma; font-size: 150%; letter-spacing: 0.2em;">NOVÉ ALBUM VYCHÁZÍ JIŽ <strong>18. ČERVNA 2021!</strong></h2>'),
          ])
      ]]))
  }
  static webnode1() : SectionComponentClass {
    return new SectionComponentClass(
      ColorClass.default(), 
      new SizeClass('width5', 'height5'),
      new BackgroundClass('custombg', 'url(https://d1di2lzuh97fh2.cloudfront.net/files/0c/0cx/0cx52n.jpg?ph=dee24c1a70&t=1)', 'url(https://d1di2lzuh97fh2.cloudfront.net/files/0c/0cx/0cx52n.jpg?ph=dee24c1a70&t=1)'),
      new AlignmentClass(), 
      new ColumnWrapperClass(      
      [
        [
          new ColumnClass(
            [          
              new TextClass(''),
              new TextClass(''),
              new TextClass(''),
            ])
        ],
        [
        new ColumnClass(
          [
            new TextClass('<h2 style="font-size: 200%; color: rgb(112, 112, 112);">POCTA NAŠIM KYTAROVÝM VZORŮM</h2>'),
            new TextClass('<p style="color: rgb(148, 148, 148);">Váš text začíná právě zde. Klikněte a můžete začít psát. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi.</p>'),
          ],63), 
        new ColumnClass(
          [
            new TextClass('')
          ],37)
        ],
        [
          new ColumnClass(
            [
              new ImageClass('https://d1di2lzuh97fh2.cloudfront.net/files/0h/0hj/200/0hjhl8.png?ph=dee24c1a70','x', '30px'),
            ], 16), 
          new ColumnClass(
            [
              new TextClass('')
            ], 84)
          ],
        [
          new ColumnClass(
            [
              new TextClass(''),
              new TextClass(''),
              new TextClass('')
            ])
        ]
      ]
        ,2))
  }
  static webnode2() : SectionComponentClass {
    return new SectionComponentClass(
      ColorClass.default(), 
      new SizeClass('width5', 'height3'),
      new BackgroundClass('custombg', 'url(https://d1di2lzuh97fh2.cloudfront.net/files/2s/2sh/2shjwo.jpg?ph=dee24c1a70&t=1);', 'url(https://d1di2lzuh97fh2.cloudfront.net/files/2s/2sh/2shjwo.jpg?ph=dee24c1a70&t=1);'),
      new AlignmentClass(), 
      new ColumnWrapperClass(      
        [[
        new ColumnClass([new TextClass('')],20),
        new ColumnClass([
          new TextClass('<h2 style="color: rgb(255, 255, 255); font-size: 300%; text-align: right;"><strong>OMRKNI, KDE HRAJEME A PŘIJĎ SI NÁS POSLECHNOUT</strong></h2><p style="color: rgb(255, 255, 255); text-align: right;">Váš text začíná právě zde. Klikněte a můžete začít psát. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi.</p>'),
        ],80)
        ]],2))
  }

  static webnode3() : SectionComponentClass {
    return new SectionComponentClass(
      ColorClass.default(), 
      new SizeClass('width5', 'height2'),
      new BackgroundClass('custombg', 'url(https://d1di2lzuh97fh2.cloudfront.net/files/23/23k/23kxvc.jpg?ph=dee24c1a70&t=1)', 'url(https://d1di2lzuh97fh2.cloudfront.net/files/23/23k/23kxvc.jpg?ph=dee24c1a70&t=1)'),
      new AlignmentClass(), 
      new ColumnWrapperClass(      
        [
          [
            new ColumnClass(
              [          
                new TextClass(''),
                new TextClass(''),
                new TextClass(''),
              ])
          ],
          [
            new ColumnClass(
              [
                new TextClass('')
              ],30),
            new ColumnClass(
              [
                new TextClass('<h2 style="font-size: 200%; color: rgb(112, 112, 112);">OBSAHUJE VŠECHNY TVOJE OBLÍBENÉ SKLADBY</h2>'),
                new TextClass('<p style="color: rgb(148, 148, 148);">Váš text začíná právě zde. Klikněte a můžete začít psát. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi.</p>'),
              ],70)
          ],
          [
            new ColumnClass(
              [
                new TextClass('')
              ], 81),
            new ColumnClass(
              [
                new ImageClass('https://d1di2lzuh97fh2.cloudfront.net/files/0k/0ku/200/0kuz6l.png?ph=dee24c1a70','x', '30px'),
              ], 19)
            ],
          [
            new ColumnClass(
              [
                new TextClass(''),
                new TextClass(''),
                new TextClass('')
              ])
          ]
        ]
          ,2))
  }

  static webnode4() : SectionComponentClass {
    return new SectionComponentClass(
      ColorClass.default(), 
      new SizeClass('width5', 'height3'),
      new BackgroundClass('custombg', 'url(https://d1di2lzuh97fh2.cloudfront.net/files/2s/2sh/2shjwo.jpg?ph=dee24c1a70&t=1);', 'url(https://d1di2lzuh97fh2.cloudfront.net/files/2s/2sh/2shjwo.jpg?ph=dee24c1a70&t=1);'),
      new AlignmentClass(), 
      new ColumnWrapperClass(      
        [[
        new ColumnClass([
          new TextClass('<h2 style="color: rgb(255, 255, 255); font-size: 300%;"><strong>POSLECHNI SI UKÁZKY Z NOVÉHO ALBA</strong></h2><p style="color: rgb(255, 255, 255);">Váš text začíná právě zde. Klikněte a můžete začít psát. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi.</p>'),
        ],80),
        new ColumnClass([new TextClass('')],20)
        ]],2))
  }

  static text3() : SectionComponentClass {
    return new SectionComponentClass(ColorClass.default(), 
      new SizeClass('width1', 'height5'), 
      BackgroundClass.default(),
      new AlignmentClass(), 
      new ColumnWrapperClass(
        [[
          new ColumnClass([new TextClass(LOREM[0]), new TextClass(LOREM[1]), new TextClass(LOREM[2]), new TextClass(LOREM[3]), new TextClass(LOREM[0]), new TextClass(LOREM[1]), new TextClass(LOREM[2]), new TextClass(LOREM[3]), new TextClass(LOREM[0]), new TextClass(LOREM[1]), new TextClass(LOREM[2]), new TextClass(LOREM[3])])
        ]],3 
      ))
  }



  static columns() : SectionComponentClass {
    return new SectionComponentClass(
      ColorClass.default(), 
      new SizeClass('width1', 'height5'), 
      BackgroundClass.default(),
      new AlignmentClass(),
      new ColumnWrapperClass([[
        new ColumnClass(
          [
            new TextClass(LOREM[0]), 
            new TextClass(LOREM[1])
          ]), 
        new ColumnClass(
          [
            new TextClass(LOREM[1]), 
            new TextClass(LOREM[2])
          ]), 
        new ColumnClass(
          [
            new TextClass(LOREM[2]), 
            new TextClass(LOREM[3])
          ]), 
        new ColumnClass(
          [
            new TextClass(LOREM[3]),
            new TextClass(LOREM[4])
          ]), 
        new ColumnClass(
          [
            new TextClass(LOREM[4]), 
            new TextClass(LOREM[0])
          ])
      ]], 5))
  }

  static title() : SectionComponentClass {
    return new SectionComponentClass(
      ColorClass.default(), 
      new SizeClass('width2', 'height3'), 
      BackgroundClass.title(),

      new AlignmentClass(), 
      new ColumnWrapperClass(      [[
        new ColumnClass(
          [
            new TextClass('<h1 style="text-align: center;">Nový nadpis</h1>'), 
            new TextClass('<h2 style="text-align: center;">Nový podnadpis</h2>')
          ])
      ]]))
  }


  static image() : SectionComponentClass {
    return new SectionComponentClass(
      ColorClass.default(), 
      new SizeClass('width1', 'height5'), 
      BackgroundClass.default(),
      new AlignmentClass(), 
      new ColumnWrapperClass(      
      [[
        new ColumnClass(
          [
            new ImageClass('https://i.iinfo.cz/images/108/36-c9f123043398a2effeebf57ff7f796.png', 'aaa', '300px')
          ])
      ]]))
  }
}

export class CalendarColor {

  constructor(public primary: string = "#0000ff", public secondary: string = "#ffffff") {
  }
}

export class ColumnClass {

  constructor(public content: any[], public flexBasis: number = 100, public resizable: boolean = true) {
  }
}

export class CalendarComponentClass {
  type = 'calendar'
  // color: CalendarColor
  constructor(public color: CalendarColor = new CalendarColor()) {
  }
}

export class TextClass {
  type = 'text';
  constructor(public text: string) {
  }
}

export class ImageClass {
  type = 'image';
  left = '50%';
  top = '50%';
  constructor(public src: string, public alt: string, public height: string, public style = 1) {

  }

  static default() : ImageClass {
    return new ImageClass('https://i.iinfo.cz/images/108/36-c9f123043398a2effeebf57ff7f796.png', 'aaa', '80px');
  }

  static circle() : ImageClass {
    return new ImageClass('https://i.iinfo.cz/images/108/36-c9f123043398a2effeebf57ff7f796.png', 'aaa', '80px', 2);
  }
  
}

export class DividerColorClass {
  constructor(public color: string = "#666666", public opacity: number = 0.1) {

  }
}

export class DividerSizeClass {
  constructor(public width: number = 80, public height: number = 1) {

  }
}

export class DividerStyleClass {
  constructor(public style: number = 1) {

  }
}

export class DividerClass {
  type = 'divider';
  constructor(public color: DividerColorClass, public size: DividerSizeClass, public style: DividerStyleClass) {

  }

  static default() : DividerClass {
    return new DividerClass(new DividerColorClass, new DividerSizeClass, new DividerStyleClass);
  }
}



// export class HeaderClass {
//   text: string = 'Nový nadpis';
//   haveSubtext: boolean = false;
//   subtext: string = '';
// }

export class AlignmentClass {
  // align: string = 'center';
  // justify: string = 'center';

  constructor(public align: string = 'center', public justify: string = 'center') {
  }
}



  export class LogoAndTitleClass {

    constructor(public logo: ImageClass, public hasLogo: boolean, public text: string) {
    }

    static default() : LogoAndTitleClass {
      return new LogoAndTitleClass(ImageClass.default(), true, '<p style="font-family: Courier; font-size: 250%;"><b>WORDS<b> COLLIDE</p>');
    }
    static webnode() : LogoAndTitleClass {
      return new LogoAndTitleClass(ImageClass.default(), false, '<p style="font-family: Courier; font-size: 250%;"><b>WORDS<b> COLLIDE</p>');
    }
  }
  
  
  export class ColorClass {
    color: string = '#000000';
    background: string = '#ffffff';
    name: string;
    customColor: string;
    customBackground: string;
    constructor(customColor: string, customBackground: string, name: string) {
      this.customColor = customColor;
      this.customBackground = customBackground;
      this.name = name;
      this.color = customColor;
      this.background = customBackground;
    }

    static default() : ColorClass {
      return new ColorClass('#000000', '#ffffff', 'color1');
    }
  }
  
  export class BackgroundClass {
    constructor(public name: string, public customBackground: string, public background: string) {
    }

    static default() : BackgroundClass {
      return new BackgroundClass('nonebg', '', 'none');
    }
    static title() : BackgroundClass {
      return new BackgroundClass('background3', '', 'url(/assets/img/background3.jpg)');
    }
    static webnode() : BackgroundClass {
      return new BackgroundClass('custombg', 'url(https://d1di2lzuh97fh2.cloudfront.net/files/1f/1f1/1f14ip.jpg?ph=dee24c1a70&t=1)', 'url(https://d1di2lzuh97fh2.cloudfront.net/files/1f/1f1/1f14ip.jpg?ph=dee24c1a70&t=1)');
    }

    
  }

  export class GridComponentClass {
    type = 'grid';
    color: ColorClass;
    size: SizeClass;
    background: BackgroundClass;
    alignment: AlignmentClass;
    columns: GridColumnClass;
    cards: CardClass[];
    template: CardClass;
    constructor(color: ColorClass, size: SizeClass, background: BackgroundClass, alignment: AlignmentClass, cards: CardClass[], template: CardClass, columns: GridColumnClass) {
      // console.log(this.content)
      this.color = color;
      this.size = size
      this.background = background;
      // this.content = content;
      this.alignment = alignment;
      this.columns = columns;
      // this.content = content;
      this.cards = cards;
      this.template = template;
    }

    static test() : GridComponentClass {
      return new GridComponentClass(ColorClass.default(), 
        new SizeClass('width1', 'height5'), 
        BackgroundClass.default(),
        new AlignmentClass(), 
        [
          new CardClass(
            [
              new ImageClass('https://i.iinfo.cz/images/108/36-c9f123043398a2effeebf57ff7f796.png', 'aaa', '300px'), 
              new TextClass(LOREM[0])
            ]),
          new CardClass(
            [
              new ImageClass('https://i.iinfo.cz/images/108/36-c9f123043398a2effeebf57ff7f796.png', 'aaa', '300px'), 
              new TextClass(LOREM[1])
            ]),
          new CardClass(
            [
              new ImageClass('https://i.iinfo.cz/images/108/36-c9f123043398a2effeebf57ff7f796.png', 'aaa', '300px'), 
              new TextClass(LOREM[2])
            ])
        ],
        new CardClass(
          [
            new ImageClass('https://i.iinfo.cz/images/108/36-c9f123043398a2effeebf57ff7f796.png', 'aaa', '300px'), 
            new TextClass(LOREM[2])
          ]), 
        new GridColumnClass())
    }

    static test2() : GridComponentClass {
      return new GridComponentClass(ColorClass.default(), 
        new SizeClass('width4', 'height5'), 
        BackgroundClass.default(),
        new AlignmentClass(), 
        [
          new CardClass(
            [
              {...new ImageClass('https://img.obrazky.cz/?url=b912f7f41b62f52e&size=2', 'aaa', '150px'),
              top: '30%'
            }, 
              new TextClass('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris elementum mauris vitae tortor. Maecenas libero. Nulla quis diam. Donec iaculis gravida nulla.')
            ]),
          new CardClass(
            [
              {...new ImageClass('https://cdn.myshoptet.com/usr/www.sladke-potreby.cz/user/shop/big/44209-1_depositphotos-185673142-m-2015.jpg?611fd2c0', 'aaa', '150px'),
              top: '10%'
            }, 
              new TextClass('Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat.')
            ]),
          new CardClass(
            [
              {...new ImageClass('https://blog.eshop-rychle.cz/wp-content/uploads/2019/03/light-bulb-1318337_960_720-1.png', 'aaa', '150px'), 
              top: '30%'
            },
              new TextClass('Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Aliquam id dolor.')
            ]),
          new CardClass(
            [
              {...new ImageClass('https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg', 'aaa', '150px'), 
              top: '30%'
            },
              new TextClass('Curabitur vitae diam non enim vestibulum interdum. Phasellus et lorem id felis nonummy placerat. Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo.')
            ])
        ],
        new CardClass(
          [
            new ImageClass('https://bahmansport.com/media/com_store/images/empty.png', 'aaa', '150px'), 
            new TextClass('TEXT?')
          ]),
          new GridColumnClass(4))
    }
  }

  export class GridColumnClass {
    constructor(public columns: number = 2) {
    }
  }

  export class CardClass {
    constructor(public content: any, public background: BackgroundClass = BackgroundClass.default(), public color: ColorClass = ColorClass.default()) {
    }
  }


  
  export class LayoutClass {
    constructor(public layout: string = 'layout1') {
    }
  }
  
  // export class ButtonClass {
  //   style: string = 'button1';
  //   customColor: string = '#000000'
  //   customBackground: string = '#ffffff'
  //   opacity: number = 1;
  // }
  
  export class SizeClass {
    width: string;
    height: string;
    constructor(width: string, height: string) {
      this.width = width;
      this.height = height;
    }
  }

  export class ColumnWrapperClass {
    // content: ColumnClass[];
    constructor(public content: ColumnClass[][], public columns: number = 1) {
      // console.log('columns',columns)
      // this.content = Array(5).fill(undefined).map(a => new ColumnClass([new TextClass('')], 100/columns));
      // for (let i = 0; i < content.length; ++i) {
      //   this.content[i] = content[i];
      //   this.content[i].flexBasis = content[i].flexBasis == 100 ? 100/columns : content[i].flexBasis;
      // }
      
    }
  }

  export class FooterComponentClass {
    constructor(public text: TextClass, public color: ColorClass, public background: BackgroundClass) {
    }
    static default() : FooterComponentClass {
      return new FooterComponentClass(new TextClass(''), ColorClass.default(), BackgroundClass.default())
    }
    static webnode() : FooterComponentClass {
      return new FooterComponentClass(new TextClass('© 2021 Worlds Collide. Všechna práva vyhrazena.'), ColorClass.default(), BackgroundClass.default())
    }
  }

  export class EditMenuButton {
    constructor(public header: string, public icon: string, public name: string) {
  
    }
  }
  
  export class EditMenuModule {
    constructor(public component: Type<any>, public data: any) {
  
    }
  }
  
  export interface EditMenuData {
    data: any;
  }

  
export class EditDialog {
  data: any;
  list: EditMenuModule[];
  constructor(data: any, list: EditMenuModule[]) {
    this.data = data;
    this.list = list;
  }

  static navDialog(data: any) : EditDialog {
    return new EditDialog(data, EDIT_NAV_COMPONENT);
  }

  static sectionDialog(data: any) : EditDialog {
    return new EditDialog(data, EDIT_SECTION_COMPONENT);
  }

  static footerDialog(data: any) : EditDialog {
    return new EditDialog(data, EDIT_FOOTER_COMPONENT);
  }

  static cardDialog(data: any) : EditDialog {
    return new EditDialog(data, EDIT_CARD_COMPONENT);
  }

  static gridDialog(data: any) : EditDialog {
    return new EditDialog(data, EDIT_GRID_COMPONENT);
  }

  static dividerDialog(data: any) : EditDialog {
    return new EditDialog(data, EDIT_DIVIDER_COMPONENT);
  }

  static calendarDialog(data: any) : EditDialog {
    return new EditDialog(data, EDIT_CALENDAR_COMPONENT);
  }
}

// export const EDIT_NAV_COMPONENT = [
//   new EditMenuModule(LayoutModuleComponent, new EditMenuButton('Upravit hlavičku','','')),
//   new EditMenuModule(LayoutModuleComponent, new EditMenuButton('Rozvržení hlavičky','view_compact','Rozvržení')),
//   new EditMenuModule(ColorModuleComponent, new EditMenuButton('Barvy hlavičky','palette','Barvy')),
//   new EditMenuModule(SizeModuleComponent, new EditMenuButton('Rozměry hlavičky', 'expand','Rozměry')),
//   new EditMenuModule(LogoModuleComponent, new EditMenuButton('Logo a titulek','title','Logo a titulek')),
//   new EditMenuModule(BackgroundModuleComponent, new EditMenuButton('Pozadí hlavičky','image','Pozadí')),
//   new EditMenuModule(ButtonModuleComponent, new EditMenuButton('Styl tlačítek','more_horiz','Tlačítka')),
// ]

export const EDIT_NAV_COMPONENT = [
  new EditMenuModule(LayoutModuleComponent, new EditMenuButton('Edit header','','')),
  new EditMenuModule(LayoutModuleComponent, new EditMenuButton('Layout!!!','view_compact','Layout')), 
  new EditMenuModule(ColorModuleComponent, new EditMenuButton('Colors','palette','Colors')),
  new EditMenuModule(SizeModuleComponent, new EditMenuButton('Dimensions', 'expand','Dimensions')),
  new EditMenuModule(LogoModuleComponent, new EditMenuButton('Logo and title!!!','title','Logo and title')),
  new EditMenuModule(BackgroundModuleComponent, new EditMenuButton('Background','image','Background')),
]

export const EDIT_SECTION_COMPONENT = [
  new EditMenuModule(LayoutModuleComponent, new EditMenuButton('Edit section','','')),
  new EditMenuModule(ColumnsModuleComponent, new EditMenuButton('Columns','view_compact','Columns')),
  new EditMenuModule(ColorModuleComponent, new EditMenuButton('Colors','palette','Colors')),
  new EditMenuModule(SizeModuleComponent, new EditMenuButton('Dimensions', 'expand','Dimensions')),
  new EditMenuModule(BackgroundModuleComponent, new EditMenuButton('Background','image','Background'))
]

export const EDIT_FOOTER_COMPONENT = [
  new EditMenuModule(LayoutModuleComponent, new EditMenuButton('Edit footer','','')),
  // new EditMenuModule(LayoutModuleComponent, new EditMenuButton('Rozvržení hlavičky!!!','view_compact','Rozvržení')), 
  new EditMenuModule(ColorModuleComponent, new EditMenuButton('Colors','palette','Colors')),
  // new EditMenuModule(SizeModuleComponent, new EditMenuButton('Rozměry zápatí', 'expand','Rozměry')),
  // new EditMenuModule(LogoModuleComponent, new EditMenuButton('Logo a titulek!!!','title','Logo a titulek')),
  new EditMenuModule(BackgroundModuleComponent, new EditMenuButton('Background','image','Background')),
]

export const EDIT_GRID_COMPONENT = [
  new EditMenuModule(LayoutModuleComponent, new EditMenuButton('Edit grid','','')),
  new EditMenuModule(ColumnsModuleComponent, new EditMenuButton('Columns','view_compact','Columns')),
  // new EditMenuModule(ColorModuleComponent, new EditMenuButton('Barvy sekce','palette','Barvy')),
  // new EditMenuModule(SizeModuleComponent, new EditMenuButton('Rozměry sekce', 'expand','Rozměry')),
  // new EditMenuModule(BackgroundModuleComponent, new EditMenuButton('Pozadí sekce','image','Pozadí'))
]

export const EDIT_CARD_COMPONENT = [
  new EditMenuModule(LayoutModuleComponent, new EditMenuButton('Edit card','','')),
  new EditMenuModule(ColorModuleComponent, new EditMenuButton('Colors','palette','Colors')),
  new EditMenuModule(BackgroundModuleComponent, new EditMenuButton('Background','image','Background'))
]

export const EDIT_DIVIDER_COMPONENT = [
  new EditMenuModule(LayoutModuleComponent, new EditMenuButton('Edit divider','','')),
  new EditMenuModule(DividerStyleModuleComponent, new EditMenuButton('Line style','horizontal_split','Line style')),
  new EditMenuModule(DividerColorModuleComponent, new EditMenuButton('Colors','palette','Colors')),
  new EditMenuModule(DividerSizeModuleComponent, new EditMenuButton('Dimensions','expand','Dimensions'))
]

//todo del
export const EDIT_CALENDAR_COMPONENT = [
  new EditMenuModule(LayoutModuleComponent, new EditMenuButton('Upravit kalendář','','')),
  new EditMenuModule(CalendarStyleModuleComponent, new EditMenuButton('Styl kalendáře','event','Styly')),
  new EditMenuModule(CalendarColorModuleComponent, new EditMenuButton('Barvy kalendáře','palette','Barvy')),
  // new EditMenuModule(DividerSizeModuleComponent, new EditMenuButton('Rozměry čáry','expand','Rozměry'))
]
