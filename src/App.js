import React,{useState,useEffect} from 'react';
import './App.css';
import Form from './form';
import Todolist from './todolist';
function App() {

  const [inputText,setInput]=useState("");
  const [todos,setTodos]=useState([]);
  const [status,setStatus]=useState("All");
  const [filtered,setFiltered]=useState([]);




const handleFilter=()=>{
  switch(status){
    case 'Completed':
      setFiltered(todos.filter((item)=>{
      
        return item.completed!==false;
      
      }))
       break;
      case 'UnCompleted':
        setFiltered(todos.filter((item)=>{
        
               return item.completed!==true;
          
        }))
        break;

        default:
          setFiltered(todos)
  }
}

const saveLocal=()=>{
  localStorage.setItem("todos",JSON.stringify(todos));
}
const getLocal=()=>{
if(localStorage.getItem("todos")===null){
  localStorage.setItem("todos",JSON.stringify([]));
}
else{
  let localTodo=JSON.parse(localStorage.getItem("todos"));
  setTodos(localTodo);
}
}



useEffect(()=>{
getLocal();
},[]);
useEffect(()=>{
  handleFilter();
  saveLocal();
},[todos,status])

  return (
    <div className="App">
<header>Shashank's Todo App</header>
<Form setStatus={setStatus} todos={todos} setTodos={setTodos} setInput={setInput} inputText={inputText}/>
<Todolist filtered={filtered} todos={todos} setTodos={setTodos}/>
      </div>
  );
}

export default App;
