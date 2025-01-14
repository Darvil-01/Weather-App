import { IoSearch } from "react-icons/io5";
import './OtherCity.css'
import { useContext, useEffect, useState } from "react";
import useFetch  from "./useFetch.jsx";


export default function OtherCity(){
    const [city,setCity]=useState('');
    const{temp,humidity,visibility,windSpeed,searchCountry,searchedCity,icon,bgurl,getdata}=useFetch('');
    // console.log(bgurl);

    function onChangeHandler(event){
            setCity(event.target.value);
    }

    
    return (
        <div style={{height:"auto"}}>  
            <div className="search">
                <input type="text" placeholder="Search city...." value={city} onChange={onChangeHandler} spellCheck={"true"}/>
                <div className="searchCityIcon">
                    <IoSearch onClick={()=>getdata(null,city)}/>
                </div>
            </div>

            <div className="cityDataContainer">
                <div><p >{`${searchedCity} , ${searchCountry}`}</p> <div style={{display:"inline"}}>{icon}</div></div>
                <div className="hrbreak"></div>

                <div className="cityData"><span>Temperature</span><span>{temp}&deg;c</span></div> 

                <div className="hrbreak"></div>

                <div className="cityData"><span>Humidity</span><span>{humidity}%</span></div>

                <div className="hrbreak"></div>

                <div className="cityData"><span>Visibility</span><span>{visibility} ml</span></div>

                <div className="hrbreak"></div>

                <div className="cityData"><span>Wind Speed</span><span>{windSpeed} km/h</span></div>
            </div>
            
            
        </div>
    );
}