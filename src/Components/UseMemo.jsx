import React, { useMemo, useState } from "react";

function MeMo(){

    const [number, setNumber] = useState(0);
    const [value, setValue] = useState(10);
    // const handleNumber = ()=>{
    //     setNumber(number+1)
    // }
    const handleValue = ()=>{
        setValue(value-1)
    }
    const newNumber = useMemo(
    function memo(){
        console.log("number")
        return number+3
      
    },[number])
    
    return(
        <>
       <h1>{number}</h1>
       <h2>{value}</h2>
       <h1>{newNumber}</h1>
       <button onClick={()=>{setNumber(number+1)}}>Add</button>
       <button onClick={handleValue}>Less</button>
        </>
    )
}

export { MeMo }