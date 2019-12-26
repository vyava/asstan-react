import React, {useState} from "react";
import { Modal } from "antd";

const ModalBox = (props : any) => {
    return (
        <Modal
            visible={props.isVisible}
            title="Title"
            onCancel={() => props.setModalVisible(false)}
            okText="Kaydet"
            cancelText="Kapat"
        >
            {props.children}
        </Modal>
    )
};

export default ModalBox;