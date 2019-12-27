import React from 'react';
import './styles';
import { Dropdown, Menu, Button, Icon } from 'antd';
import Notification from '@/components/Header/Notification';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const loginMenu = (
    <Menu>
      <Menu.Item>
        <Button className="auth-buttons" type="dashed">
          <FontAwesomeIcon icon={faCog} className="fa-custom-icon" size="1x" />
          <span>Hesap Ayarları</span>
        </Button>
      </Menu.Item>
      <Menu.Item>
        <Button className="auth-buttons" type="dashed">
          <FontAwesomeIcon icon={faEnvelope} className="fa-custom-icon" size="1x" />
          Mail Ayarları
        </Button>
      </Menu.Item>
      <Menu.Item>
        <Button className="auth-buttons" type="dashed">
          <FontAwesomeIcon icon={faUser} className="fa-custom-icon" size="1x" />
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
