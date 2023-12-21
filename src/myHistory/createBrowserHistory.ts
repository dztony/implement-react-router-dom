import EventEmitter from "./EventEmitter.ts";
import { ILocation, IHistory, IListener } from "./types.ts";

function createBrowserHistory() {
  const emitter = EventEmitter();

  let location: ILocation = {
    pathname: window.location.pathname || '/',
  };

  function handlePopStateChange() {
    const currentLocation: ILocation = {
      pathname: window.location.pathname,
    };
    emitter.emit({
      location: currentLocation,
    });
  }

  function push(curPath: string) {
    const history = window.history;
    // 往浏览器 history
    history.pushState(null, '', curPath);
    location = {
      pathname: curPath,
    };
    emitter.emit({
      location,
    });
  }

  function listen(listener: IListener) {
    emitter.subscribe(listener);
  }

  // 监听浏览器前进后退
  window.addEventListener('popstate', handlePopStateChange);

  const history: IHistory = {
    location,
    listen,
    push,
  };

  return history;
}

export default createBrowserHistory;
