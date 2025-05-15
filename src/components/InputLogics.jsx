import "./InputLogics.css"
import { useState } from "react";


export const InputLogics = ({todoHandler}) => {

  const [quantity, setQuantity] = useState("")
  const [item, setItem] = useState("")

  // quantityHandler
  function quantityHandler(inputValue) {
    console.log(inputValue, "---> quantity inputs");
    setQuantity(inputValue)
  }

  // itemHandler
  function itemHandler(inputValue) {
    console.log(inputValue, "---> item inputs");
    setItem(inputValue)
  }

  function AddTodo() {
    console.log(quantity, item);

    todoHandler({quantity,item,checked: false})

    setItem("")
    setQuantity("")
  }


  return (

    <div id="inputSection">
      <h2>what do you need for your 😇 trip ?</h2>

      <div id="inputs">
        <input
          onChange={(e) => quantityHandler(e.target.value)}
          className="number"
          type="number"
          min="0"
          placeholder="00"
          onKeyDown={(e) => { if (e.key === "Enter") AddTodo() }}
          value={quantity} />

        <input
          onChange={(e) => itemHandler(e.target.value)}
          className="text"
          placeholder="luggage item"
          type="text"
          onKeyDown={(e) => { if (e.key === "Enter") AddTodo() }}
          value={item} />
      </div>

      <button onClick={AddTodo} id="AddBtn">ADD</button>
    </div>

  )
}

