import React from "react";

function Cards(props){
    return(
        <>
            <div className="container">
                <h2 className="title">{props.heading}</h2>
                <img className="img" src={props.picture} alt="" />
                <p className="para">Cliffside Village at Waipio is an accurate name for this community. Not far from the backyard of these buildings, the land falls away into a valley so thick with green vegetation and plants , the 2-story buildings featuring the wooden facades and Plantation style features that have an unmistakeably welcoming feel.
</p>
            </div>

        
        </>
    )

}

export{ Cards }