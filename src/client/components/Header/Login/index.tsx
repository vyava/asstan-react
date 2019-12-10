import React, { useState } from "react";
import './styles.less';
import { Dropdown, Menu, Button, Icon, List, Typography } from "antd";

const Login = () => {

    const data = [
        {
            type: "warning",
            content: "içerik alanı bu bir bildirimdir"
        },
        {
            type: "warning",
            content: "içerik alanı bu bir bildirimdir"
        },
        {
            type: "warning",
            content: "içerik alanı bu bir bildirimdir"
        },
    ]

    let [loading, setLoading] = useState(false);

    let clickHandler = () => {
        setLoading(loading)
    }

    const notifications = (
        <List bordered dataSource={data} renderItem={(item) => (
            <List.Item><Typography.Text>{item.content}</Typography.Text></List.Item>
            )}
            header={<div>Header</div>}
            footer={<div>Footer</div>}
            size="small"
            className="not">
        </List>
    )

    const loginMenu = (
        <Menu>
            <Menu.Item>
                <Button className="auth-buttons" type="dashed" icon="setting" loading={loading} onClick={() => clickHandler()}>Hesap Ayarları</Button>
            </Menu.Item>
            <Menu.Item>
                <Button className="auth-buttons" type="dashed" icon="mail" loading={loading} onClick={() => clickHandler()}>Mail Ayarları</Button>
            </Menu.Item>
            <Menu.Item>
                <Button className="auth-buttons" type="dashed" icon="setting" loading={loading} onClick={() => clickHandler()}>Hesap Ayarları</Button>
            </Menu.Item>
        </Menu>
    )

    return (
        <>
            <Dropdown overlay={notifications}>
                <Icon type="notification"></Icon>
            </Dropdown>
            <Dropdown.Button overlay={loginMenu} icon={<Icon type="user"></Icon>}>
                <b>Zafer Genç</b>
            </Dropdown.Button>
        </>
    )
}

export default Login