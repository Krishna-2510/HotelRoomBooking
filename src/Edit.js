import React,{useState} from 'react'
import { ReactDOM } from 'react'
import Roomdetails from './Roomdetails';
import './Createcss.css'

function Edit(){
    const[email,setEmail] = useState('');
    const[oldroom,setOldroom]=useState('');
    const[newroom,setNewroom]=useState('');
    const[sttm,setSttm]  = useState('');
    const[stdt,setStdt] = useState('');
    const[entm,setEntm] = useState('');
    const[endt,setEndt] = useState('');


    //function to check if a timeinterval is valid or not
    const checkoverlap=(start, end)=>{
        console.log(start);
        console.log(end);
        
        let currentRoom = Roomdetails[oldroom];
        for(var i of currentRoom){
            let st=i.Start;
            let en=i.End;

            // console.log("at start="+st+" and end="+en);
            if(start<en && end>st)//overlapping condition
            return true;
        }
        return false;
    }

    //function to return the roomtype
    const roomType=(r)=>{
        if(r>=1&&r<=2)
        return 100;
        else if(r>=3&&r<=5)
        return 80;
        else
        return 50;
    }
    

    //function to update the users info
    const update=()=>{
        let start = new Date(stdt+'T'+sttm);//start date-time
        let end = new Date(endt+'T'+entm);//end date-time

        let currentRoom = Roomdetails[oldroom];
        let found=0;
        for(var i=0;i<currentRoom.length;i++){
            if(email==currentRoom[i].Email){
                found=1;
                Roomdetails[oldroom].splice(i,1);
                break;
            }
        }
            if(found==1){
                if(!checkoverlap(start,end)){
                    let currentUser={
                        Email:email,
                        Start:start,
                        End:end
                    };
                    Roomdetails[newroom].push(currentUser);
                    let hrs = (end-start)/36e5;
                    let bill = Math.round(roomType(newroom)*hrs);
                    alert("Details successfully upadted with updated bill="+bill);

                }
                else{
                    alert("Room booking time overlaps with  another booking");
                }
            }
            else{
                alert("User does not exist");
            }
    }

    return(
        <>
            <div id='outbox'>
                <div id="main">
                    <h2>Update Details</h2>
                    <input type='email' onChange={(e)=>setEmail(e.target.value)} placeholder="Enter the email adress"/>
                    <input type='number' max='10' min='1' onChange={(e)=>setOldroom(e.target.value)} placeholder="Enter the old room  number"/>
                    <input type='number' max='10' min='1' onChange={(e)=>setNewroom(e.target.value)} placeholder="Enter the new room  number"/>
                    <input type='text' onChange={(e)=>setStdt(e.target.value)} placeholder="Enter the starting date" onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (e.target.type = "text")}/>
                    <input type='text' onChange={(e)=>setSttm(e.target.value)} placeholder="Enter the starting time" onFocus={(e) => (e.target.type = "time")} onBlur={(e) => (e.target.type = "text")}/>
                    <input type='text' onChange={(e)=>setEndt(e.target.value)} placeholder="Enter the ending date"  onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (e.target.type = "text")}/>
                    <input type='text' onChange={(e)=>setEntm(e.target.value)} placeholder="Enter the ending date" onFocus={(e) => (e.target.type = "time")} onBlur={(e) => (e.target.type = "text")}/>

                    <button onClick={update}>Update Details</button>
                </div>
            </div>
        </>
    )
}

export default Edit;