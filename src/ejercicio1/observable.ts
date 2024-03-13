import { Observer } from './observer.js';
import { Event } from './event.js';

/**
 * Interfaz que representa un observable
 */
export interface Observable<T> {
  subscribe(observer: Observer<T>): void;
  unsubscribe(observer: Observer<T>): void;
  notify(event: Event<T>): void;
}

/**
 * Clase que representa un observable básico
 */
export class BasicObservable<T> implements Observable<T> {
  private observers: Observer<T>[] = [];

  /**
   * Método para suscribir un observador
   * @param observer Observador a suscribir
   */
  subscribe(observer: Observer<T>): void {
    this.observers.push(observer);
  }

  /**
   * Método para desuscribir un observador
   * @param observer Observador a desuscribir
   */
  unsubscribe(observer: Observer<T>): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  /**
   * Método para notificar a los observadores
   * @param event Evento a notificar
   */
  notify(event: Event<T>): void {
    this.observers.forEach(observer => observer.update(event));
  }

  /**
   * Método para disparar un evento
   * @param event Evento a disparar
   */
  fireEvent(event: Event<T>): void {
    this.notify(event);
  }
}