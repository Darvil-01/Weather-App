import { createContext, useEffect, useState } from "react";

export const LocationContext=createContext();

export default function LocationProvider({children}){
    // const [location,setLocation]=useState('Allahabad');
    const [location, setLocation] = useState({
        latitude: null,
        longitude: null,
        error: null,
      });

    useEffect(()=>{
        const getCurrentLocation = () => {
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(
                (position) => {
                  // Success callback: Set the latitude and longitude to state
                //   console.log("location ki val "+  position.coords.latitude+" "+position.coords.longitude)
                setLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    error: null,
                  });
                //   console.log("location ki val "+ location.latitude+" "+location.longitude)
                },
                (error) => {
                  // Error callback: Set error message
                  setLocation({
                    ...location,
                    error: "Unable to retrieve your location.",
                   
                  });

                  alert("Not able to retrieve your location. ")
                }
              );
            } else {
              // If geolocation is not supported by the browser
              setLocation({
                ...location,
                error: "Geolocation is not supported by this browser.",
              });
              alert("Geolocation is not supported by this browser.")
            }
          };
      
          // Call the function to get location
          getCurrentLocation();
        }, []);    

    const val={
        location,setLocation
    }

    console.log("location ki val "+ location.latitude+" "+location.longitude)
    return (
        <LocationContext.Provider value={val}>
            {children}
        </LocationContext.Provider>
    );
}