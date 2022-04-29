import React from 'react'
import { useState } from 'react'
import '../IfoodCounter/IfoodCounter.css'


export default function IfoodCounter() {
  const [value, setValue] = useState(1)

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
    </div>
  )
}
