import './App.css';
import React from "react";
import Axios from "axios";
import {useState} from "react";
//import dogGrid from "./dogGrid";


function App() {

  const [loaded, setLoaded] = useState(false);
  const url = "https://dog.ceo/api/breeds/image/random/8";
  const [dogs, setDog] = useState([]);  //initiated state
  
  async function FetchDog(){
    try{
      setLoaded(false);
      const result = await Axios(url);
      setDog(result.data.message);
      console.log(result.data); 
    }
    catch(error){
      console.error(error);
    }
  }

  //prevent default
  function onClick(e){
    e.preventDefault()
    FetchDog();
  }

  return (
    <div className="App">
      <h1>〘🐶 Doge Planet 🐶〙</h1>
      <button className="App-btn" onClick={onClick}>🐾Click here to fetch doge</button>
      <div className="container">
      {!loaded && dogs.map( dog => 
        <img className="App-img" src={dog} alt="dog" />
      )}
      
      </div>
    </div>
  );
}

export default App;


//<img className="App-img" src={!isLoading && dogs.message} width="250px" height="250px"  alt="dog" />