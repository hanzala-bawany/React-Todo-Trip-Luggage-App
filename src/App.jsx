import { NavBar } from './components/navBar'
import { InputLogics } from './components/InputLogics'
import { TodoLogics } from './components/TodoLogics'
import { Footer } from './components/Footer'
import { useState } from "react";
import './App.css'

function App() {

  const [todoItems, setTodoItems] = useState([])
  const todosLength = todoItems.length

  const [checkedTodoItems, setCheckedTodoItems] = useState([])
  console.log(checkedTodoItems, "--> checked items");
  const checkedTodosLengh = checkedTodoItems.length


  // addTodoFunctionality
  const todoHandler = (newTodoItem) => {
    const todoItemsNew = [...todoItems, newTodoItem]
    setTodoItems(todoItemsNew)
  }

  // deleteTodoFunctuionality
  const deleteTodo = (e) => {

    const deletedTodo = e.target.parentElement.parentElement
    const id = Number(deletedTodo.id);  

    const todoItemsData = [...todoItems]
    const todoItemsNewData = todoItemsData.filter((item, index) => {
      if (index !== id) return item
    })

    setTodoItems(todoItemsNewData)

    const checkedUpdatedTodos = todoItemsNewData.filter((item) => item.checked)
    setCheckedTodoItems(checkedUpdatedTodos)

  }

  // clearTodosFunctionality
  const clearTodos = () => {
    setTodoItems([])
    setCheckedTodoItems([])
  }

  // checkedItemswFunctionality 

  const checkedItem = (e) => {
    const checkedTodo = e.target.parentElement.parentElement;
    const id = Number(checkedTodo.id);

    const updatedItems = todoItems.map((item, index) => {
      if (index === id) {
        const update = { ...item, checked: !item.checked }
        return update
      }
      return item
    })

    setTodoItems(updatedItems)

    const checkedItems = updatedItems.filter((item, index) => item.checked )

    setCheckedTodoItems(checkedItems)
  }



  return (
    <>
      <NavBar />

      <InputLogics todoHandler={todoHandler} />

      <TodoLogics checkedItemsFunc={checkedItem} clearFunc={clearTodos} deleteFunc={deleteTodo} todoItemsData={todoItems} />

      <Footer checkedTodosLengh={checkedTodosLengh} todosLength={todosLength} />

    </>
  )
}

export default App
