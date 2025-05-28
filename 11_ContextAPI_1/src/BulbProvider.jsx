import { createContext, useState } from "react";

export const bulbContext = createContext();      // creating context

function BulbProvider({ children }) {           // This is more efficient and cleaner way (creating a separate file for it).
    const [bulbOn, setbulbOn] = useState(true);

    return (
        <>
            <bulbContext.Provider value={{ bulbOn: bulbOn, setbulbOn: setbulbOn }} >
                {children}
            </bulbContext.Provider>
        </>
    )
}

export default BulbProvider;