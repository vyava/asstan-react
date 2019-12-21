import React from 'react';
import './style';
const Menu: React.FunctionComponent = ({ children }) => {
  return <nav className="Navbar_Container">{children}</nav>;
};

export default Menu;
