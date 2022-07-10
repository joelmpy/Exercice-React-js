import './App.css';
import {useState} from "react"
import Counter from './component/Counter';

function App() {

    const [count, setCount] = useState(0);

    const incrementCount = () => {
      if(count === 10){
        return;
      }
      setCount(count + 1)
    }

    const decrementCount = () => {
      if (count === 0 ){
        return;
      }
      setCount(count - 1)
    }
  return (
    <div className="App">
    <h1>Counter</h1>
    <div className='bloc'>
      <Counter name = {count} addFunction = {incrementCount} subtractFunction = {decrementCount}/>
    </div>
    </div>
  );
}

export default App;
