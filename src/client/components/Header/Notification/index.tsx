import React from 'react';
// import { notifications as notificationData } from '../../../../../__mocks__/db';
import { Dropdown, List, Typography, Badge } from 'antd';
import './style';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const notifications = (
  <List
    bordered
    // dataSource={notificationData}
    renderItem={item => (
      <List.Item>
        {/* <Typography.Text>{item.text}</Typography.Text> */}
      </List.Item>
    )}
    header={<div>Header</div>}
    footer={<div>Footer</div>}
    size="small"
  />
);

const Notification = () => (
  <div className="Notification_Container">
    <Dropdown trigger={['click']} overlay={notifications}>
      <a href="#" className="Notification_Trigger">
        <Badge dot={true}>
          <FontAwesomeIcon icon={faBell} className="astn-btn fa-custom-icon" size="lg" />
        </Badge>
      </a>
    </Dropdown>
  </div>
);

export default Notification;
