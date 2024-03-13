import { expect } from 'chai'
import { BasicObservable } from '../../src/ejercicio1/observable.js';
import { Observer } from '../../src/ejercicio1/observer.js';
import { Event } from '../../src/ejercicio1/event.js';

describe('Observable', () => {
  it('Debería notificar cuando un evento es lanzado', () => {
    const observable: BasicObservable<number> = new BasicObservable();
    let receivedEvent: Event<number> | null = null;

    class TestObserver implements Observer<number> {
      update(event: Event<number>): void {
        receivedEvent = event;
      }
    }

    const observer = new TestObserver();
    observable.subscribe(observer);

    const eventData = 42;
    const event = { id: 'test-id', data: eventData };
    observable.fireEvent(event);

    expect(receivedEvent).to.deep.equal(event);
  });

  it('Debería desuscribir un observer', () => {
    const observable: BasicObservable<number> = new BasicObservable();
    let updateCount = 0;

    class TestObserver implements Observer<number> {
      update(event: Event<number>): void {
        updateCount++;
      }
    }

    const observer = new TestObserver();
    observable.subscribe(observer);

    const eventData = 42;
    const event = { id: 'test-id', data: eventData };
    observable.fireEvent(event);

    observable.unsubscribe(observer);
    observable.fireEvent(event);

    expect(updateCount).to.equal(1); // Should only have been called once
  });
  
  it('Debería notificar a todos los observadores', () => {
    const observable: BasicObservable<number> = new BasicObservable();
    let updateCount = 0;

    class TestObserver implements Observer<number> {
      update(event: Event<number>): void {
        updateCount++;
      }
    }

    const observer1 = new TestObserver();
    const observer2 = new TestObserver();
    observable.subscribe(observer1);
    observable.subscribe(observer2);

    const eventData = 42;
    const event = { id: 'test-id', data: eventData };
    observable.fireEvent(event);

    expect(updateCount).to.equal(2); // Both observers should have been called
  });

  it('Debería suscribir un observer', () => {
    const observable: BasicObservable<number> = new BasicObservable();
    let updateCount = 0;

    class TestObserver implements Observer<number> {
      update(event: Event<number>): void {
        updateCount++;
      }
    }

    const observer = new TestObserver();
    observable.subscribe(observer);

    const eventData = 42;
    const event = { id: 'test-id', data: eventData };
    observable.fireEvent(event);

    expect(updateCount).to.equal(1); // Should have been called once
  });
});