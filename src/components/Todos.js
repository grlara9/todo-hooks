import React from 'react'
import {ACTIONS } from '../App'
const Todos =({todo, dispatch, id, name, complete})=> {
    return(
        <div>
            <span style={{color : complete ? '#AAA' : '#000'}}>

            {name}
            </span>
                <button onClick={()=> dispatch({ type: ACTIONS.TOOGLE_TODO, payload:{id: id} })}> Completed </button>

                <button onClick={()=> dispatch({ type: ACTIONS.DELETE_TODO, payload:{id: id} })}> Deleted </button>
        </div>
    )
}

export default Todos