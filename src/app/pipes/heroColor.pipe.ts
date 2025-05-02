import { Pipe, type PipeTransform } from '@angular/core';
import { Color, ColorMap } from '../interfaces/IHero';

@Pipe({
  name: 'HeroColor',
})
export class HeroColorPipe implements PipeTransform {

  transform(value: Color): string {
    const color = Color[value];
    return `${ color }`;
  }

}
