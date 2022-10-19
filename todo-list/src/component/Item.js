import React from 'react'

function Item(props) {
    return (
        <div>
            <li className="border d-flex justifiy-content-between align-items-center p-2 m-2">
                <div className="p-3">{props.item}</div>
                <button className="btn btn-danger p-2 h-50" onClick={() => props.deleteFun(props.id)}>Supprimer</button>
            </li>
        </div>
    )
}

export default Item