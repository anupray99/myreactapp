import MyContext from "./Context";
import { useState } from "react";

function MyProvider({ children }) {
    const [value, setValue] = useState('Hello World');
    return (
        <MyContext.Provider value={[value, setValue]}>
            {children}
        </MyContext.Provider>
    )
}

export default MyProvider;
