import React from "react";
import { notifications as notificationData } from "../../../../../__mocks__/db";
import { Dropdown, List, Typography, Icon, Badge } from "antd";
import "./style.less";

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
        <Dropdown overlay={notifications}>
            <a href="#">
                <Badge count={2}></Badge>
                <Icon  type="bell" className="Notification_Icon" />
            </a>
        </Dropdown>
    </div>
);

export default Notification;