import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../locationContext";
import { IoIosSunny } from "react-icons/io";
import { MdSevereCold } from "react-icons/md";
import { WiDayCloudyWindy } from "react-icons/wi";
import { IoMdRainy } from "react-icons/io";


export default function useFetch(){

        const {location}=useContext(LocationContext);
        const [temp,setTemp]=useState();
        const [humidity,setHumidity]=useState();
        const [visibility,setVisibility]=useState();
        const [windSpeed,setWindSpeed]=useState();
        const [searchedCity,setSearchedCity]=useState('');
        const [searchCountry,setSearchCountry]=useState('');
        const [icon,setIcon]=useState(<i></i>); 
        const [bgurl,setBgurl]=useState('');
        

    
        let apiKey='<API_KEY>'
        // let baseurl=;
    
        // console.log("use fetch render hoaa"+" location li val"+location);

        // console.log("city hai "+city)

        async function fetchData(location,city) {
            
            let baseurl= city? (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
                             : (`https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${apiKey}&units=metric`)   
                    try {
                        const response= await fetch(baseurl);
                        const data=await response.json();
            
                        setTemp(data.main.temp);
                        setHumidity(data.main.humidity);
                        setVisibility(data.visibility);
                        setWindSpeed(data.wind.speed);
                        setSearchedCity(data.name);

                        if(data.sys.country!=null)
                            setSearchCountry(data.sys.country);
                        else setSearchCountry('');
                        getIcon();
            
                        console.log(data);
                        // console.log(`${temp},${humidity},${visibility},${windSpeed},${searchedCity}`)
                    } catch (error) {
                        console.log(error);
                        alert(error);
                        return
                        
                    }

                    console.log(city);
                
        }

        function getIcon(){
            switch (true) {
                // Sunny Conditions
                case temp > 25 && windSpeed < 10 && visibility > 1000:
                    setIcon(<IoIosSunny/>)
                    setBgurl('https://media.istockphoto.com/id/612023744/photo/blue-and-orange-sunset-sky.jpg?s=612x612&w=0&k=20&c=bqPHaI4d3ghIbLIwtbTDPxV8QQ2pIN2mbCfzLb7gucQ=');

                    // weatherCondition = "Sunny";
                    // advice = "Perfect weather to enjoy outdoor activities!";
                    break;
                //cold
                case temp > 10 && temp <= 25 && windSpeed < 10 && visibility > 1000:
                    setIcon( <MdSevereCold/>)
                    setBgurl('https://img.freepik.com/premium-photo/winter-season-cold-weather-with-ice-snowfall-chill-frosty-cold-places-background-wallpaper_867643-29250.jpg')

                    // weatherCondition = "Cool and Sunny";
                    // advice = "A light jacket might be needed, but otherwise, great weather!";
                    break;
        
        
                // Cloudy Conditions
                case visibility < 2000 && humidity <= 60 && windSpeed <= 10:
                    setIcon( <WiDayCloudyWindy/>)
                    setBgurl('https://media.istockphoto.com/id/157527872/photo/storm-cloud.jpg?s=612x612&w=0&k=20&c=wsK-fd2hBm9SGlV_lnKYqFCAS3-_sk-f9GFAUbT6H40=')
                    // weatherCondition = "Cloudy";
                    // advice = "It’s cloudy, but the weather is mild. A light jacket should suffice.";
                    break;
        
                // Rainy Conditions (high humidity, low visibility, moderate wind)
                case humidity > 80 && visibility < 1000:
                    setIcon( <IoMdRainy/>)
                    setBgurl('https://static.vecteezy.com/system/resources/previews/042/195/725/non_2x/ai-generated-rainy-sky-background-free-photo.jpg')
                    // weatherCondition = "Rainy";
                    // advice = "Carry an umbrella and avoid outdoor activities if possible.";
                    break;
        
                // Default condition (neither extreme sunny, cold, windy, nor cloudy)
                default:
                    console.log("not matched")
                    if(temp>20) {
                        setIcon( <IoIosSunny/>)
                        setBgurl('https://media.istockphoto.com/id/612023744/photo/blue-and-orange-sunset-sky.jpg?s=612x612&w=0&k=20&c=bqPHaI4d3ghIbLIwtbTDPxV8QQ2pIN2mbCfzLb7gucQ=')
                    }
                    else if(temp>10 && temp<20) {
                        setIcon( <WiDayCloudyWindy/>)
                        setBgurl('https://media.istockphoto.com/id/157527872/photo/storm-cloud.jpg?s=612x612&w=0&k=20&c=wsK-fd2hBm9SGlV_lnKYqFCAS3-_sk-f9GFAUbT6H40=')
                    }
                    else {
                        setIcon( <MdSevereCold/>)
                        setBgurl('https://img.freepik.com/premium-photo/winter-season-cold-weather-with-ice-snowfall-chill-frosty-cold-places-background-wallpaper_867643-29250.jpg')
                    }
                    
                    // weatherCondition = "Moderate Weather";
                    // advice = "Weather is mild, no specific precautions needed.";
            }
        }
    
        function getdata(location,city) {
            if(city==='') {
                alert("Enter the city for search");
                return ;
            }
            fetchData(null,city);
        }
    
        useEffect(() => {
            if (location && location.latitude !== null && location.longitude !== null) {
                fetchData(location, null);
            }
        }, [location]);


        

        return {temp,humidity,visibility,windSpeed,searchCountry,searchedCity,icon,bgurl,getdata};

}

