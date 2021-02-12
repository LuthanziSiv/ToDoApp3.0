
import './App.css';
import {useState} from 'react'



function App() {
  // set the state varialbe of the todo

  const [todos, setTodos] = useState([
    {
      text: "go water the grass",
      onCompleted: false
    },
    {
      text:"Feed the dogs",
      onCompleted:false
    }
  ]);

  

  function addTodo(text){
    const newTodos = [...todos,{text}];
    setTodos(newTodos);
  }

  

  function completeTodo(index){

    const newTodos = [...todos];

    newTodos[index].onCompleted = true;

    setTodos(newTodos);

  }


  function removeTodo(index) {
    const newTodos = [...todos];

    newTodos.splice(index,1);// i found a way around using

    setTodos(newTodos);
  }

  const Todo=({todo,index,completeTodo,removeTodo})=>{
    return(
    <div className="todo" style={{textDecoration:todo.onCompleted ? 'line-through':""}}>
      {todo.text}
      <div>
      <button onClick={() => completeTodo(index)}>Complete</button>
      <button onClick={() => removeTodo(index)}>x</button>
    </div>
    </div>
  
    );
  }
  
  
  
  function TodoForm({addTodo}){
  
    const [value,setValue] = useState("")
  
  
    function handleSubmit() {
      if(!value) return;
  
      addTodo(value)
  
      setValue("")
    }
  
  
    return(
      <form onSubmit={handleSubmit}>
        <input type="text" className="input" value={value}
        onChange={e => setValue(e.target.value)}/>
      </form>
    )
  }

  return(
    <div className="app">
    <div class="todo-list">
      {todos.map((todo,index) => (
        <Todo
        key={index}
        index={index}
        todo={todo}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        />
      ))}
    </div>
      <TodoForm addTodo={addTodo}/>
    </div>
  );
}


export default App;

