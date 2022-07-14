function Button (props) {
	return (
	<div>
	<p>Bonjour ici Button</p>
    <button onClick={props.onClick} >{props.children}</button>
	</div>	
	)
}

export default Button