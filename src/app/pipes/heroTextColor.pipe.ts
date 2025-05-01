import { Pipe, type PipeTransform } from '@angular/core';
import { Color, ColorMap } from '../interfaces/IHero';

@Pipe({
  name: 'heroTextColor',
})
export class HeroTextColorPipe implements PipeTransform {

  transform(value: Color): unknown {
    return ColorMap[value];;
  }

}
