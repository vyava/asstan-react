import React from "react";
import "./style.less";
import { notifications as notificationData } from "../../../../../__mocks__/db";

// import { Dropdown, List, Typography, Icon } from "antd";

const notifications = (
    <div>not</div>
    // <List
    //     bordered
    //     dataSource={notificationData}
    //     renderItem={item => (
    //         <List.Item>
    //             <Typography.Text>{item.text}</Typography.Text>
    //         </List.Item>
    //     )}
    //     header={<div>Header</div>}
    //     footer={<div>Footer</div>}
    //     size="small"
    // />
);

const Notification = () => (
    <div className="Notification_Container">
        {/* <Dropdown overlay={notifications}>
            <Icon type="notification" className="Notification_Icon" />
        </Dropdown> */}
    </div>
);

export default Notification;