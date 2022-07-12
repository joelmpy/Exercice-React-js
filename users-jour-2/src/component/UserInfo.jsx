import React from "react";

function UserInfo (props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <button onClick={props.addFunction}>+</button>
            <button onClick={props.subtractFunction}>-</button>
            <button onClick={props.resetFunction}>Reset</button>
        </div>
    )
}

export default UserInfo