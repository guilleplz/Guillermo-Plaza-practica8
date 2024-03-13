import { Event, MyEventData } from './event.js';

/**
 * Interfaz que representa un observador
 */
export interface Observer<T> {
  update(event: Event<T>): void;
}

/**
 * Clase que representa un observador
 */
export class MyObserver implements Observer<MyEventData> {
  /**
   * Método para actualizar el observador
   * @param event Evento a recibir
   */
  update(event: Event<MyEventData>): void {
    console.log('Recibido evento con ID:', event.id);
    console.log('Mensaje:', event.data.message);
  }
}