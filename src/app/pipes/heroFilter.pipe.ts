import { Pipe, type PipeTransform } from '@angular/core';
import { IHero } from '../interfaces/IHero';

@Pipe({
  name: 'heroFilter',
})
export class HeroFilterPipe implements PipeTransform {

  transform(value: IHero[], search: string): IHero[] {
    if( !search ) return value;

    search = search.toLowerCase();

    return value.filter(
      hero => hero.name.toLowerCase().includes(search)
    );

  }

}
