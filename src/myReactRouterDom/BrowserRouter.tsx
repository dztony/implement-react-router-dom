import React, { ReactNode } from 'react';
import { createBrowserHistory } from "../myHistory";
import { Router } from "../myReactRouter";

function BrowserRouter(props: IProps) {
  const { children } = props;

  const history = createBrowserHistory();

  return (
    <Router navigator={history} location={history.location}>
      {children}
    </Router>
  );
}

type IProps = {
  children: ReactNode;
};

export default BrowserRouter;
