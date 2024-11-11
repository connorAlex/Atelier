
import './App.css';
import Signin from './sign-in/SignIn';


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
      <Signin />
      
    </div>
  );
}

export default App;
