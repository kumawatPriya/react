import React, { useState } from "react";
import "./table.css"

export default function Table(){

    const [array, setArray] = useState([]) 
    const [inputdata, setInputdata] = useState({name: "", number: ""})
    const [index,setIndex] = useState()
    const [row,setRow] = useState(false)

    const data =(e)=>{
        setInputdata({...inputdata,[e.target.name]:e.target.value})
    }
    const {name,number} = inputdata;

    const addinputdata = ()=>{
        if(name==="" && number===""){
            alert("Enter name & roll no.")
        }
        else{
        setArray([...array,{name,number}])
        console.log(inputdata)
        setInputdata({name:"" ,number:""})
        }
    }

    const deletedata = (i)=>{
        console.log(i, "This input row want to be delete....")
        let total=[...array]
        total.splice(i,1)
        setArray(total)
      }

    const updatedata = (i)=>{
        let {name,number} = array[i]
        console.log(i, "This index row data want to be update....")
        setInputdata({name,number})
        setRow(true)
        setIndex(i)
    }

    const updateinfo = ()=>{
        let total=[...array]
        total.splice(index,1,{name,number})
        setArray(total)
        setRow(false)
        setInputdata({name:"" ,number:""})
    }
    return(
        <>
        <div className="addinfo">
            
       Name:<input type="text" name="name"  value={inputdata.name || ""}  placeholder="Enter Name" onChange={data}/>
       <br />
       Contact:<input type="number" name="number" value={inputdata.number || ""} placeholder="Enter Number" onChange={data}/>
      <button onClick={!row?addinputdata:updateinfo}>{!row? `Add data` : `Update data`}</button>
      </div>

        <table border="1px" width="100%">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Number</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>
       
        {
            array && array.map((item,i)=>{
                return(
                    <>
                    <tbody>
                    <tr key={i} className="input">
                    <td>{item.name}</td>
                    <td>{item.number}</td>
                    <td><button onClick={()=>updatedata(i)}>Update</button></td>
                    <td><button onClick={()=>deletedata(i)}>Delete</button></td>
                    </tr>
                    </tbody>
                    </>
                )
            })
        }
         </table>
        </>
    )
}