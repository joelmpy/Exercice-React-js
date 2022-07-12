import "./styles/App.css";
import { useState } from "react";
import UserInfo from "./component/UserInfo";
import Users from "./data/data.json";
import User from "./component/User";

function App() {
  const [count, setCount] = useState(10);


  const obj1 = { a: 1, b: 2 };
  const obj2 = { a: 2, c: 3, d: 4 };
  const obj3 = { ...obj1, ...obj2 };

  console.log(obj3);

  const arr = ["blue", "yellow"];
  const colors = [...arr, "green", "red"];
  console.log(colors);

  const incrementCount = () => {
    if (count === 10) {
      return;
    }
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div>
      <div className="App">
        <h1>Bonjour</h1>
        <div className="bloc">
          <h2>utilisateur</h2>
          <UserInfo
            name={count}
            addFunction={incrementCount}
            subtractFunction={decrementCount}
            resetFunction={resetCount}
          />
        </div>
      </div>
      <div className="bloc-users">
      {
        Users.map( (items, index) => {
          if (index < count){
            return (
              <User items = {items}/>
            )
          }
        })
      }
      </div>
    </div>
  );
}

export default App;
