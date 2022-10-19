import React from 'react'
import { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import Item from './Item'

function Form() {

const [dataArr, setDataArr] = useState([
    {nom : 'joel', id : uuidv4()},
    {nom : 'jeff', id : uuidv4()},
])

const [stateInput, setStateInput] = useState('');
const [error, seterror] = useState(false)


    const deleteElement = id => {
        const filterDelete = dataArr.filter(items => {
            return items.id !== id
        })
        setDataArr(filterDelete)
    }

    const linkInput = (e) => {
        setStateInput(e.target.value)
    }


    const addTodo = (e) => {

        e.preventDefault();
        if (stateInput){
            seterror(false)
            const newArr = [...dataArr]
    
            const newTodo = {
                nom:stateInput,
                id:uuidv4()
            };
            console.log(newTodo)
    
            newArr.push(newTodo)
            setDataArr(newArr)
    
            setStateInput('')
        }else (
            seterror(true)
        )
    }


    return (
        <div>
            <h1>Bonjour Forum </h1>
            <dis className="m-auto px-4 col-10 col-sm-10 col-lg-6"></dis>
            <form onSubmit={addTodo} className='mb-3'>
                <label htmlFor="todo" className='form-label mt-3'>Chose a faire</label>
                <input onChange={linkInput} value={stateInput}type="text" className="form-control" id='todo' />
                {error ? <p>Aucne champs est rempli</p> : null}
                <button className="mt-2 btn btn-primary">Envoyer</button>
            </form>
            <h2>Liste des choses a faire : </h2>
            <ul className='list-groupe'>
                {dataArr.map((items) => {
                    return (
                        <Item
                         item = {items.nom} 
                         key={items.id}
                         id={items.id}
                         deleteFun={deleteElement}
                         />
                    )
                        
                })}
    
            </ul>
        </div>
    )
}

export default Form