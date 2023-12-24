import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { createBrowserHistory } from "../History";
import { Router } from "../ReactRouter";
import { IParams } from "../History/types.ts";

function BrowserRouter(props: IProps) {
  const { children } = props;


  const historyRef = useRef(createBrowserHistory());
  const history = historyRef.current;
  const [params, setParams] = useState<IParams>({
    location: history.location,
  });

  useEffect(() => {
    const unsubscribe = history.listen(setParams);
    return unsubscribe;
  }, [history])


  return (
    <Router
      navigator={history}
      location={params.location}
    >
      {children}
    </Router>
  );
}

type IProps = {
  children: ReactNode;
};

export default BrowserRouter;
