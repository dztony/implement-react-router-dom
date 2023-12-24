import React, { ReactElement } from 'react';
import { useRoutes } from "./useRoutes.tsx";
import createRoutesFromChildren from "./createRoutesFromChildren.ts";

function Routes(props: any) {
  const curRoutes = createRoutesFromChildren(props.children);
  return useRoutes(curRoutes);
}

export default Routes;
