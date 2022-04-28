import { useState } from "react"

function SmartCounter(){
  const [quantity, increment] = useState(1)
  return(
    <>
    <h1>{quantity}</h1>
    <button onClick={()=> increment(quantity + 1)}>incrementar</button>
    </>
  )
}

export default SmartCounter