import './App.css';
import Box from './components/Box.jsx';
import {useState} from 'react';

function App() {

  const temMin = -20;
  const tempMax = 40;
  const heartMin = 80;
  const heartMax = 180;
  const stepsMin = 0;
  const stepsMax = 50000

  const onHeartChange = (event) => {
    setHeart(event.target.value)
    calculateWater()
  }

  const onStepsChange = (event) => {
    setSteps(event.target.value)
    calculateWater()
  }

  const ontempChange = (event) => {
    setTemperature(event.target.value)
    calculateWater()
  }

  const [water, setWater] = useState(1.5);
  const [heart, setHeart] = useState(120);
  const [temperature, setTemperature] = useState(-10);
  const [steps, setSteps] = useState(3000);
  
  const calculateWater = () => {
    let result = 1.5
    if (temperature > 20){
      result += (temperature - 20) * 0.02
    }

    if(heart > 120){

      result += (heart - 120) * 0.0008
    }
    

    if (steps > 10000){
      result += (steps - 10000) * 0.00002
    }
    setWater(result.toFixed(1))
  }

  
  return (
    <div className="container-fluid">
      <div className="row">
        <Box icon = "local_drink" color = "#3A85FF" value = {water} unit= "L" />
        <Box icon = "directions_walk"  color = "black" value = {steps} unit = "steps" min = {stepsMin} max = {stepsMax} onChange = {onStepsChange}/>
        <Box icon = "favorite" color = "red" value = {heart} unit = "bpm" min = {heartMin} max = {heartMax} onChange = {onHeartChange}/>
        <Box icon = "wb_sunny" color = "yellow" value = {temperature} unit = "°C" min = {temMin} max = {tempMax} onChange = {ontempChange}/>
      </div>
     <h1 className="text-primary"> Hello !</h1>
    </div>
  );
}

export default App;
