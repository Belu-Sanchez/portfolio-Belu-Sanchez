import { FC } from 'react';
import { NavBar } from '../Nav';
import Props from './types';


const Header: FC<Props> = ({ children }) => {

  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export { Header };