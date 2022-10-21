import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './Home/Home.css'
import { useContext } from 'react'
import {UserContext} from '../App'

function Home() {
  const context = useContext(UserContext)
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    getPokemon()
  }, [])

  const getPokemon = () => {
    const randomNumber = () => {
      return Math.floor(Math.random() * 100) + 1
    }
    axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNumber()}`).then(result => {
      const list = result.data
      setPokemon(list)
    })
  }

  const pokemonLog = () => {
    return (
      <div>
      <h1>Home</h1>
      {pokemon ?
        <div className="text-center">
          <h3>{'Name: ' + pokemon.name}</h3>
          <h3>{'Height: ' + pokemon.height}</h3>
          <h3>{'Weight: ' + pokemon.weight}</h3>
          <h3>{'Type: ' + pokemon.types[0].type.name}</h3>
          <button onClick={getPokemon}>Random Pokemon</button>
        </div>
        : null}

    </div>
    )
  }


  return (
    <div>
      {
        context.Log ? pokemonLog() : <p>Vous etes pas connecter </p>
      }
    </div>
  )
}

export default Home 