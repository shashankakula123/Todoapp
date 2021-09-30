const Todo = ({text,setTodos,todos,todo}) => {

    const handleDelete=()=>{
        setTodos(todos.filter((el)=>el.id!==todo.id))
    }
   const handleTick=()=>{
        setTodos(todos.map((item)=>{
            if(item.id===todo.id){
                return {...item,completed:!item.completed}
            }
            return item
        }))

   }
    return (  
        <div className="todo">
        <li className={todo.completed?"completed":""}>{text}</li>
            <button>
            <i  className="fas fa-check-square" onClick={handleTick}></i>
            </button>
            <button onClick={handleDelete}>
            <i className="fas fa-trash"></i>
            </button>
            </div>
    );
}
 
export default Todo;