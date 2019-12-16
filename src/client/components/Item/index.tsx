import React from "react";
import classNames from "classnames";
import "./styles.less";
import { Icon } from "antd";
import { bayiList } from "../../../../__mocks__/db";

const Item = () => {

    let items = bayiList.map((bayi, i) => (
        <a href="javascript:;"
            className={classNames({
                "Item" : true,
                "faal" : (bayi.durum == 'FAAL'),
                "terk" : (bayi.durum == 'TERK'),
                "onay" : (bayi.durum).includes("ONAY"),
            })}
            key={bayi._id}>
            <span className="item-detail-container">
                <b>{bayi.unvan}</b>
                <span className="location_short">{bayi.ilce}</span>
            </span>
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