import { IListener, ILocation, IParams } from "./types.ts";

function EventEmitter() {
  let events: IListener[] = [];

  function subscribe(consumer: IListener) {
    events.push(consumer);
    return () => {
      events = events.filter(item => item !== consumer);
    };
  }

  function emit(params: IParams) {
    events.forEach(item => item(params));
  }

  return {
    subscribe,
    emit,
  };
}

export default EventEmitter;
