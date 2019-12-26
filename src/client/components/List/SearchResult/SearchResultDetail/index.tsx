import React from "react";
import { Transfer, Tree } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle, faCaretSquareDown } from "@fortawesome/free-solid-svg-icons";

const { TreeNode } = Tree;

// Customize Table Transfer
const isChecked = (selectedKeys: any, eventKey: any) => {
    return selectedKeys.indexOf(eventKey) !== -1;
};

const generateTree = (treeNodes = [], checkedKeys = []) => {
    return treeNodes.map(({ children, ...props } : any) => (
        <TreeNode {...props} key={props.key}>
            {generateTree(children, checkedKeys)}
        </TreeNode>
    ));
};

const SearchResultDetail = ({ dataSource, targetKeys } : any) => {

    return (
        <Transfer
            targetKeys={targetKeys}
            dataSource={dataSource}
            // className="tree-transfer"
            render={item => item.title}
            showSelectAll={true}
        >
            {({ direction, onItemSelect, selectedKeys }) => {
                if (direction === 'left') {
                    const checkedKeys = [...selectedKeys, ...targetKeys];
                    return (
                        <Tree
                            blockNode
                            checkable
                            checkStrictly
                            // defaultExpandAll
                            checkedKeys={checkedKeys}
                            switcherIcon={<FontAwesomeIcon icon={faCaretSquareDown} />}
                            onCheck={(
                                _,
                                {
                                    node: {
                                        props: { eventKey },
                                    },
                                },
                            ) => {
                                onItemSelect(eventKey, !isChecked(checkedKeys, eventKey));
                            }}
                            onSelect={(
                                _,
                                {
                                    node: {
                                        props: { eventKey },
                                    },
                                },
                            ) => {
                                onItemSelect(eventKey, !isChecked(checkedKeys, eventKey));
                            }}
                        >
                            {generateTree(dataSource, targetKeys)}
                        </Tree>
                    );
                }
            }}
        </Transfer>
    )
};

export default SearchResultDetail;