import React, { useLayoutEffect, useRef, useState } from 'react';
import css from './index.module.scss';
import { BrowserRouter, Link } from "../../../packages";
import DisplayPathname from "../DisplayPathname";

function App() {

  return (
    <BrowserRouter>
      <div className={css.app}>
        example app
        <div className={"title"}>
          title
        </div>
        <DisplayPathname />
        <Link to={'/home'}>
          导航到 页面 /home
        </Link>

        <Link to={'/666'}>
          导航到 页面 /666
        </Link>
      </div>
    </BrowserRouter>

  );
}

export default App;