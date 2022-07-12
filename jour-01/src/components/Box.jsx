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
           {

            props.icon === "local_drink" ? null : 
           <input type="range" min={props.min} max={props.max} value={props.value} onChange ={props.onChange} step = {props.icon === "directions_walk" ?"1000" : null}/> 
           }
        </div>
    )
}

export default Box