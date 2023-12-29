import React, { ReactElement, ReactNode } from 'react';
import createRoutesFromChildren from "./createRoutesFromChildren.ts";

function Routes(props: IProps) {
  const nestRouteList = createRoutesFromChildren(props.children);
  console.log('nestRouteList - ', nestRouteList);
  return null;
}

type IProps = {
  children: ReactNode;
};

export default Routes;
