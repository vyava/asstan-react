import React from 'react';
import './styles.less';
import { Dropdown, Menu, Button, Icon } from 'antd';
import Notification from "../Notification";

const Login = () => {

  const loginMenu = (
    <Menu>
      <Menu.Item>
        <Button
          className="auth-buttons"
          type="dashed"
          icon="setting"
        >
          Hesap Ayarları
        </Button>
      </Menu.Item>
      <Menu.Item>
        <Button
          className="auth-buttons"
          type="dashed"
          icon="mail"
        >
          Mail Ayarları
        </Button>
      </Menu.Item>
      <Menu.Item>
        <Button
          className="auth-buttons"
          type="dashed"
          icon="setting"
        >
          Hesap Ayarları
        </Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="User_Container">
      <Notification />
      <Dropdown.Button overlay={loginMenu} icon={<Icon type="user" />}>
        <b>Zafer Genç</b>
      </Dropdown.Button>
    </div>
  );
};

export default Login;
