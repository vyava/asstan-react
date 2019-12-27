import * as React from 'react';
import './styles';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';

import Logo from '@/components/Header/Logo';
import Login from './Login';

const Header: React.FunctionComponent<RouteComponentProps> = () => {
  return (
    <header className="Top_Header">
      <Logo />
      <Login />
      {/* Header */}
    </header>
  );
};

export default withRouter(Header);
