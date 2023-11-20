import React, { createContext } from 'react'
import { CHildA } from './ChildA'

// What is Context Api ?
//  create, provider, consumer

// How to use It ?
// is contaxt api also problemetic ?  - useContext hook (solution)

let data = createContext()
let data1 = createContext()


const PropDRilling = () => {
    const name = "Priya Kumawat"
    const gender = "female"
  return (
    <>
    <data.Provider value={name}>
        <data1.Provider value={gender}>
    <CHildA/>
    </data1.Provider>
    </data.Provider>

    </>
  )
}

export default PropDRilling
export {data, data1}