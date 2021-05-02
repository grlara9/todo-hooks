import React, {useReducer, useState}from 'react'

const ACTIONS ={
ADD_TODO: 'add-todo'
}

const reducer= (state, action)=>{

}

function App() {

  const [todos, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState('')

console.log("type user", name)
  const handleSubmit =(e)=>{
    e.eventPrevent()
    dispatch({type:ACTIONS.ADD_TODO})
    setName('')
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange= {e => setName(e.target.value)}  />
        <button type="submit">Submit</button>

      
      </form>
    </div>
  );
}

export default App;
