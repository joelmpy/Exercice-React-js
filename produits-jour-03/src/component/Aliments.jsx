import { useState } from "react";

function Aliments () {

    const [food, setFood] = useState(['riz', "pates", "salade", "tomates"])

	return (
	<div>
	<h1>Bonjour Aliments</h1>
    {
        food.length === 0 ? <p>La liste est vide</p> : 
        food.map((foods) => {
            return (
              <ul>
                <li>{foods}</li>     
             </ul>
            )
        })
    }
	</div>	
	)
}

export default Aliments