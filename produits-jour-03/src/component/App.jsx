import Header from "./Header"
import body from "../assets/body.jpg"

function Application () {
	return (
	<div>
	<Header titre = "Bonjour ici l'enfant Header" image = {body} message = "un message pour header" />
	</div>	
	)
}

export default Application