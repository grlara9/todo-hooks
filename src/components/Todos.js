import React from 'react'
import {ACTIONS } from '../App'
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
import './Todos.css';

const Todos =({todo, dispatch, id, name, complete})=> {

  
    return(
        <div className="todo">
             <span style={{textDecoration : complete ? 'line-through'  : '', color: complete ? '#AAA': '#000'}}>{name}</span>
                
               <CheckCircleOutlineOutlinedIcon style={{color: 'green', float:'right', paddingLeft: '2px', fontSize:'1.2em'}} 
               onClick={()=> dispatch({ type: ACTIONS.TOOGLE_TODO, payload:{id: id} })}  
               onMouseOver={({target})=>target.style.transform='scale(1.1)'} 
               onMouseOut={({target})=>target.style.transform='scale(1)'}
               /> 

                <HighlightOffOutlinedIcon style={{color: 'red', float:'right', fontSize:'1.2em'}} 
                 onMouseOver={({target})=>target.style.transform='scale(1.1)'} 
                 onMouseOut={({target})=>target.style.transform='scale(1)'}
                onClick={()=> dispatch({ type: ACTIONS.DELETE_TODO, payload:{id: id} })} /> 
              
                
        </div>
    )
}

export default Todos