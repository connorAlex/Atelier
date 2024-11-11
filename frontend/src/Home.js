
import './App.css';
import { useState, useEffect } from 'react';
import Signin from './sign-in/SignIn';
import ArtistList from './components/ArtistList';
import { GoogleMap } from './googlemaps/GoogleMap';
import ToolBar from './shared-components/Toolbar';

function Home({userCollection}) {
  const [selectedUser, setSelectedUser] = useState(1)

  const setUser = (userId) => {
    if (userId !== selectedUser) {
      setSelectedUser(userId);
    } else {
      console.log("same user")
    }
  }

  useEffect(() => {
    
  }, [selectedUser])

  return (
    <div className="Home">
      <ToolBar/>
      <ArtistList  selectedUser={selectedUser} setUser={setUser} artists={userCollection}/>
      <GoogleMap selectedUser={selectedUser} setUser={setUser} userLocationCollection={userCollection} radius={100}/>
    </div>
  );
}

export default Home;
