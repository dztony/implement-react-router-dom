import EventEmitter from "./EventEmitter.ts";
import { ILocation, IListener } from "./types.ts";

function createHashHistory() {
  let emitter = EventEmitter();
  const location: ILocation = {
    pathname: window.location.pathname || '/',
  };

  function handleHashChange() {
    const curLocation: ILocation = {
      pathname: window.location.hash.slice(1),
    };
    emitter.emit({
      location,
    });
  }

  function listen(listener: IListener) {
    emitter.subscribe(listener);
  }

  function push(curPath: string) {
    window.location.hash = curPath;
  }

  window.addEventListener('hashchange', handleHashChange);

  return {
    listen,
    push,
    location,
  };
}

export default createHashHistory;
