
import './App.css';
import Signin from './sign-in/SignIn';
import ToolBar from './shared-components/Toolbar';


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
      <ToolBar />
      
    </div>
  );
}

export default App;
