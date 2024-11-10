
import './App.css';
import Signin from './sign-in/SignIn';
import { GoogleMap } from './googlemaps/GoogleMap';
const myArr = {lat:22.54992, lng:100}

function App() {
  return (
    <div className="App">
      < GoogleMap location={myArr}/>
      
    </div>
  );
}

export default App;
