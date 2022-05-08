import { createContext, useContext, useState } from "react";

const initialQueryValue = {
    query: "",
}

export const queryContext = createContext(initialQueryValue);
export const useQueryContext= () => useContext(queryContext);

export const QueryProvider = ({ children }) => {
    const [query, setQuery] = useState(initialQueryValue.query);
    console.log(query)
    return (
        <queryContext.Provider value={{
            query,
            setQuery,
        }}>
            {children}
        </queryContext.Provider>
    )
}
