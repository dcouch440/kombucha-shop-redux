import React, {useState} from "react";
const Context = React.createContext();

const ContextProvider = (props) => {
    const [scrollBehavior, setScrollBehavior] = useState(false);

    return (
        <Context.Provider value={{
            scrollBehavior,
            setScrollBehavior
        }}>
           {props.children}
        </Context.Provider>
    );
}

export {ContextProvider, Context};
