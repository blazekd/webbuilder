import { LOREM } from './constants';


abstract class AbstractBackgroundClass {
  left: string = '50%';
  top: string = '50%';
  
  constructor(public src: string = '') {

  }
}

//mixins
abstract class AbstractSizeClass {
  height: string = '50%';
  width: string = '50%';
}

export class SectionComponentClass extends AbstractBackgroundClass {

  constructor(public color: ColorClass, public width: string, public height: string, public columns: ColumnWrapperClass, src?: string) {
    super(src);
  }


  static empty() : SectionComponentClass {
    return new SectionComponentClass(
      ColorClass.default(), 
      'width1', 'height5', 
      new ColumnWrapperClass([]))
  }
  static text() : SectionComponentClass {
    return new SectionComponentClass(ColorClass.default(), 
      'width1', 'height5', 
      new ColumnWrapperClass(
      [[
          new ColumnClass([new TextClass(LOREM[0])])
        ]], 
      ))
  }


  static grid() : SectionComponentClass {
    return new SectionComponentClass(ColorClass.default(), 
      'width1', 'height5', 
      new ColumnWrapperClass(
      [[
          new ColumnClass([GridComponentClass.test2()],100,false)
        ]], 
      ))
  }


  static text2() : SectionComponentClass {
    return new SectionComponentClass(
      ColorClass.default(), 
      'width1', 'height5',
      new ColumnWrapperClass(      
        [[
        new ColumnClass([new TextClass(LOREM[0])]), 
        new ColumnClass([new TextClass(LOREM[1])])
        ]],2))
  }
  static webnode0() : SectionComponentClass { // webnode!!!
    return new SectionComponentClass(
      ColorClass.default(), 
      'width3', 'height3', 
      new ColumnWrapperClass(      [[
        new ColumnClass(
          [
            new TextClass('<p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><h1><br></h1><h1 style="color: rgb(255, 255, 255); text-align: center; font-size: 300%; letter-spacing: 0.7em;">OPEN YOUR MIND</h1><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><h2 style="color: rgb(255, 255, 255); text-align: center; font-family: Tahoma; font-size: 150%; letter-spacing: 0.2em;">NOVÉ ALBUM VYCHÁZÍ JIŽ <strong>18. ČERVNA 2021!</strong></h2>'),
          ])
      ]]),
      'https://d1di2lzuh97fh2.cloudfront.net/files/1f/1f1/1f14ip.jpg?ph=803803e858')
  }
  static webnode1() : SectionComponentClass {
    return new SectionComponentClass(
      ColorClass.default(), 
      'width5', 'height5',
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
              new ImageClass('https://d1di2lzuh97fh2.cloudfront.net/files/0h/0hj/200/0hjhl8.png?ph=dee24c1a70', '30px'),
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
        ,2), 'https://d1di2lzuh97fh2.cloudfront.net/files/0c/0cx/0cx52n.jpg?ph=dee24c1a70&t=1')
  }
  static webnode2() : SectionComponentClass {
    return new SectionComponentClass(
      ColorClass.default(), 
      'width5', 'height3',
      new ColumnWrapperClass(      
        [[
        new ColumnClass([new TextClass('')],20),
        new ColumnClass([
          new TextClass('<h2 style="color: rgb(255, 255, 255); font-size: 300%; text-align: right;"><strong>OMRKNI, KDE HRAJEME A PŘIJĎ SI NÁS POSLECHNOUT</strong></h2><p style="color: rgb(255, 255, 255); text-align: right;">Váš text začíná právě zde. Klikněte a můžete začít psát. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi.</p>'),
        ],80)
        ]],2), 'https://d1di2lzuh97fh2.cloudfront.net/files/2s/2sh/2shjwo.jpg?ph=dee24c1a70&t=1')
  }

  static webnode3() : SectionComponentClass {
    return new SectionComponentClass(
      ColorClass.default(), 
      'width5', 'height2',
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
                new ImageClass('https://d1di2lzuh97fh2.cloudfront.net/files/0k/0ku/200/0kuz6l.png?ph=dee24c1a70', '30px'),
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
          ,2), 'https://d1di2lzuh97fh2.cloudfront.net/files/23/23k/23kxvc.jpg?ph=dee24c1a70&t=1')
  }

  static webnode4() : SectionComponentClass {
    return new SectionComponentClass(
      ColorClass.default(), 
      'width5', 'height3',
      new ColumnWrapperClass(      
        [[
        new ColumnClass([
          new TextClass('<h2 style="color: rgb(255, 255, 255); font-size: 300%;"><strong>POSLECHNI SI UKÁZKY Z NOVÉHO ALBA</strong></h2><p style="color: rgb(255, 255, 255);">Váš text začíná právě zde. Klikněte a můžete začít psát. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi.</p>'),
        ],80),
        new ColumnClass([new TextClass('')],20)
        ]],2), 'https://d1di2lzuh97fh2.cloudfront.net/files/2s/2sh/2shjwo.jpg?ph=dee24c1a70&t=1')
  }

  static webnodeFooter() : SectionComponentClass {
    return new SectionComponentClass(
      ColorClass.default(), 
      'width1', 'height5',
      new ColumnWrapperClass(      [[
        new ColumnClass(
          [
            new TextClass('<p style="text-align: center;">© 2021 Worlds Collide</p>'),
          ])
      ]]))
  }

  
  static webnodeNav() : SectionComponentClass {
    return new SectionComponentClass(
      ColorClass.default(), 
      'width3', 'height5',
      new ColumnWrapperClass(      [[
        new ColumnClass(
          [
            new TextClass('<h1 style="font-family: Courier; font-size: 330%;"><strong>WORLDS </strong>COLLIDE</h1>'),
          ])
      ]]))
  }

  static text3() : SectionComponentClass {
    return new SectionComponentClass(ColorClass.default(), 
      'width1', 'height5', 
      new ColumnWrapperClass(
        [[
          new ColumnClass([new TextClass(LOREM[0]), new TextClass(LOREM[1]), new TextClass(LOREM[2]), new TextClass(LOREM[3]), new TextClass(LOREM[0]), new TextClass(LOREM[1]), new TextClass(LOREM[2]), new TextClass(LOREM[3]), new TextClass(LOREM[0]), new TextClass(LOREM[1]), new TextClass(LOREM[2]), new TextClass(LOREM[3])])
        ]],3 
      ))
  }



  static columns() : SectionComponentClass {
    return new SectionComponentClass(
      ColorClass.default(), 
      'width1', 'height5', 
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
      'width2', 'height3', 
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
      'width1', 'height5', 
      new ColumnWrapperClass(      
      [[
        new ColumnClass(
          [
            new ImageClass('https://i.iinfo.cz/images/108/36-c9f123043398a2effeebf57ff7f796.png', '300px')
          ])
      ]]))
  }
}


