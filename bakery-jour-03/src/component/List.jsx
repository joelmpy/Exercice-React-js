function List (props) {

	return (
	<div>
	<p>Bonjour ici List</p>
  
        <ul>
            {
            props.listItems.map((listes, index) => {
                return (
                    <div>
                    <button onClick={() => {
                        props.delete(index)
                    }}>X</button>
                    <li>{listes.name}</li>
                    <li>{listes.price}</li>
                    </div>
                )
               
            })
            }
        </ul>
	</div>	
	)
}

export default List