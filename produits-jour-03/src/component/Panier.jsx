import {useState} from 'react'

const productsList = [
    {id: 1, title: 'Matrix', description: 'Action', price: 20},
    {id: 1, title: 'Avatar', description: 'Aventure', price: 1},
    {id: 1, title: 'Breaking bad', description: 'Serie', price: 5},
]
function Panier () {

    const [panier, setPanier] = useState([{id: 1, title: '', price: 0.0, quantity: 0}])
	return (

	<div>
	<h1>Bonjour Panier</h1>
    <table>
        <thead>
            <tr>
                <th>LE PANIER</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{}</td>
                <td>{}</td>
                <td>{}</td>
            </tr>
        </tbody>
    </table>
	</div>	
	)
}

export default Panier