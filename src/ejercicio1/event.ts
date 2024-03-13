/**
 * Interfaz que representa un evento
 */
export interface Event<T> {
  id: string;
  data: T;
}

/**
 * Interfaz que representa los datos de un evento
 */
export interface MyEventData {
  message: string;
}

/**
 * Clase que representa un evento con datos de tipo MyEventData
 */
export class MyEvent implements Event<MyEventData> {
  constructor(public id: string, public data: MyEventData) {}
}