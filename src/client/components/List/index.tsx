import React from "react";
import "./style.less";
const List : React.FunctionComponent = ({children}) => {
    return (
        <div className="List_Container">
            {children}
        </div>
    )
}

export default List;