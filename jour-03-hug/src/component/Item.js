import React from 'react'
import {useState} from 'react'
import State from './State';

function Item() {

    const [count, setCount] = useState(0);
    const [perso, setPerso] = useState("hello");

    const incremente = () => {
        if(count >= 10){
            return;
        }else (
            setCount(count + 1)
        )
    }

    const decremente = () => {
        if(count === 0){
            return;
        }else(
            setCount(count - 1)
        )
    }

    const stop = () => {
        setCount(0)
    }

    const styleButton = {backgroundColor : count >= 1 ? 'green' : 'red'}

    const changePerso = (data) => {
        console.log(data)
        setPerso(data)
    }


  return (
    <div>
        <p style={styleButton}>{count}</p>
        <button onClick={incremente}>
            +
        </button>
        <button onClick={decremente}>
            -
        </button>
        <button onClick={stop}>
            stop
        </button>
        <State func = {changePerso} first = {perso}/>
    </div>
  )
}

export default Item