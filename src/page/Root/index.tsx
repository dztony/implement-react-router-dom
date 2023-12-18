import React from 'react';
import style from './index.module.scss';
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { IContact } from "../../util/loader.ts";

function Root() {
  const loaderData = useLoaderData() as Record<any, any>;
  const contactList = loaderData.contactList as IContact[];

  return (
    <div className={style.container}>
      <div className={style.sideBar}>
        <h3>
          联系人列表
        </h3>
        <div>
          {
            contactList.map((item, i) => {
              return (
                <div key={i}>
                  <Link to={`/contact/${item.id}`}>
                    {item.first + item.last}
                  </Link>
                </div>
              );
            })
          }
        </div>
      </div>
      <div className={style.detail}>
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
