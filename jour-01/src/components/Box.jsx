import React from "react";
import "../styles/global.css"
function Box (props) {

    const myStyle = {
        color : "black",
        fontSize : 100
    }
    return (
        <div className="box col-sm-3 col-6">
           <span className="material-icons" style={{fontSize : "100px", color: props.color}}>{props.icon}</span>
           <p>{props.value}</p>
           <p>{props.unit}</p>
        </div>
    )
}

export default Box