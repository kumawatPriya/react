import React from "react";
import Countdown from "react-countdown";
import { Payment } from "./Payment";

function CountDown(){
    return(
        <>
   
<Countdown date={Date.now()+100000}>
<Payment/>
</Countdown>
   
        </>
    )
}

export { CountDown }