export class ColumnClass {

  constructor(public content: any[], public flexBasis: number = 100, public resizable: boolean = true) {
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
  constructor(public src: string, public height: string, public style = 1) {

  }

  static default() : ImageClass {
    return new ImageClass('https://i.iinfo.cz/images/108/36-c9f123043398a2effeebf57ff7f796.png', '80px');
  }

  static circle() : ImageClass {
    return new ImageClass('https://i.iinfo.cz/images/108/36-c9f123043398a2effeebf57ff7f796.png', '80px', 2);
  }
  
}

export class DividerColorClass {
  constructor(public color: string = "#666666", public opacity: number = 0.1) {

  }
}

export class DividerSizeClass {
  constructor(public width: number = 80, public height: number = 1, public radius: number = 0, public radiusType: string = 'px') {

  }


}


export class DividerClass {
  type = 'divider';
  constructor(public color: DividerColorClass, public size: DividerSizeClass) {

  }

  static default() : DividerClass {
    return new DividerClass(new DividerColorClass, new DividerSizeClass);
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
  

  export class GridComponentClass extends AbstractBackgroundClass {
    type = 'grid';

    constructor(public color: ColorClass, public width: string, public height: string, public cards: CardClass[], public template: CardClass, public columns: GridColumnClass, src?: string) {
      super(src)
    }

    static test() : GridComponentClass {
      return new GridComponentClass(ColorClass.default(), 
        'width1', 'height5', 
        [
          new CardClass(
            [
              new ImageClass('https://i.iinfo.cz/images/108/36-c9f123043398a2effeebf57ff7f796.png', '300px'), 
              new TextClass(LOREM[0])
            ]),
          new CardClass(
            [
              new ImageClass('https://i.iinfo.cz/images/108/36-c9f123043398a2effeebf57ff7f796.png', '300px'), 
              new TextClass(LOREM[1])
            ]),
          new CardClass(
            [
              new ImageClass('https://i.iinfo.cz/images/108/36-c9f123043398a2effeebf57ff7f796.png', '300px'), 
              new TextClass(LOREM[2])
            ])
        ],
        new CardClass(
          [
            new ImageClass('https://i.iinfo.cz/images/108/36-c9f123043398a2effeebf57ff7f796.png', '300px'), 
            new TextClass(LOREM[2])
          ]), 
        new GridColumnClass())
    }

    static test2() : GridComponentClass {
      return new GridComponentClass(ColorClass.default(), 
        'width4', 'height5', 
        [
          new CardClass(
            [
              {...new ImageClass('https://img.obrazky.cz/?url=b912f7f41b62f52e&size=2', '150px'),
              top: '30%'
            }, 
              new TextClass('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris elementum mauris vitae tortor. Maecenas libero. Nulla quis diam. Donec iaculis gravida nulla.')
            ]),
          new CardClass(
            [
              {...new ImageClass('https://cdn.myshoptet.com/usr/www.sladke-potreby.cz/user/shop/big/44209-1_depositphotos-185673142-m-2015.jpg?611fd2c0', '150px'),
              top: '10%'
            }, 
              new TextClass('Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat.')
            ]),
          new CardClass(
            [
              {...new ImageClass('https://blog.eshop-rychle.cz/wp-content/uploads/2019/03/light-bulb-1318337_960_720-1.png', '150px'), 
              top: '30%'
            },
              new TextClass('Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Aliquam id dolor.')
            ]),
          new CardClass(
            [
              {...new ImageClass('https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg', '150px'), 
              top: '30%'
            },
              new TextClass('Curabitur vitae diam non enim vestibulum interdum. Phasellus et lorem id felis nonummy placerat. Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo.')
            ])
        ],
        new CardClass(
          [
            new ImageClass('https://bahmansport.com/media/com_store/images/empty.png', '150px'), 
            new TextClass('TEXT?')
          ]),
          new GridColumnClass(4))
    }
  }

  export class GridColumnClass {
    constructor(public columns: number = 2) {
    }
  }

  export class CardClass extends AbstractBackgroundClass {
    constructor(public content: any, public color: ColorClass = ColorClass.default(), src?: string) {
      super(src);
    }
  }




  export class ColumnWrapperClass {
    constructor(public content: ColumnClass[][], public columns: number = 1) {

    }
  }


