import React, { useContext } from "react";
// import { data,data1 } from "./PropDRilling";
import { data,data1 } from "./useConText";

function CHildC(){
   const name1 =  useContext(data);
   const genderr = useContext(data1);
    return(
        <>
        <h1>hey my name is {name1} and gender is {genderr}</h1>
        {/* <data.Consumer>
            {
                (name)=>{
                    return(
                        <data1.Consumer>
                            {
                                (gender)=>{
                                    return(
                                    <h1> My name is {name} and my gender is {gender}</h1>
                                    )
                                }
                            }
                        </data1.Consumer>
                    )
                }
            }
        </data.Consumer> */}
        </>
    )
}

export { CHildC }