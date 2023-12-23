import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { Router } from "../myReactRouter";
import { createHashHistory } from "../myHistory";

function HashRouter(props: IProps) {
  const { children } = props;

  const historyRef = useRef<any>(createHashHistory());
  // if (historyRef.current == null) {
  //   historyRef.current = createHashHistory();
  // }

  let history = historyRef.current;
  const [state, setState] = useState({
    location: history.location,
  });

  useEffect(() => {
    const unsubscribe = history.listen(setState);
    return unsubscribe;
  }, [history]);

  return (
    <Router navigator={history} location={state.location}>
      {children}
    </Router>
  );
}

type IProps = {
  children: ReactNode;
};

export default HashRouter;
