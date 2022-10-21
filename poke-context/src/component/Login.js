import React from 'react'
import './Login/Login.css'
import { useForm } from "react-hook-form";
import {useContext} from 'react'
import { UserContext } from "../App"

function Login() {

  const { register, handleSubmit, formState: { errors } } = useForm()

  const context = useContext(UserContext);

  const onSubmit = (data) => { 
    console.log(data) 
    if(context.Log === true){
      console.log('deconnexion')
      context.setAuth(false)
    }else{
      console.log('connexion')
      context.setAuth(true)
    }
  }

  return (
    <div class="login-section">
      <div className="login-form">
        <div className="login-top">
          <h3>Connexion</h3>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="form-horizontal">

          <input {...register('username', { required: true, maxLength: 15 })} placeholder="Username" />
          <span> {errors.Username?.type ==='required' && "Entrez votre nom d'utilisateur"} </span>
          <span> {errors.Username?.type ==='maxLength' && "Attention! 15 caractère max"} </span>

          <input {...register('password', { required: true, minLength: 6 })} placeholder="Password" />
          <span> {errors.Password?.type ==='required' && "Entrez votre mot de passe"} </span>
          <span> {errors.Password?.type ==='minLength' && "Entrez 6 caractère min."} </span>

          <div className='button-submit'>
            {
              context.Log === false ? <button type="submit" className="bouton-ok">Se Connecter</button> : null
            }
           {context.Log === true ? <button className="button" onClick={onSubmit}>SE Deconnecter</button>:null}
          </div>
        </form>
        
        <p>Vous avez perdu votre mot de passe ? <span>Mot de passe oublié</span></p>
      </div>
    </div>
  )
}

export default Login