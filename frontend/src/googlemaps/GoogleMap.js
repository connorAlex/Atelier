import React, {useEffect, useRef } from 'react'
import { APIProvider, Map, Marker} from '@vis.gl/react-google-maps'

const GoogleMap = ({location}) => {
  
  const handleMarkerClick = () => {
    alert("I've been clicked!")
  }
  const getUserLocation = () => {
    let location = {lat: 0, lng: 0}
    const success = (position) => {
      location.lat = position.coords.latitude;
      location.lng = position.coords.longitude;
      
    }

    const error = () => {
      alert("Unable to find location")
    }

    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
    console.log(location)
    return location
  }


  
    
    return(
      <APIProvider apiKey={"AIzaSyCekx4Yn46gYABje-g-qXxfCFmvCxNxRsM"}>
        <Map
          style={{width: '50vw', height: '50vh'}}
          defaultCenter={getUserLocation()}
          defaultZoom={9}
          gestureHandling={'greedy'}
          disableDefaultUI={false}
        >
          <Marker
                position={location}
                title="testmarker"
                onClick={handleMarkerClick}
                />
        </Map>
      </APIProvider>
    )
  };


export {GoogleMap}