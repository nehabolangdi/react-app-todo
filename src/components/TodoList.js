import React,{useState} from 'react'
import TodoForm from './TodoForm'

function TodoList() {
    const [todo, setTodos] = useState([]);
    
    const addTodo = todo=>{
        if(!todo.text)
            return;

        const newTodos = [todo,...todo];
    }
  return (
    <div>
        <h1>Whats on you mind</h1>
        <TodoForm></TodoForm>
    </div>
  )
}

export default TodoList