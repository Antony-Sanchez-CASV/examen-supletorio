import React,{useEffect} from "react";
import './App.css';
//import Jokes from './component/a3';
import Jokes from './component/jokes';
import Find from './component/find';
import axios from "axios";
function App() {

  
  return (
    <div className="App">
      <Jokes/>
      <Find/>
  
    </div>
  );
}

export default App;
