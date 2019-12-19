import React from 'react';
import { notifications as notificationData } from '../../../../../__mocks__/db';
import { Dropdown, List, Typography, Icon, Badge } from 'antd';
import './style.less';

const notifications = (
  <List
    bordered
    dataSource={notificationData}
    renderItem={item => (
      <List.Item>
        <Typography.Text>{item.text}</Typography.Text>
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
          <Icon type="bell" className="Notification_Icon" />
        </Badge>
      </a>
    </Dropdown>
  </div>
);

export default Notification;
