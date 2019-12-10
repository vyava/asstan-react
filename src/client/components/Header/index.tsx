import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';
import { Menu, Button } from 'antd';
import './styles.less';

import Logo from './Logo';
import Login from './Login';

const Header: React.FunctionComponent<RouteComponentProps> = () => {
  return (
    <header>
      <Logo />
      <Login />
      {/* Header */}
    </header>
  );
};

export default withRouter(Header);
