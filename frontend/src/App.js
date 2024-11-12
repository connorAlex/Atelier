
import './App.css';
import Home from './Home';
import SignIn from './sign-in/SignIn';
import ArtistsPage from './components/ArtistsPage';
import MiniProfilePage from './components/MiniProfilePage';
// import ArtistProfile from './MiniProfilePage';
import { userCollection, loggedInUser } from './components/userData';
import EditArtistPage from './components/EditArtistPage';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home userCollection={userCollection} />}/>
        <Route path="/profile" element = {<EditArtistPage myProfile={loggedInUser} />} />
        
      </Routes>
      
    </Router>
  );
}

export default App;
