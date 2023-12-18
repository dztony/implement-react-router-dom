import React from 'react';
import { Link, useLoaderData } from "react-router-dom";
import { IContact } from "../../util/loader.ts";

function Contact() {
  const data = useLoaderData() as any;
  const contact = data.contact as IContact;

  return (
    <div>
      <Link to={'/'}>Back to Home</Link>
      联系人资料详情页面
      <h2>
        联系人 id - {contact.id}
      </h2>
      <div>
        用户名 - {contact.first} - {contact.last}
      </div>

      <button>
        <Link to={`/contact/${contact.id}/edit`}>编辑</Link>
      </button>
    </div>
  );
}

export default Contact;
