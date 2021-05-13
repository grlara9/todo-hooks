import React from 'react'
import {ACTIONS } from '../App'
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
import './Todos.css';

const Todos =({todo, dispatch, id, name, complete})=> {
    return(
        <div className="todo">
            <span style={{textDecoration : complete ? 'line-through'  : '', color: complete ? '#AAA': '#000'}}
           >

            {name}
            </span>
            
                <CheckCircleOutlineOutlinedIcon style={{fontSize:'16px'}} onClick={()=> dispatch({ type: ACTIONS.TOOGLE_TODO, payload:{id: id} })}  /> 

                <HighlightOffOutlinedIcon  onClick={()=> dispatch({ type: ACTIONS.DELETE_TODO, payload:{id: id} })} /> 
               
        </div>
    )
}

export default Todos