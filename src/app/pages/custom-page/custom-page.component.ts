import { Component, signal } from '@angular/core';
import { TogglePipe } from '../../pipes/toggle.pipe';
import { heroes } from '../../data/hero.data';
import { CanFlyPipe } from '../../pipes/canFly.pipe';
import { HeroColorPipe } from '../../pipes/heroColor.pipe';
import { HeroTextColorPipe } from '../../pipes/heroTextColor.pipe';
import { TitleCasePipe } from '@angular/common';
import { HeroCreatorPipe } from '../../pipes/heroCreator.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [TogglePipe, CanFlyPipe, HeroColorPipe, HeroTextColorPipe, TitleCasePipe, HeroCreatorPipe],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {

  name = signal('William Hernandez');
  upperCase = signal(true);
  heroes = signal(heroes);

  toggle() {
    this.upperCase.set(!this.upperCase());
  }

}
