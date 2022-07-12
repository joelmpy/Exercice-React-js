import './App.css';
import Box from './components/Box.jsx';
<<<<<<< HEAD
import {useState} from 'react';
=======
>>>>>>> 5d40c9887e9dcc7ff19b5fc3e0cf54fda9e5a840

function App() {

  const temMin = -20;
  const tempMax = 40;
  const heartMin = 80;
  const heartMax = 180;
  const stepsMin = 0;
  const stepsMax = 50000

  const [water, setWater] = useState(0);
  const [heart, setHeart] = useState(120);
  const [temperature, setTemperature] = useState(-10);
  const [steps, setSteps] = useState(3000);
  
  return (
    <div className="container-fluid">
      <div className="row">
        <Box icon = "local_drink" color = "#3A85FF" value = "1.5" unit= "L" />
        <Box icon = "directions_walk"  color = "black" value = "3000" unit = "steps"/>
        <Box icon = "favorite" color = "red" value = "120" unit = "bpm"/>
        <Box icon = "wb_sunny" color = "yellow" value = "-10" unit = "°C"/>
      </div>
     <h1 className="text-primary"> Hello !</h1>
    </div>
  );
}

export default App;
