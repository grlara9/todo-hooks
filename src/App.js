import React, {useReducer, useState}from 'react'

const ACTIONS ={

}

const reducer= (state, action)=>{

}

function App() {

  const [todos, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState('')


  const handleSubmit =()=>{

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
