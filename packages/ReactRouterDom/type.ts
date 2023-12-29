import { IHistoryPush, ILocation } from "../History";

export type IBrowserContext = {
  location: ILocation;
  navigate: IHistoryPush;
};

export type IRouteParentContext = {};
