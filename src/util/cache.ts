import { IContact } from "./loader.ts";

class Cache {
  private readonly cacheKey = 'contact-cache-key';

  constructor() {
    this.__init();
  }

  private __init() {
    const initDataList = [
      {
        id: '1',
        first: "Your",
        last: "Name",
        avatar: "https://placekitten.com/g/200/200",
        twitter: "your_handle",
        notes: "Some notes",
        favorite: true,
      },
      {
        id: '2',
        first: "Xiao",
        last: "Ming",
        avatar: "https://react.dev/favicon.ico",
        twitter: "your_handle",
        notes: "Some notes",
        favorite: true,
      },
    ];
    localStorage.setItem(this.cacheKey, JSON.stringify(initDataList));
  }

  get(): IContact[] {
    try {
      return JSON.parse(localStorage.getItem(this.cacheKey) as string)
    } catch (e) {
      return [];
    }
  }

  save(dataList: IContact[]): void {
    try {
      localStorage.setItem(this.cacheKey, JSON.stringify(dataList));
    } catch (e) {

    }
  }
}

const CacheInstance = new Cache();

export default CacheInstance;
