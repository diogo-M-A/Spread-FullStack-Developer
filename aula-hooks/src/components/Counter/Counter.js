function counter(){

  let quantity = 2;
  function increment(){
    quantity += 1
    document.getElementById('box').innerHTML = quantity
    console.log(quantity)
  }

  return (
    <>
    <h1 id="box">{quantity}</h1>
    <button onClick={increment}>Incrementar</button>
    </>
  )
}

export default counter;