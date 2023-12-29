import { IHistoryPush, ILocation } from "../History";
import { ReactElement } from "react";

export type IBrowserContext = {
  location: ILocation;
  navigate: IHistoryPush;
};

export type IRouteParentContext = {};

export type IRoute = {
  path: string;
  element: ReactElement;
  children: IRoute[];
};

export type IBranch = {
  relativePath: string;
  metaList: IRoute[];
};
