import { Pipe, type PipeTransform } from '@angular/core';
import { Creator } from '../interfaces/IHero';

@Pipe({
  name: 'heroCreator',
})
export class HeroCreatorPipe implements PipeTransform {

  transform(value: Creator): string {
    return Creator[value];
  }

}
