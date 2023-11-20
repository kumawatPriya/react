import React, { createContext } from "react";
import { ChilDA } from "./CHILD1";
import image from "./citaphil3.jpg"


const data = createContext()
const data1 = createContext()
const data2  = createContext()
const  Parent=()=>{
    const name = "Priya"
    const sname = "Kumawat"
    const Image = `${image}`
    return(
        <>
        <data.Provider value={name} >
            <data1.Provider value={sname}>
                <data2.Provider value={Image}>
        <ChilDA/>
        </data2.Provider>
        </data1.Provider>
        </data.Provider>
        </>
    )
}

export { Parent,data,data1,data2 }