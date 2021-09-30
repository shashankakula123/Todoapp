

const Form = ({setInput,inputText,todos,setTodos,setStatus}) => {

    const handleChange=(e)=>{
    e.preventDefault();
        setInput(e.target.value);
    }
const handleSubmit=(e)=>{
    e.preventDefault();
    setTodos([...todos,{text:inputText,completed:false,id:Math.random()*10}]);
    setInput("");
}

const handleStatus=(e)=>{
setStatus(e.target.value);
}
    return (  
        <div className="form">

            <form>
                
             <input value={inputText} onChange={handleChange} type="text" />

            <button type="submit" onClick={handleSubmit} >
            <i class="fas fa-plus-square"></i>
            </button>
        


<select onChange={handleStatus}>
    <option value="All">All</option>
    <option value="Completed">Completed</option>
    <option value="UnCompleted">UnCompleted</option>
</select>





                </form>
            </div>
    );
}
 
export default Form;