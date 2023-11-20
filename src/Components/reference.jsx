import { React, useState, useRef}  from "react";


function UseReference(){

    const inputRef = useRef()
    console.log(inputRef)
    
    const [ text, setText ] = useState()

    const inputFocus = ()=>{
        inputRef.current.focus()
        inputRef.current.style.color = 'black'
        setText("")
    }
    
    
    const changecolor = ()=>{
        inputRef.current.focus()
      inputRef.current.style.color = 'green'
    }

    return(
        <>
        <input ref={inputRef} type="text" value={text} onChange={(e)=>setText(e.target.value)} />
        <button onClick={inputFocus}>X</button>
        <button onClick={changecolor}>Set Color</button>
        </>
    )
}

export { UseReference }