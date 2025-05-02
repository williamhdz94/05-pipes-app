import { LocaleService, availableLocale } from './../../services/locale.service';
import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, inject, LOCALE_ID, signal } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  imports: [
    LowerCasePipe,
    UpperCasePipe,
    TitleCasePipe,
    DatePipe
  ],
  templateUrl: './basic-page.component.html',
})
export default class BasicPageComponent {

  ls = inject(LocaleService);
  currentLocal = signal(inject(LOCALE_ID));

  nameLower = signal('william');
  nameUpper = signal('WILLIAM');
  fullName = signal('wIlLiAn HernAnDez');

  customDate = signal(new Date());

  tickingDateEffect = effect((onCleanup) => {

    const interval = setInterval(() => {
      this.customDate.set(new Date());
    }, 1000);

    onCleanup(() => {
      clearInterval(interval);
    });

  });

  changeLocale(locale: availableLocale) {
    this.ls.changeLocale(locale);
  }

}
