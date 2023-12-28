import React, { useLayoutEffect, useRef, useState } from 'react';
import css from './index.module.scss';
import { createBrowserHistory } from "../../../packages/History";

function App() {

  const historyRef = useRef(createBrowserHistory());
  const [location, setLocation] = useState(historyRef.current.location);

  useLayoutEffect(() => {
    return historyRef.current.listen(setLocation);
  }, []);

  return (
    <div className={css.app}>
      example app
      <div className={"title"}>
        title
      </div>
      <div>
        location info - {location.pathname}
      </div>
      <div onClick={() => historyRef.current.push('/home')}>
        导航到 页面 /home
      </div>

      <div onClick={() => historyRef.current.push('/666')}>
        导航到 页面 /666
      </div>
    </div>
  );
}

export default App;
