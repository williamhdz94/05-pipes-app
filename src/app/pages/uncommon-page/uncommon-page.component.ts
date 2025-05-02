import { Component, signal } from '@angular/core';
import { CardComponent } from "../../components/Card/Card.component";
import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, TitleCasePipe } from '@angular/common';
import { interval, tap } from 'rxjs';

const client1 = {
  name: 'William',
  gender: 'male',
  age: 30,
  address: 'San Vicente, El Salvador'
}

const client2 = {
  name: 'Melissa',
  gender: 'female',
  age: 35,
  address: 'San Vicente, El Salvador'
}

@Component({
  selector: 'app-uncommon-page',
  imports: [CardComponent, I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe, KeyValuePipe, TitleCasePipe, AsyncPipe],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {

  client = signal(client1);

  invitationMap = {
    male: 'tenerlo',
    female: 'tenerla'
  }

  changeClient() {
    if ( this.client() === client1 ) {
      this.client.set(client2);
      return;
    }
    this.client.set(client1);
  }

  // i18n plural
  clients = signal([
    'Maria',
    'Juan',
    'William',
    'Andrea',
    'Jazmín'
  ]);

  clientsMap = signal({
    '=0': 'no tenemos ningun cliente en espera',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    other: 'tenemos # clientes esperando'
  })

  deleteClient() {
    this.clients.update( prev => prev.slice(1) );
  }

  // KeyValue Pipe
  profile = {
    name: 'William',
    age: 36,
    address: 'Cuscatlan'
  }

  promiseValue: Promise<String> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data');
      console.log('Promesa finalizada')
    }, 3500);
  })

  myObservableTime = interval(2000).pipe(
    tap((value) => console.log('tap', value))
  )

}
