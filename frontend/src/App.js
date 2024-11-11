
import './App.css';
import Signin from './sign-in/SignIn';
import { GoogleMap } from './googlemaps/GoogleMap';


let dummyCollection = [
  {
    id:1,
    name: "John Doe",
    location: {lat: 41.928, lng: -88.50}
  },
  {
    id:2,
    name: "Jane Doe",
    location: {lat: 41.928, lng: -87.70}
  }
]

function App() {
  return (
    <div className="App">
      <GoogleMap userLocationCollection={dummyCollection} radius={10}/>
      
    </div>
  );
}

export default App;
