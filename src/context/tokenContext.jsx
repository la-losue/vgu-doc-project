import { createContext, useState } from "react";

const defaultState = {
    token: "",
    setToken: () => {}
};

export const tokenContext = createContext(defaultState);

export const TokenContextProvider = ({ children}) => {
    const [data, setdata] = useState(defaultState.token);

    return <tokenContext.Provider value={{ token: data, setToken: setdata}}> {children} </tokenContext.Provider>
}