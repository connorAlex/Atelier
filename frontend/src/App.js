
import './App.css';
import Home from './Home';
import SignIn from './sign-in/SignIn';

const dummyCollection = [
  {
    id: 1,
    name: "Alice Johnson",
    location: { lat: 41.8781, lng: -87.6298 } // Downtown Chicago
  },
  {
    id: 2,
    name: "Michael Smith",
    location: { lat: 41.8827, lng: -87.6233 } // Millennium Park area
  },
  {
    id: 3,
    name: "Emma Brown",
    location: { lat: 41.8916, lng: -87.6079 } // Near North Side
  },
  {
    id: 4,
    name: "Liam Martinez",
    location: { lat: 41.9032, lng: -87.6263 } // Old Town
  },
  {
    id: 5,
    name: "Olivia Davis",
    location: { lat: 41.8712, lng: -87.6514 } // Pilsen neighborhood
  },
  {
    id: 6,
    name: "William Lee",
    location: { lat: 41.8806, lng: -87.6742 } // West Loop
  },
  {
    id: 7,
    name: "Sophia Garcia",
    location: { lat: 41.9207, lng: -87.6387 } // Lincoln Park
  },
  {
    id: 8,
    name: "James Wilson",
    location: { lat: 41.8444, lng: -87.6454 } // Bridgeport neighborhood
  },
  {
    id: 9,
    name: "Mia Rodriguez",
    location: { lat: 41.8676, lng: -87.6151 } // Near South Side
  },
  {
    id: 10,
    name: "Benjamin Anderson",
    location: { lat: 41.8924, lng: -87.6354 } // River North
  }
];


function App() {
  return (
    <div className="App">
      <Home userCollection={dummyCollection}/>
      {/* <SignIn/> */}
    </div>
  );
}

export default App;
