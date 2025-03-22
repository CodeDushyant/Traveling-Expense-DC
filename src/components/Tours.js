import React, { useState } from "react";
import Card from "./Card";
function Tours({tours,removeTour}){
    return(
        <div className="container">
            <div>
            <h2 className="title">Plan With Dushyant</h2>
            </div>
        <div className="cards">
            {
                tours.map( (tours)=>{
                    return <Card key={tours.id} {...tours} removeTour={removeTour}></Card>
                })
            }
        </div>

        </div>
    )

}

export default Tours;


// on which case key or unique id is not present then pass indexes
// always pass key={} when using map function\
// jab bhi map function use kar rhe hoge tab hmesa hmes key passs ki jati hai this is good practice in development