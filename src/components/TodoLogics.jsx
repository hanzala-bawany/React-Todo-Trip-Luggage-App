// import React from 'react'
import { SingleTodo } from "./SingleTodo"
import "./TodoLogics.css"


export const TodoLogics = ({ todoItemsData, deleteFunc, clearFunc, checkedItemsFunc }) => {

    
    const clearTodos = () => {
        console.log("clear odo chala")
    }


    return (
        <div id="todoLogicsContainer">
            <div id="todoLogics">

                {
                    todoItemsData.map((item, index) => {
                        return <SingleTodo
                            checkedItemsFunc={checkedItemsFunc}
                            deleteFunc={deleteFunc}
                            id={index} key={index}
                            todoData={item} />
                    })
                }

            </div>

            <div id="sortAndClrear">
                <select id="sortList">
                    <option value="sort by input order">sort by input order</option>
                    <option value="sort by description">sort by description</option>
                    <option value="sort by packed status">sort by packed status</option>
                </select>

                <button onClick={clearFunc} id="clearList">Clear List</button>
            </div>

        </div>
    )
}
