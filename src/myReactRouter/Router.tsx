import React, { ReactNode, useMemo } from 'react';
import { ILocation, IPush } from "../myHistory/types.ts";
import { LocationContext, NavigationContext } from "./context.ts";

function Router(props: IProps) {
  const { navigator, location, children } = props;
  const navigationContext = useMemo(() => {
    return {
      navigator,
    };
  }, [navigator]);

  const { pathname } = location;

  const locationContext = useMemo(() => {
    return {
      location: {
        pathname,
      },
    };
  }, [pathname]);

  return (
    <NavigationContext.Provider value={navigationContext}>
      <LocationContext.Provider value={locationContext}>
        {children}
      </LocationContext.Provider>
    </NavigationContext.Provider>
  );
}

type IProps = {
  navigator: {
    push: IPush;
  };
  location: ILocation;
  children: ReactNode;
};

export default Router;
