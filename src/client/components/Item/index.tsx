import React from "react";
import classNames from "classnames";
import "./styles.less";
import { Icon } from "antd";


const Item = (props: any) => {
    return (
        <a href="#"
            className={classNames({
                "Item": true,
                "faal": (props.bayi.durum == 'FAAL'),
                "terk": (props.bayi.durum == 'TERK'),
                "onay": (props.bayi.durum).includes("ONAY"),
            })}
            key={props.bayi._id}>
            <span className="item-detail-container">
                <b>{props.bayi.unvan}</b>
                <span className="location_short">{props.bayi.ilce}</span>
            </span>
            <Icon type="more" className="moreIcon" />
        </a>
    )
}

export default Item;