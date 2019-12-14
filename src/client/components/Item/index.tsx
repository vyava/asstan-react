import React from "react";
import "./styles.less";
import { Icon } from "antd";
import { bayiList } from "../../../../__mocks__/db";

const Item = () => {

    let items = bayiList.map((bayi) => (
        <a href="javascript:;" className="Item" key={bayi._id}>
            <b>{bayi.unvan}</b>
            <Icon type="more" className="moreIcon" />
        </a>
    ));

    return (
        <div className="Item_Container">
            {items}
        </div>
    )
}

export default Item;