import React,{useState} from "react";
import ReactDOM from "react";
import Roomdetails from "./Roomdetails";
import Card from './Card'

function View(){
    const[room,setRoom]=useState('');
    const[sttm,setSttm]  = useState('');
    const[stdt,setStdt] = useState('');
    const[entm,setEntm] = useState('');
    const[endt,setEndt] = useState('');
    const[CurrentRoom,setCurrentRoom]=useState([]);

    // function ncard(val,ind,arr){
    //     // console.log(ind);
    //     // console.log(room);
    //     return(
    //         <Card ind={ind} room={room}/>
    //     );
    // }

    let start = new Date(stdt+'T'+sttm);//start date-time
    let end = new Date(endt+'T'+entm);//end date-time
    function Show(){
        let filteredroom=[];
        for(var i of Roomdetails[room]){
            if(i.Start>=start && i.Start<=end)
            filteredroom.push(i);
        }
        filteredroom.sort((a,b)=>{
            return  a.Start - b.Start;
        });
        setCurrentRoom(filteredroom);
    }

    return(
        <>
            <div id="outbox">
            <div id="main">
                <h2>View Bookings</h2>
                <input type='number' max='10' min='1' onChange={(e)=>setRoom(e.target.value)} placeholder="Enter the room  number"/>
                <input type='text' onChange={(e)=>setStdt(e.target.value)} placeholder="Enter the starting date" onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (e.target.type = "text")}/>
                <input type='text' onChange={(e)=>setSttm(e.target.value)} placeholder="Enter the starting time"onFocus={(e) => (e.target.type = "time")} onBlur={(e) => (e.target.type = "text")}/>
                <input type='text' onChange={(e)=>setEndt(e.target.value)} placeholder="Enter the ending date" onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (e.target.type = "text")}/>
                <input type='text' onChange={(e)=>setEntm(e.target.value)} placeholder="Enter the ending date" onFocus={(e) => (e.target.type = "time")} onBlur={(e) => (e.target.type = "text")}/>
                <button onClick={Show}>Show Booking</button>
            </div>
            <div id="results">
                {CurrentRoom.map((elem,i)=>{
                    return(
                        <Card ind={i} room={room}></Card>
                    )
                })}
            </div>
            </div>
        </>
    )
}

export default View;