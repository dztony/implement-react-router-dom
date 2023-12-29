import React, { useLayoutEffect, useRef, useState } from 'react';
import css from './index.module.scss';
import { BrowserRouter, Link, Route, Routes, Outlet } from "../../../packages";
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

        <Link to={'/666'}>
          导航到 页面 /666
        </Link>

        <Link to={'/home/user/profile'}>
          导航到 页面 /home/user/profile
        </Link>

        <Link to={'/home/blog'}>
          导航到 页面 /home/blog
        </Link>

        <Link to={'/plan/list'}>
          导航到 页面 /plan/list
        </Link>
      </div>

      <Routes>
        <Route path={'/home'} element={<div>home pag<Outlet /></div>}>
          <Route path={'/user'} element={<div>user page<Outlet /></div>}>
            <Route path={'/profile'} element={<div>profile page</div>} />
          </Route>
          <Route path={'/blog'} element={<div>blog page</div>} />
        </Route>
        <Route path={'/666'} element={<div>666 page</div>} />

        <Route path={'/plan'} element={<div>plan page<Outlet /></div>}>
          <Route path={'/list'} element={<div>plan list page</div>} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
