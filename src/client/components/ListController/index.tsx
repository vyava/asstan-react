import React, {useState} from "react";
import { Input, Icon, Select } from "antd";
import "./styles.less";


let {Option} = Select;

let children : any = [];

["İstanbul","İzmir","Ankara"].map((e, i) => {
    children.push(<Option key={i}>{e}</Option>)
})

const ListController = () => {

    let [inputFocused, setInputFocused] : [boolean,any] = useState(false)

    let changeContainer = (event : any) => {
        setInputFocused(!inputFocused)
    }

    return (
        <div className={`List_Controller${inputFocused ? ' inputFocused' : ''}`}>
            <div className="Input_Container">
                <Input addonBefore={<Icon type="search" />} onFocus={changeContainer} onBlur={changeContainer}></Input>
            </div>
            <div className="Filter_Container">
                <div className="filter_location">
                    <Select
                        allowClear
                        mode="multiple"
                        placeholder="Konum"
                        notFoundContent="Bulunamadı"
                        maxTagCount={1}
                        showArrow={true}
                        style={{"width" : "100%"}}>
                        {children}
                    </Select>
                </div>
                <div className="filter_another1">
                    <Icon type="unordered-list" />
                </div>
                <div className="filter_another2">b</div>
            </div>
        </div>
    )
};

export default ListController