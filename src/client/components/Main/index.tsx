import React from "react";
import "./styles.less";

import List from "../List";
import ListController from "../ListController";

const Main = () => {
    return (
        <>
            <div className="corner"></div>
            <main className="Main_Content">
                <List>
                    <ListController />
                </List>
                <div className="Main_Content_Controller">
                    asd
                </div>
            </main>
        </>
    )
}

export default Main;