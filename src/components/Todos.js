import React from 'react'
import {ACTIONS } from '../App'
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import './Todos.css';

const Todos =({todo, dispatch, id, name, complete})=> {
    return(
        <div className="todo">
            <span style={{textDecoration : complete ? 'line-through'  : '', color: complete ? '#AAA': '#000'}}
           >

            {name}
            </span>
                <button onClick={()=> dispatch({ type: ACTIONS.TOOGLE_TODO, payload:{id: id} })}> <CheckCircleOutlineOutlinedIcon /> </button>

                <button onClick={()=> dispatch({ type: ACTIONS.DELETE_TODO, payload:{id: id} })}> Deleted </button>
        </div>
    )
}

export default Todos