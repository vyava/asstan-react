import React from "react";

const Wrapper = (WrappedComponent : React.ComponentType) => {
    const ComponentWrapper = (state : any) => {
        const StateWrapper = (props : any) => {
            return (<WrappedComponent {...props} />)
        };
        return StateWrapper;
    }
    return ComponentWrapper;
}

export default Wrapper;