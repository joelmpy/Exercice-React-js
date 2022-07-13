import img from '../assets/poids.jpg'

function Title (props) {
	return (
	<div>
	<h1>{props.titre}Title</h1>
    <p>{props.message} <hr/>Bonjour ici le nom de titre</p>
    <img src={img} style={{height : "200px", width : "200px"}}></img>
	</div>	
	)
}

export default Title