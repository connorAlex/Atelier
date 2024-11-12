
import './App.css';
import { useState, useEffect, setError } from 'react';
import Signin from './sign-in/SignIn';
import ArtistList from './components/ArtistList';
import { GoogleMap } from './googlemaps/GoogleMap';
import ToolBar from './shared-components/Toolbar';
import getLocationData from './locationCalc/getLocationData';
import { filterLocationsWithinRadius } from './locationCalc/filterLocations';
import MiniProfilePage from './components/MiniProfilePage';


function Home({userCollection}) {
  const [filteredUsers, setfilteredLocation] = useState(userCollection)
  const [selectedUser, setSelectedUser] = useState(null)
  const [currentLocation, setCurrentLocation] = useState({lat:41.871889, lng:-87.64925});
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  
  
  let userInfo
  const setUser = (user) => {
    if (user !== selectedUser) {
      setSelectedUser(user);
      setOverlayVisible(true)
    }
  }

  const handleSearch = async (searchQuery) => {
    let newLocation = await getLocationData(searchQuery)
    setCurrentLocation(newLocation)
  }

  const toggleOverlay = () => {
    setOverlayVisible(!isOverlayVisible);
    console.log("fired")
  };

  useEffect(() => { 
    fetchLocation();
    let filteredUsers = filterLocationsWithinRadius(currentLocation, userCollection, 10)
    setfilteredLocation(filteredUsers)
  }, [])
  useEffect(() => {
    let filteredUsers = filterLocationsWithinRadius(currentLocation, userCollection, 10)
    setfilteredLocation(filteredUsers)
  }, [currentLocation])
  useEffect(() => {
    userInfo = filteredUsers[selectedUser]
  }, [selectedUser, filteredUsers])

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
  
  return (
    <div className="Home">
      <ToolBar handleSearch={handleSearch} />
      <ArtistList  selectedUser={selectedUser} setUser={setUser} artists={filteredUsers}/>
      {isOverlayVisible && 
      <MiniProfilePage artist={selectedUser} onClose={toggleOverlay}/>
      }
      <GoogleMap 
        selectedUser={selectedUser} 
        setUser={setUser} 
        userLocationCollection={filteredUsers} 
        radius={3}
        currentLocation={currentLocation}
        setCurrentLocation={setCurrentLocation}
        />
    </div>
  );
}

export default Home;
