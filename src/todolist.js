import Todo from "./todo";
const Todolist = ({todos,setTodos,filtered}) => {
    return (  
<div className="todolist">
        <ul>

          {filtered.map((item)=>{
              return <Todo todos={todos} todo={item} setTodos={setTodos} text={item.text} completed={item.completed}/>
          })}



        </ul>
        </div>
    );
}
 
export default Todolist;