import {useState} from "react"

function Personne () {

    const [perso, setPerso] = useState("")

    const changeNom = (event) => {
        setPerso(event.target.value)
    }
	return (
	<div>
	<h1>Bonjour Personne</h1>
    <p>{perso}</p>
    <input type="text" onChange={changeNom}></input>
	</div>	
	)
}

export default Personne