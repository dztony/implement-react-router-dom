import React, { ReactNode, useCallback } from 'react';
import { useNavigate } from "../myReactRouter";

function Link(props: IProps) {
  const { to, onClick, children } = props;
  const navigate = useNavigate();

  const handleOnClick = useCallback(() => {
    if (onClick) {
      return onClick;
    } else {
      return (event: any) => {
        event.preventDefault();
        navigate(to);
      }
    }
  }, [onClick])

  return (
    <a onClick={handleOnClick} href={to}>
      {children}
    </a>
  );
}

type IProps = {
  to: string;
  onClick?: () => void;
  children: ReactNode;
};

export default Link;
