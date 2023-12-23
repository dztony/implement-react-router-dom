import React, { ReactElement } from 'react';
import { createRoutesFromChildren, useRoutes } from "./util.tsx";

function Routes(props: any) {
  return useRoutes(createRoutesFromChildren(props.children));
}

export default Routes;
