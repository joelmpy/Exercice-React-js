import React from "react";


function Counter (props) {
    return (
        <div>
            <h2 style={{backgroundColor : props.name >= 1 ? "green" : "red"}}>{props.name}</h2>
            <button onClick={props.addFunction}>+</button>
            <button onClick={props.subtractFunction}>-</button>
        </div>
    )
}

export default Counter 