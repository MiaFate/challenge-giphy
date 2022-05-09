import { createContext, useContext, useState } from "react";

const initialGlobalValue = {
    query: "",
    logged: false,
}

export const globalContext = createContext(initialGlobalValue);
export const useGlobalContext= () => useContext(globalContext);

export const GlobalProvider = ({ children }) => {
    const [query, setQuery] = useState(initialGlobalValue.query);
    const [logged, setLogged] = useState(initialGlobalValue.logged);
    console.log(query)
    return (
        <globalContext.Provider value={{
            query,
            setQuery,
            logged,
            setLogged
        }}>
            {children}
        </globalContext.Provider>
    )
}
