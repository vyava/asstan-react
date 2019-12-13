import React from "react";
import "./styles.less";
import { bayiList } from "../../../../__mocks__/db";

const Item = () => {
    let items = bayiList.map((bayi) => (<a href="javascript:;" className="Item" key={bayi._id}>{bayi.unvan}</a>))
    return (
        <div className="Item_Container">
            {items}
        </div>
    )
}

export default Item;