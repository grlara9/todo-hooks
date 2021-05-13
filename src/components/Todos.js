import React from 'react'
import {ACTIONS } from '../App'
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
import './Todos.css';

const Todos =({todo, dispatch, id, name, complete})=> {
    return(
        <div className="todo">
         
            
                <CheckCircleOutlineOutlinedIcon style={{color: 'green'}} onClick={()=> dispatch({ type: ACTIONS.TOOGLE_TODO, payload:{id: id} })}  /> 

                <HighlightOffOutlinedIcon style={{color: 'red'}}  onClick={()=> dispatch({ type: ACTIONS.DELETE_TODO, payload:{id: id} })} /> 
              
                <span style={{textDecoration : complete ? 'line-through'  : '', color: complete ? '#AAA': '#000'}}>

{name}
</span>
        </div>
    )
}

export default Todos