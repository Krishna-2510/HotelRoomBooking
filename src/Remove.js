import React,{useState} from "react";
import { ReactDOM } from "react";
import Roomdetails from "./Roomdetails";
import Moment from 'react-moment';
function Remove(){
    const[email,setEmail]=useState('');
    const[room,setRoom]=useState('');



    const roomType=(r)=>{
        if(r>=1&&r<=2)
        return 100;
        else if(r>=3&&r<=5)
        return 80;
        else
        return 50;
    }

    const calculateRefund=(Start,bill)=>{
        let now = new Date();
        let hrs = (Start-now)/36e5;
        if(hrs>=48)
        return bill;
        else if(hrs>=24 && hrs<48)
        return Math.round(bill/2);
        else 
        return 0;
    }

    const convert=(date)=>{
        var dateString = date;
        dateString = new Date(dateString).toUTCString();
        dateString = dateString.split(' ').slice(0, 5).join(' ');
        return dateString;
    }
    function Search(){
        let currentRoom=Roomdetails[room];
        let found=0;
        for(let i=0;i<currentRoom.length;i++){
            console.log(i);
            if(currentRoom[i].Email==email){
                found=1;
                document.getElementById('cancelbutton').style.display='block';
                let bill = Math.round(((currentRoom[i].End-currentRoom[i].Start)/36e5)*roomType(room));
                let refund  = calculateRefund(currentRoom[i].Start,bill);
                
                document.getElementById('searchresult').innerHTML=`
                <div class="row">
                    <h3>Room Booked:</h3><p>${room}</p>
                </div>
                <div class="row">
                    <h3>From:</h3><p>${convert(currentRoom[i].Start)}</p>
                </div>
                <div class="row">
                    <h3>To:</h3><p>${convert(currentRoom[i].End)}</p>
                </div>
                <div class="row">
                    <h3>Bill:</h3><p>Rs.${bill}</p>
                </div>
                <div class="row">
                    <h3>Refund on cancellation:</h3><p>Rs.${refund}</p>
                </div>`;
                document.getElementById('cancelbutton').addEventListener('click',()=>{
                    Roomdetails[room].splice(i,1);
                    document.getElementById('searchresult').innerHTML=`<h3>Booking successfully cancelled</h3><h4>Refund price:</h4><p>Rs.${refund}</p>`
                });
            }
        }
        if(!found){
            document.getElementById('searchresult').innerHTML=`<h3>You don't have any bookings</h3>`
            document.getElementById('cancelbutton').style.display='none'
        };
    }
    return(
        <>
            <div id="outbox">
                <div id="main">
                <h2>Remove Booking</h2>
                <input type='email' onChange={(e)=>setEmail(e.target.value)} placeholder="Enter the email adress"/>
                <input type='number' min='1' max='10' onChange={(e)=>setRoom(e.target.value)} placeholder="Enter the room number"/>
                <button onClick={Search}>Search</button>
                <button id="cancelbutton" style={{display:'none'}}>Cancel  Booking</button>
                <div id="searchresult">

                </div>
                </div>
            </div>
        </>
    )
};

export default Remove;