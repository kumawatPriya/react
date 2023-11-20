import React from "react";
import { data,data1,data2 } from "./Parent";


function ChildB(){
    return(
        <>
<data.Consumer>
    {
        (name)=>{
            return(
                <>
                <data1.Consumer>
                    {
                        (sname)=>{
                            return(
                                <>
                                <data2.Consumer>
                                {
                                    (Image)=>{
                                        return(
                                            <>
                                            
                                            <h1>My name is {name} {sname}</h1>
                                            <img src={Image} alt="" />
                                            </>
                                        )
                                    }
                                }
                                </data2.Consumer>
                                </>
                            )
                        }
                    }
                </data1.Consumer>
                </>
            )
        }
    }
</data.Consumer>
        </>
    )
}

export { ChildB }