const produits = {id :1, title : "", description : "", price: 0}
function Produits () {
	return (
	<div>
	<h1>Bonjour</h1>
    {
        produits ? <p>la liste des produits est vide</p>
        :
        <table>
        <thead>
            <tr>
                <th colspan="2">The table header</th>
            </tr>
        </thead>
        <tbody>
            {
                produits.map( (items) => {

                <tr>
                    <td>{items.id}</td>
                    <td>{items.title}</td>
                    <td>{items.id}</td>
                </tr>
                }
                    )
            }
        </tbody>
    </table>
    }
	</div>	
	)
}

export default Produits