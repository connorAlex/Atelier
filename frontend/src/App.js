
import './App.css';
import Signin from './sign-in/SignIn';
import { GoogleMap } from './googlemaps/GoogleMap';
const myArr = {lat:22.54992, lng:100}

let dummyCollection = [
  {
    name: "John Doe",
    location: {lat: 41.928, lng: -88.50}
  },
  {
    name: "Jane Doe",
    location: {lat: 41.928, lng: -87.70}
  }
]

function App() {
  return (
    <div className="App">
      < GoogleMap location={myArr} userLocationCollection={dummyCollection}/>
      
    </div>
  );
}

export default App;
