import React from 'react'
import { useState } from 'react'

function Input() {
    const [toggle, setToggle] = useState(true)

    const changeState = () => {
        setToggle(!toggle)
    }

    return (
        <div>
            <div className={toggle ? "box animation" : "box"}></div>
            <button onClick={changeState}>change state</button>
        </div>
    )

}


export default Input