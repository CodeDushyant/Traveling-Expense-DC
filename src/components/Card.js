import { useState } from "react";

function Card({id,image,info,price,name,removeTour}){
    function readmoreHandler(){
        setreadmore(!readmore);
    }

    const[readmore,setreadmore]=useState(false);
    // const description=`${info.substring(0,200)}....`
    const description=readmore?info:`${info.substring(0,200)}....`;
    return (
        <div className="card">
            <img src={image} className="image"></img>
            <div className="tour-info">
                <div className="tour-details">
                <h4 className="tour-price">₹{price}</h4>
                <h4 className="tour-name">{name}</h4>
                <div className="description">
                    {description}
                    <span onClick={readmoreHandler} className="read-more">
                        {readmore ? 'Show Less':'Read More'}
                    </span>
                </div>
            </div>
            </div>
            <button onClick={()=>removeTour(id)} className="btn-red">Not Interested</button>
        </div>
    )
}

export default Card;