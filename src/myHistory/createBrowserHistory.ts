import EventEmitter from "./EventEmitter.ts";
import { ILocation, IHistory, IListener, IParams } from "./types.ts";

function createBrowserHistory() {
  const emitter = EventEmitter();

  let location: ILocation = {
    pathname: window.location.pathname || '/',
  };

  function handlePopStateChange() {
    const params: IParams = {
      location: {
        pathname: window.location.pathname,
      },
    };
    emitter.emit(params);
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
