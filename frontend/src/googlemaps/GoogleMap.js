import React, {useEffect, useState } from 'react'
import { APIProvider, Map, AdvancedMarker} from '@vis.gl/react-google-maps'
import { filterLocationsWithinRadius } from '../locationCalc/filterLocations';


const GoogleMap = ({userLocationCollection, radius}) => {
  const [currentLocation, setCurrentLocation] = useState({lat:41.871889, lng:-87.64925});
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUserLocation = () => {
      return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
          reject("Geolocation not supported")
        } else {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              resolve({
                lat: position.coords.latitude,
                lng: position.coords.longitude
              });
            },
            (err) => {
              reject("Unable to retrieve location")
            }
          )
        }
      })
    };

    const fetchLocation = async () => {
      try {
        const location = await getUserLocation();
        setCurrentLocation(location); // Store location in state
        console.log("Successfully got location data:", location);
      } catch (err) {
        setError(err); // Set error if location retrieval fails
        console.error(err);
      }
    };

    fetchLocation();
    console.log(currentLocation)
  }, [])

  const handleMarkerClick = () => {
    alert("I've been clicked!")
  }

  const getUserLocation = () => {
    let location = {lat: 0, lng: 0}
    const success = (position) => {
      location.lat = position.coords.latitude;
      location.lng = position.coords.longitude;
      console.log("success on getting location data")
    }

    const error = () => {
      alert("Unable to find location")
    }

    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
    
  }

  const filteredLocation = filterLocationsWithinRadius(currentLocation, userLocationCollection, radius)

    
    return(
      <APIProvider apiKey={"AIzaSyCekx4Yn46gYABje-g-qXxfCFmvCxNxRsM"}>
        
          <Map
          style={{width: '100vw', height: '100vh'}}
          defaultCenter={currentLocation}
          defaultZoom={9}
          gestureHandling={'greedy'}
          disableDefaultUI={true}
          mapId={'5b86a6c3c0c3128f'}
          >
          {filteredLocation.map(user => (
            <AdvancedMarker
              position={user.location}
              title= {user.name}
              onClick={handleMarkerClick}
              
            />
          ))}
        </Map>
        
        
      </APIProvider>
    )
  };


export {GoogleMap}