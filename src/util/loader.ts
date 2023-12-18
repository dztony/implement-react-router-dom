import { timeout } from "./common.ts";
import CacheInstance from "./cache.ts";

export type IContact = {
  id?: string;
  first: string;
  last: string;
  avatar: string;
  twitter: string;
  notes: string;
  favorite: boolean,
};

function getContactList() {
  return CacheInstance.get();
}

export async function loaderContactList() {
  await timeout();
  const contactList = getContactList();
  return {
    contactList,
  };
}

export async function getContactById(props: any) {
  const id = props.params.contactId;
  await timeout();
  const contactList = getContactList();
  for (const item of contactList) {
    if (item.id === id) {
      return {
        contact: item,
      };
    }
  }

  throw new Error(`无法找到 id 为 ${id} 的 联系人信息`);
}
