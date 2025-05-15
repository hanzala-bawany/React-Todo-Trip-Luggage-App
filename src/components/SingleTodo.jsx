import close from "../assets/close.webp"
import "./SingleTodo.css"


export const SingleTodo = ({ todoData, id, deleteFunc,checkedItemsFunc }) => {

    const { quantity, item } = todoData
  

    


    return (
        <div className="todo" id={id}>

            <div className="btns">
                <img onClick={deleteFunc} src={close} alt="" />
                <input onClick={checkedItemsFunc} type="checkbox" />
            </div>

            <div className="todoDisplay">{quantity} : {item}</div>

        </div>
    )
}
