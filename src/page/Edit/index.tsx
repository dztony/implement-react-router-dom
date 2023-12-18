import React from 'react';
import { Link, useLoaderData } from "react-router-dom";
import { IContact } from "../../util/loader.ts";

function Edit() {
  const data = useLoaderData() as any;
  const contact = data.contact as IContact;

  return (
    <div>
      编辑页面
      <h3>
        编辑用户 id {contact.id} 的资料
      </h3>


      <button>
        <Link to={`/contact/${contact.id}`}>
          保存
        </Link>
      </button>
    </div>
  );
}

export default Edit;
