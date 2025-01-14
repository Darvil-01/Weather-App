import './SelfCity.css'
import { IoLocationSharp } from "react-icons/io5";

import useFetch from './useFetch';
import DigtalClock from './digitalClock';
function SelfCity(){
    const{temp,searchedCity,icon,bgurl}=useFetch('');
    // console.log(bgurl)
    let t=Math.floor(temp);
    // console.log("SelfCity me aya");
    return(
        <div className='selfCity'>
            
            <img src={bgurl}/>
            
            <div className="location">
                
                <IoLocationSharp  style={{fontSize:"1.5rem" ,marginTop:"10px"}}/>
                <div>
                    <h3>{searchedCity}</h3>
                    <h4 style={{textAlign:"right"}}>In</h4>
                </div>
                
            </div>
            
            {/* {console.log(icon)} */}
                <div className='weatherIcon' >{icon}</div>
            
            <div className="temp"> {t}&deg; </div>
           
            <DigtalClock />

           
        </div>
    );
}

export default SelfCity;