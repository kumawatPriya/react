import React, {useRef,useState} from "react";

function UseRefe(){
const refElement = useRef("");
console.log(refElement)

function Resetfunc(){
    setName("")
    refElement.current.focus()
    refElement.current.style.color = "black"
}
function handleInput(){
    refElement.current.style.color = "blue";
    refElement.current.valueOf = "Priya Kumawat"
}

const [name, setName] = useState("Priya")
    return(
        <>
        <h1>Learning UseRef</h1>
        <input ref={refElement} type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        <button onClick={Resetfunc}>Reset</button>
        <button onClick={handleInput}>Handle</button>
        </>
    )
}

export { UseRefe }