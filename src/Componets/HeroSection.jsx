import SelfCity from './SelfCity.jsx'
import './HeroSection.css'
import OtherCity from './OtherCity.jsx';
import { useContext} from 'react';
import { LocationContext } from '../locationContext.jsx';
import { Circles } from 'react-loader-spinner'

// import {OtherCity} from "./OtherCity"

function HeroSection(){
    console.log("hero me aya")   
    const {location}=useContext(LocationContext);
    
    return(
        <div className='herosection' >
            
            { 
            location.error ? (
                <>
                    {console.log("error hai") }
                    <p> Unable to retrieve location.</p>
                </>
            ) : location.latitude === null || location.longitude === null ? (
                <div style={{position:"absolute",top:"30%",textAlign:"center",width:"90%"} }>
                    <Circles
                    height="80"
                    width="80"
                    color="#fff"
                    ariaLabel="circles-loading"
                    wrapperStyle={{
                        display:"inline-block",

                    }}
                    wrapperClass=""
                    visible={true}
                    />
                    <br></br>
                    <p>Acquiring location...</p>
                    <br></br>
                    <p style={{fontSize:"10px"}}><i><u>Allow location access for weather updates at your place.</u></i> </p>
                </div>
             ) : (
                <>
                <SelfCity className="selfCity" />
                <div className="break"></div>
                <OtherCity className="selfCity" />
                </>
            )
            }

        </div>   
        
        
    );
}

export default HeroSection;