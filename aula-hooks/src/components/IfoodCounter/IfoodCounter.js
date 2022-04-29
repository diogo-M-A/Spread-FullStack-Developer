import React from 'react'
import { useState, useEffect } from 'react'
import '../IfoodCounter/IfoodCounter.css'


export default function IfoodCounter() {
  const [value, setValue] = useState(1)
  useEffect(()=>{
    document.getElementById('moeda').innerHTML = 2*value
  }, [value])

  function up(){
    setValue(value + 1)
  }

  function down(){
    if(value>0){
      setValue(value - 1)
    }
  }

  return (
    <div>
      <button onClick={down}>-</button> 
      {value}
      <button onClick={up}>+</button>
      <button id='moeda'>12,00</button>
    </div>
  )
}
