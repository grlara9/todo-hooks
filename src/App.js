import React, {useReducer, useState} from 'react'
import Todos from './components/Todos'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import './App.css'

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
      return todos.map(todo =>{
        if(todo.id === action.payload.id){
          return {... todo, complete: !todo.complete}
        }
      })
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
    <div className="container">
      <h2>My To-Do-list</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name}  placeholder="Todo"
          onMouseOver={({target})=>target.style.color='darkgray'} 
          onMouseOut={({target})=>target.style.color='black'}
        
        onChange= {e => setName(e.target.value)}  />
    <button type="submit"><AddCircleOutlineOutlinedIcon style={{fontSize: 22}}/> </button>
      </form>
  
      {todos.map(todo => {
        return (
          <div className="todos">
          <Todos 
            id={todo.id}
            name={todo.name}
            complete={todo.complete}
            dispatch={dispatch}
          />
        </div>
        )
      })}
      
    </div>
  );
}

export default App;
