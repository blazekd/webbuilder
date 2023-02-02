import { he } from 'date-fns/locale';
import { LOREM } from './constants';





interface ImageInterface {
  left: string;
  top: string;
  src: string;
}


interface SizeInterface {
  height: string;
  width: string;
}

interface ColorInterface {
  textColor: string;
  backgroundColor: string;
}



export class SectionComponentClass implements ImageInterface, SizeInterface, ColorInterface {

  constructor(public width: string, public height: string, public columns: ColumnWrapperClass, public src: string = '',
  public left: string = '50%', public top: string = '50%', public backgroundColor: string = '#ffffff', public textColor: string = '#000000') {

  }


  toHTML() {
    return `
      <div style="min-height: ${this.height}vh; background-image: ${this.src == '' ? '' : 'url(' + this.src + ')'}; background-position-x: ${this.left}; background-position-y: ${this.top}; background-color: ${this.backgroundColor}; color: ${this.textColor}; padding: 20px 40px; background-size: cover; display: flex;">
        <div style="max-width: ${this.width}px; margin: 0 auto; width: 100%;">
          ${this.columns.toHTML()}
        </div>
      </div>`
  }


  static empty() : SectionComponentClass {
    return new SectionComponentClass(
      'unset', '0', 
      new ColumnWrapperClass([]))
  }
  static text() : SectionComponentClass {
    return new SectionComponentClass(
      'unset', '0', 
      new ColumnWrapperClass(
      [[
          new ColumnClass([new TextClass(LOREM[0])])
        ]], 
      ))
  }


  static grid() : SectionComponentClass {
    return new SectionComponentClass(
      'unset', '0', 
      new ColumnWrapperClass(
      [[
          new ColumnClass([GridComponentClass.test2()],100,false)
        ]], 
      ))
  }


  static text2() : SectionComponentClass {
    return new SectionComponentClass(
      'unset', '0',
      new ColumnWrapperClass(      
        [[
        new ColumnClass([new TextClass(LOREM[0])]), 
        new ColumnClass([new TextClass(LOREM[1])])
        ]],2))
  }
  static webnode0() : SectionComponentClass { // webnode!!!
    return new SectionComponentClass(
      '1600', '50', 
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
      '1000', '0',
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
      '1000', '50',
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
      '1000', '75',
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
      '1000', '50',
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
      'unset', '0',
      new ColumnWrapperClass(      [[
        new ColumnClass(
          [
            new TextClass('<p style="text-align: center;">© 2021 Worlds Collide</p>'),
          ])
      ]]))
  }

  
  static webnodeNav() : SectionComponentClass {
    return new SectionComponentClass(
      '1600', '0',
      new ColumnWrapperClass(      [[
        new ColumnClass(
          [
            new TextClass('<h1 style="font-family: Courier; font-size: 330%;"><strong>WORLDS </strong>COLLIDE</h1>'),
          ])
      ]]))
  }

  static text3() : SectionComponentClass {
    return new SectionComponentClass(
      'unset', '0', 
      new ColumnWrapperClass(
        [[
          new ColumnClass([new TextClass(LOREM[0]), new TextClass(LOREM[1]), new TextClass(LOREM[2]), new TextClass(LOREM[3]), new TextClass(LOREM[0]), new TextClass(LOREM[1]), new TextClass(LOREM[2]), new TextClass(LOREM[3]), new TextClass(LOREM[0]), new TextClass(LOREM[1]), new TextClass(LOREM[2]), new TextClass(LOREM[3])])
        ]],3 
      ))
  }



  static columns() : SectionComponentClass {
    return new SectionComponentClass(
      'unset', '0', 
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
      '1750', '50', 
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
      'unset', '0', 
      new ColumnWrapperClass(      
      [[
        new ColumnClass(
          [
            new ImageClass('https://i.iinfo.cz/images/108/36-c9f123043398a2effeebf57ff7f796.png', '300px')
          ])
      ]]))
  }
}

interface HTMLable {
  toHTML(): string;
}

interface SectionContentInterface extends HTMLable {
  type: string;
}

export class ColumnClass {

  constructor(public content: SectionContentInterface[], public flexBasis: number = 100, public resizable: boolean = true) {
  }

  toHTML() {
    let result = ''
    this.content.forEach(e => {
      result += e.toHTML();
    })
    return `
    <div style="flex-basis: ${this.flexBasis}%">
      ${result}
    </div>`
  }
}


export class TextClass implements SectionContentInterface {
  type = 'text';
  constructor(public text: string) {
  }
  toHTML(): string {
    return `
    <div style="padding: 14px 17px">
      ${this.text == '' ? '<p><br></p>' : this.text}
    </div>`;
  }
}

