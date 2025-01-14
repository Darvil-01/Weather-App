import { useEffect, useState } from "react";
import "./digitalClock.css"
export default function digtalClock(){
        const [dateTime,setdateTime]=useState(new Date());

        useEffect(()=>{
            const interval=setInterval(()=>{
                setdateTime(new Date());
            },1000);

            return ()=> clearInterval(interval);
        },[]);  

        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const day=days[dateTime.getDay()];
        const date=dateTime.getDate();
        const month = dateTime.toLocaleString("default", { month: "long" }); 
        const year=dateTime.getFullYear();
        // const time = dateTime.toLocaleTimeString();
        const hours = dateTime.getHours().toString().padStart(2, '0'); 
        const minutes = dateTime.getMinutes().toString().padStart(2, '0');
        const second=dateTime.getSeconds().toString().padStart(2,'0');

    return (
        
        <div className="digitalClock" >
            
            <p className="time" >{hours} : {minutes} : {second}</p>
            <br/>
            <p>{day},</p>
            &nbsp;&nbsp;
            <p>{date} {month} {year}</p>
            
        </div>

    );
}