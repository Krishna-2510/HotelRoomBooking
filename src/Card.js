import React from "react";
import { ReactDOM } from "react";
import Roomdetails from "./Roomdetails";

function Card(props){

    const convert=(date)=>{
        var dateString = date;
        dateString = new Date(dateString).toUTCString();
        dateString = dateString.split(' ').slice(0, 5).join(' ');
        return dateString;
    }
    console.log(props);
    console.log(Roomdetails);
    console.log(Roomdetails[props.room][props.ind]);
    return(
        <div id="cardbound">
            <div className="row">
                <h3>Email:</h3>
                <p>{Roomdetails[props.room][props.ind].Email}</p>
            </div>
            <div className="row">
                <h3>From:</h3>
                <p>{convert(Roomdetails[props.room][props.ind].Start)}</p>
            </div><div className="row">
                <h3>To:</h3>
                <p>{convert(Roomdetails[props.room][props.ind].End)}</p>
            </div>
        </div>
    )
}

export default Card;