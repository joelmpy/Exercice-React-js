import React from 'react'
import {useState} from 'react'

function State(props) {

    const [items, setItems] = useState('Items state')
    const [inputData, setInputData] = useState();
    const styleTitle = {color : props.func ? 'blue' : 'red'}

    const changeInput = (e) => {
        setInputData(e.target.value)
    }

  return (
    <div>
       <h1>Bonjour ici State</h1>
       <p style={styleTitle}>{props.first}</p>
       <button onClick={() => props.func(items)}>fisrt</button>
       <input type="text" onChange={changeInput} value={inputData} />
    </div>
  )
}

export default State