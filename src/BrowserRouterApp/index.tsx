import React from 'react';
import { Link, Outlet, Route, Routes, Navigate, BrowserRouter } from "../myReactRouterDom";
import style from './index.module.scss';

function BrowserRouterApp() {
  return (
    <BrowserRouter>
      <div className={style.header}>
        <div>
          <h1>Browser Router APP</h1>
        </div>
        <Link to={'/home'}>
          首页
        </Link>
        <Link to={'/home/1'}>
          首页 - 1
        </Link>
        <Link to={'/home/1/2'}>
          首页 - 1 - 2
        </Link>
        <Link to={'/home/1/2/3'}>
          首页 - 1 - 2 - 3
        </Link>
        <Link to={'/about'}>
          关于
        </Link>
        <Link to={'/list'}>
          列表
        </Link>
        <Link to={'/navigate'}>
          重定向
        </Link>
      </div>

      <Routes>
        <Route path="/home" element={<Home />}>
          <Route path="/1" element={<Home1 />}>
            <Route path="/2" element={<Home2 />}>
              <Route path='/3' element={<Home3 />} />
            </Route>
          </Route>
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/list" element={<List />} />
        <Route path="/notFound" element={<NotFound />} />
        <Route path="/navigate" element={<Navigate to="/notFound" />} />
      </Routes>
    </BrowserRouter>
  );
}

const Home = () => (
  <div>
    首页
    <Outlet />
  </div>
);
const Home1 = () => (
  <div>
    首页1
    <Outlet />
  </div>
);
const Home2 = () => (
  <div>
    首页2
    <Outlet />
  </div>
);
const Home3 = () => (
  <div>
    首页3
    <Outlet />
  </div>
);
const About = () => <div>关于</div>;
const List = () => <div>列表</div>;
const NotFound = () => <div>404</div>;

export default BrowserRouterApp;
