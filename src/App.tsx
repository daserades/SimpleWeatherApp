
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import "./App.css";
import Weather from "./components/Weather";
import { actionweathercreators } from "./state";
import { State } from "./state/reducers";


function App() {

  const weather = useSelector((state:State) => state.weather)
  const dispatch = useDispatch()
  const {getWeather}= bindActionCreators(actionweathercreators,dispatch)
  const [state, setstate] = useState('')



  const handlechange:React.ChangeEventHandler<HTMLInputElement> =(e)=>{
       setstate(e.target.value)
  }
  const handleButton=()=>{
     getWeather(state)
  }


  return <div className="App">
   

   <input type="text" onChange={handlechange} />
     
     <button onClick={handleButton}>search</button>
        
        <Weather weather={weather} />




  </div>;
}

export default App;
