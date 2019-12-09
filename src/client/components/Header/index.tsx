import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';
import { Button, Menu } from "antd";
import './styles.less';


const Header: React.FunctionComponent<RouteComponentProps> = () => {
  return (
    <div>
      <Menu>
        <Menu.Item>asd</Menu.Item>
      </Menu>
    </div>
  );
};

export default withRouter(Header);