export class ImageClass implements ImageInterface, SectionContentInterface {
  type = 'image';
  //todo remove style?
  constructor(public src: string, public height: string, public style = 1, public left = '50%', public top = '50%') {

  }
  toHTML(): string {
    return `
    <div style="margin: 11px">
      <div style="max-height: ${this.height}; height: 99999px">
        <img src=${this.src} alt="image" style="object-position: ${this.left} ${this.top}; width: 100%; object-fit:cover; height: 100%;">
      </div>
    </div>
    `;
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


export class DividerClass implements SectionContentInterface {
  type = 'divider';
  constructor(public color: DividerColorClass, public size: DividerSizeClass) {

  }
  toHTML(): string {
    return `<div style="padding-bottom: 1px"><hr style="border-top-color: ${this.color.color}; border-top-width: ${this.size.height}px; width: ${this.size.width}%; opacity: ${this.color.opacity}; border-radius: ${this.displayRadius()}"></div>`
  }

  displayRadius() {
    return (this.size.radiusType === '%' ? this.size.radius : this.size.radius / 5) + this.size.radiusType;
  }

  static default() : DividerClass {
    return new DividerClass(new DividerColorClass, new DividerSizeClass);
  }
}




  
  

  

  export class GridComponentClass implements SectionContentInterface {
    type = 'grid';
    constructor(public cards: CardClass[], public template: CardClass, public columns: number) {

    }
    toHTML(): string {
      let result = '<div style="padding: 40px;"><div style="display: flex; justify-content: center; flex-wrap: wrap;">'
      this.cards.forEach(card => {
        result += `
        <div style="background-color: ${card.backgroundColor}; color: ${card.textColor}; flex-basis: ${100/this.columns}%; background-position: ${card.left} ${card.top}; background-size: cover; background-image: url(${card.src}); padding: 15px 10px 0;">
          ${card.toHTML()}
        </div>`;
      })
      result += '</div></div>'
      return result;
    }



    static test() : GridComponentClass {
      return new GridComponentClass(
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
        2)
    }

    static test2() : GridComponentClass {
      return new GridComponentClass(
        [ 
          new CardClass(
            [
              new ImageClass('https://img.obrazky.cz/?url=b912f7f41b62f52e&size=2', '150px', 1, '50%', '30%'), 
              new TextClass('<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris elementum mauris vitae tortor. Maecenas libero. Nulla quis diam. Donec iaculis gravida nulla.</p>')
            ]),
          new CardClass(
            [
              new ImageClass('https://cdn.myshoptet.com/usr/www.sladke-potreby.cz/user/shop/big/44209-1_depositphotos-185673142-m-2015.jpg?611fd2c0', '150px', 1, '50%', '10%'),
              new TextClass('<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat.</p>')
            ]),
          new CardClass(
            [
              new ImageClass('https://blog.eshop-rychle.cz/wp-content/uploads/2019/03/light-bulb-1318337_960_720-1.png', '150px', 1, '50%', '30%'),
              new TextClass('<p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Aliquam id dolor.</p>')
            ]),
          new CardClass(
            [
              new ImageClass('https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg', '150px', 1, '50%', '30%'),
              new TextClass('<p>Curabitur vitae diam non enim vestibulum interdum. Phasellus et lorem id felis nonummy placerat. Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo.</p>')
            ])
        ],
        new CardClass(
          [
            new ImageClass('https://bahmansport.com/media/com_store/images/empty.png', '150px'), 
            new TextClass('<p>TEXT?</p>')
          ]),
          4)
    }
  }

  export class CardClass implements ImageInterface, ColorInterface, HTMLable {

    constructor(public content: SectionContentInterface[], public src: string = '', 
    public left: string = '50%', public top: string = '50%', public textColor: string = 'unset', public backgroundColor: string = 'unset') {

    }
    toHTML(): string {
      let content = '';
      this.content.forEach(e => {
        content += `
        <div style="padding: 0 10px 25px">
          ${e.toHTML()}
        </div>`
      });
      return content
    }



  }




  export class ColumnWrapperClass {
    //todo remove columns
    constructor(public content: ColumnClass[][], public columns: number = 1) {

    }

    toHTML() {
      let result = '';
      this.content.forEach(element => {
        result += '<div style="display: flex;">'
        element.forEach(e => {
          result += e.toHTML();
        })
        result += '</div>'
      })
        
      return result
    }
  }


  export class Cloneable {
    public static deepCopy<T>(source: T): T {
      return Array.isArray(source)
      ? source.map(item => this.deepCopy(item))
      : source instanceof Date
      ? new Date(source.getTime())
      : source && typeof source === 'object'
            ? Object.getOwnPropertyNames(source).reduce((o, prop) => {
               Object.defineProperty(o, prop, Object.getOwnPropertyDescriptor(source, prop)!);
               o[prop] = this.deepCopy((source as { [key: string]: any })[prop]);
               return o;
            }, Object.create(Object.getPrototypeOf(source)))
      : source as T;
    }
  }