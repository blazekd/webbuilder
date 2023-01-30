import { Component, Input } from '@angular/core';
import { TextClass } from '../../component-classes';
import { FONT_NAMES, FONT_NAMES_LOWER } from '../../constants';

@Component({
  selector: 'app-section-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent {
  @Input() content!: TextClass;

  modules = {
    imageDropAndPaste: {
      handler: () => {return false}
    },
  }

  FONT_NAMES = FONT_NAMES;
  FONT_NAMES_LOWER = FONT_NAMES_LOWER;
}



