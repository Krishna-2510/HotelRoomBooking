import React, { useState } from "react";
import { ReactDOM } from "react";
import './Createcss.css'
import Roomdetails from "./Roomdetails";


// const fs=require('fs');
// let Roomdetails;
// fs.readFile('AllRooms.txt',(err,data)=>{
//     Roomdetails=data;
// });
// console.log(Roomdetails);

function Create() {
    const [email, setEmail] = useState('');
    const [room, setRoom] = useState('');
    const [sttm, setSttm] = useState('');
    const [stdt, setStdt] = useState('');
    const [entm, setEntm] = useState('');
    const [endt, setEndt] = useState('');

    //function to check if a timeinterval is valid or not
    const checkoverlap = (start, end) => {
        console.log(start);
        console.log(end);

        let currentRoom = Roomdetails[room];
        for (var i of currentRoom) {
            let st = i.Start;
            let en = i.End;

            // console.log("at start="+st+" and end="+en);
            if (start < en && end > st)//overlapping condition
            {
                console.log("overlapp at =" + i.Email);
                return true;
            }
        }
        return false;
    }

    //function to return the roomtype
    const roomType = (r) => {
        if (r >= 1 && r <= 2)
            return 100;
        else if (r >= 3 && r <= 5)
            return 80;
        else
            return 50;
    }

    //function called after filling all details
    const book = () => {
        console.log(`Email is ${email}`);
        console.log(room);
        console.log(sttm);
        console.log(stdt);
        console.log(entm);
        console.log(endt);
        console.log(Roomdetails);
        console.log(Roomdetails[room]);


        let start = new Date(stdt + 'T' + sttm);//start date-time
        let end = new Date(endt + 'T' + entm);//end date-time


        if (!checkoverlap(start, end)) {//valid time interval
            let currentUser = {
                Email: email,
                Start: start,
                End: end
            };

            Roomdetails[room].push(currentUser);//updating the original database
            let hrs = (end - start) / 36e5;
            let bill = Math.round(roomType(room) * hrs);
            alert("Room successfully booked with bill = " + bill);
            console.log(Roomdetails[room]);
        }
        else {
            alert("Room booking time overlaps with  another booking");
        }

    }
    return (
        <>
            <div id="outbox">
                <div id="main">
                    <h2>Book a Room</h2>
                    {/* <input type="text" placeholder="Enter" onChange={(e) => console.log(e.target.value)} onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (e.target.type = "text")}/> */}
                    <input type='email' onChange={(e) => setEmail(e.target.value)} placeholder="Enter the email adress" />
                    <input type='number' max='10' min='1' onChange={(e) => setRoom(e.target.value)} placeholder="Enter the room  number" />
                    <input type='text' onChange={(e) => setStdt(e.target.value)} placeholder="Enter the starting date" onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (e.target.type = "text")}/>
                    <input type='text' onChange={(e) => setSttm(e.target.value)} placeholder="Enter the starting time" onFocus={(e) => (e.target.type = "time")} onBlur={(e) => (e.target.type = "text")}/>
                    <input type='text' onChange={(e) => setEndt(e.target.value)} placeholder="Enter the ending date" onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (e.target.type = "text")}/>
                    <input type='text' onChange={(e) => setEntm(e.target.value)} placeholder="Enter the ending date" onFocus={(e) => (e.target.type = "time")} onBlur={(e) => (e.target.type = "text")}/>

                    <button onClick={book}>Book Room</button>
                </div>
            </div>
        </>
    );

}

export default Create;