import React, {useReducer, useState}from 'react'

const ACTIONS ={
ADD_TODO: 'add-todo'
}

//reducer contains all logic for modifying our state
const reducer= (todos, action)=>{
  switch (action.type){
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(todo)]
  }
}

const newTodo = () => {
  return {id: Date.now() , name: todo, completed: false}
}


function App() {

  const [todos, dispatch] = useReducer(reducer, [])
  const [todo, setTodo] = useState('')

console.log("type user", name)
  const handleSubmit =(e)=>{
    e.eventPrevent()
    dispatch({type:ACTIONS.ADD_TODO})
    setTodo('')
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" value={todo} onChange= {e => setTodo(e.target.value)}  />
        <button type="submit">Submit</button>


      
      </form>
    </div>
  );
}

export default App;
