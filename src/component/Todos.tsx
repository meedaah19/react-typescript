import React from 'react';
import classes from './Todos.module.css';

import TodoItem from './TodoItem';

import Todo from '../models/todo';

const Todos: React.FC<{items: Todo[]; onRomoveTodo: (id: string) => void }> = (props) => {
    return (
        <ul className={classes.todos}>
            {props.items.map((item)=> (
                <TodoItem key={item.id} text={item.text} onRemoveTodo={props.onRomoveTodo.bind(null, item.id)}/>
))}
        </ul>
    );
};

export default Todos;