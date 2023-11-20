import React, { createContext } from "react";
import { CHildA } from "./ChildA";

// What is useContext hook ?
// create, provider, useContext
// Hoe to use it?

const data = createContext()
const data1 = createContext()

function UseContexT(){
    const name = "Priya Kumawat"
    const gender = "female"
    return(
        <>
        <data.Provider value={name}>
            <data1.Provider value={gender}>
        <CHildA/>
        </data1.Provider>
        </data.Provider>
        </>
    )
}
export { UseContexT,data,data1 }