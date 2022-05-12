import React, { useReducer, useState } from 'react'

// En este caso vamos a alterar dos estados, por lo cual en lugar de usar dos useState, vamos a usar useReducer
const ReducerTutorial = () => {

    //El primer argumento es el estado actual del objeto, y el segundo es la accion que en base al tipo tomara la decision
    //Luego vamos al return para implementar esta funcion en el boton
    const reducer = (state, action) => {
        switch(action.type){
            case "incrementCount":
                return {...state, count: state.count + 1}
            case "toggleShowText":
                return {...state, showText: !state.showText}
            default:
                throw new Error("Invalid action type")
        }

    }

    //Para entender la explicacion se debe leer primero de esta linea hacia abajo
    //state va a representar un objeto en este caso porque vamos a alterar dos estados (un contador y un texto), 
    //sin embargo, state podria ser una variable. El primer parametro que recibe useReducer es la funcion reducer,
    // y el segundo es el estado inicial de state. Ahora debe se crea la funcion reducer en la linea 7
    const [state, dispatch] = useReducer(reducer, {count: 0, showText: true}) 


    //Mostramos el conteo (state.count), le decimos al boton que cada vez que le den click ejecute el dispatch de tipo
    // incrementCount y tambien toggleShowText. Y ya estaria el ejercicio completado
  return (
    <div style={{textAlign: "center"}}>
      <h1>{state.count}</h1>
      <button onClick={() => {
          dispatch({ type: "incrementCount" })
          dispatch({ type: "toggleShowText" })
          }} >Click Here</button>
      {state.showText && <p> This is a text </p>}
    </div>
  )
}

export default ReducerTutorial
