import React from 'react';
import TodoItem from './todo-item';

export default React.createClass({
    
    render: function () {
        console.log('Todo list rendering');
        var todoItems = this.props.todos.map((todo, index) => {
            console.log(index);
            var onClick = () => {return this.props.onTodoClick(index)}
            return <TodoItem 
                task={todo.task} 
                status={todo.status} 
                onClick={onClick} 
                key={index}
                />
        })
        return (
          <div className={true? "true": "false"}>
          {todoItems}
          </div>  
        );
    }
})