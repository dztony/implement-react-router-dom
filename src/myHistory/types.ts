export type ILocation = {
  pathname: string;
};

export type IPush = (path: string) => void;

export type IParams = {
  location: ILocation,
};

export type IListener = (p: IParams) => void;

export type IHistory = {
  location: ILocation;
  push: IPush;
  listen: (listener: IListener) => void;
};

