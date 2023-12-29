import React, { ReactElement, ReactNode } from 'react';
import createRoutesFromChildren from "./createRoutesFromChildren.ts";
import createBranchesFromRoutes from "./createBranchesFromRoutes.ts";

function Routes(props: IProps) {
  const nestRouteList = createRoutesFromChildren(props.children);
  const branchList = createBranchesFromRoutes(nestRouteList);
  console.log('branchList - ', branchList);
  return null;
}

type IProps = {
  children: ReactNode;
};

export default Routes;
