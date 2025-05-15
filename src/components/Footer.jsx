import "./Footer.css" 

export const Footer = ({todosLength,checkedTodosLengh}) => {
  
    const percentage = (checkedTodosLengh / todosLength) * 100
    console.log(percentage,"--> percentage");
    
  
    return (
        <div style={{color: percentage ? "green" : "red" }} id="footer">
            <h2>you have {todosLength} items on your list and you already packed {checkedTodosLengh} items &#40; {percentage || 0}% &#41; </h2>
        </div>
  )
}

