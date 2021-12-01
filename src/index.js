import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

reportWebVitals();

const datos = [
  {
    id: 1,
    title: "Iron Man",
    year: 2008
  }
]

const getDatos = () => {
  return new Promise ((resolve, reject) => {

    if(datos.length === 0) {
      reject( new Error ("No existen datos"))
    }
    
    setTimeout( () => { resolve (datos) } , 1500)

  })
}

async function fetchingData () {
  
  try {
    const datosFetched = await getDatos()
    console.log(datosFetched)
  } catch (err) {
    console.log(err.message)
  }
}

fetchingData()

 
//* {
//*   id: 1,
//*   title: "Iron Man",
//*   year: 2008
//* }