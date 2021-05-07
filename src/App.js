import React, {useReducer, useState} from 'react'
import Todos from './components/Todos'

export const ACTIONS ={
ADD_TODO: 'add-todo',
TOOGLE_TODO: 'toogle-todo',
DELETE_TODO: 'delete-todo'
}

//reducer contains all logic for modifying our state
const reducer= (todos, action)=>{
  switch (action.type){
    case ACTIONS.ADD_TODO:
     return [...todos, newTodo(action.payload.name)]
     case ACTIONS.TOOGLE_TODO: 

     case ACTIONS.DELETE_TODO:
       return todos.filter(todo => todo.id !== action.payload.id)
      default:
       return todos
  }
}

const newTodo = (name) => {
  return { id: Date.now() , 
            name: name, 
            complete: false}
        }


function App() {
  const [name, setName] = useState('')
  const [todos, dispatch] = useReducer(reducer, [])
  
console.log("hola", name)

  const handleSubmit =(e)=>{
    e.preventDefault()
    dispatch({ type: ACTIONS.ADD_TODO, payload: {name: name}})
    setName('')
  }
  


  console.log(todos)
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} 
        onChange= {e => setName(e.target.value)}  />
      </form>

      {todos.map(todo => {
        return (
          
          <Todos id={todo.id}
          name={todo.name}
          dispatch={dispatch}
          />
        )
      })}
    </div>
  );
}

export default App;
