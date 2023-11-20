import React from "react";
import { itemdata } from "./ItemsData";
import { Link } from "react-router-dom";

function Items() {
    return (
        <>
            {
                itemdata.map((itemss) => {
                    return (
                        <>
                        <Link to={`details/${itemss.id}`}>
                        <div>
                            <img src={itemss.pic} alt="" />
                            <h1>{itemss.name}</h1>
                            <h4>{itemss.type}</h4>
                        </div>
                        </Link>
                        </>
                    )

                })
            }
        </>
    )
}
export { Items }