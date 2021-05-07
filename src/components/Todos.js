import React from 'react'
import {ACTIONS } from '../App'
const Todos =({todo, dispatch, id, name})=> {
    return(
        <div>
            {name}
                <button onClick={()=> dispatch({ type: ACTIONS.TOOGLE_TODO, payload:{id: id} })}>Completed </button>
        </div>
    )
}

export default Todos