import './App.css';
import Box from './components/Box.jsx';

function App() {

  const temMin = -20;
  const tempMax = 40;
  const heartMin = 80;
  const heartMax = 180;
  const stepsMin = 0;
  const stepsMax = 50000
  return (
    <div className="container-fluid">
      <div className="row">
        <Box icon = "local_drink" color = "#3A85FF" value = "1.5" unit= "L" />
        <Box icon = "directions_walk"  color = "black" value = "3000" unit = "steps"/>
        <Box icon = "favorite" color = "red" value = "120" unit = "bpm"/>
        <Box icon = "wb_sunny" color = "yellow" value = "-10" unit = "°C"/>
        <p>Temperature :  {temMin}</p>
        <p>{tempMax}</p>
        <p> Heart :{heartMin}</p>
        <p>{heartMax}</p>
        <p>Steps : {stepsMin}</p>
        <p>{stepsMax}</p>
      </div>
     <h1 className="text-primary"> Hello !</h1>
    </div>
  );
}

export default App;
