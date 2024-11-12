import React, {useEffect, useState } from 'react'
import { APIProvider, Map, AdvancedMarker} from '@vis.gl/react-google-maps'

const GoogleMap = ({currentLocation, setCurrentLocation, userLocationCollection, radius, setUser}) => {

  const handleMarkerClick = (userId) => {
    setUser(userId)
  }
  
  const shiftCoordinates = (location, offset = 0.001) => {
    return {
      lat: location.lat - offset * 15,
      lng: location.lng + offset
    };
  }

    return(
      <APIProvider apiKey={"AIzaSyCekx4Yn46gYABje-g-qXxfCFmvCxNxRsM"}>
        
          <Map
          style={{width: '100vw', height: '95vh'}}
          center={shiftCoordinates(currentLocation)}
          defaultZoom={12}
          gestureHandling={'greedy'}
          disableDefaultUI={true}
          mapId={'5b86a6c3c0c3128f'}
          >
          {userLocationCollection.map(user => (
            <AdvancedMarker
              position={user.location}
              title= {user.name}
              onClick={() => handleMarkerClick(user)}
            />
          ))}
        </Map>
        
        
      </APIProvider>
    )
  };


export {GoogleMap}