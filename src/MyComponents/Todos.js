import React from 'react'
import {TodoItem} from './TodoItem'

export const Todos = (props) => {  // From App.js todos will pass through props
    return (
        <div className="container">
            <h3 className="my-3">Todos List</h3>
            {props.todos.length === 0 ? "No Todos to display": 
            props.todos.map((todo)=>{
                return <TodoItem todo={todo} key={props.todos.sno} onDelete={props.onDelete} />
            })
            }
        </div>
    )
}
