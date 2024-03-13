import { BasicObservable } from './observable.js';
import { Observer, MyObserver } from './observer.js';
import { MyEvent, MyEventData } from './event.js';

const observable: BasicObservable<MyEventData> = new BasicObservable();
const observer: Observer<MyEventData> = new MyObserver();

// suscribir el observador
observable.subscribe(observer);

// Disparar un evento
const event = new MyEvent('ID del evento', { message: 'Hola mundo' });
observable.fireEvent(event);

// Desuscribir el observador
observable.unsubscribe(observer);