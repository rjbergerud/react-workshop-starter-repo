import React from 'react';
import AppHeader from './app-header';
import TodoList from './todo-list';
import TodoNew from './todo-new';

export default React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {task: "type some todos here", status: true},
        {task: "more todos", status: false} 
      ]
    }
  },
  
  addTodo: function (task) {
    var todos = this.state.todos;
    todos.push({task: task, status: false});
    this.setState({
      todos: todos
    });
    //
  },
  
  toggleTodo: function(index) {
      console.log('Changing this index: ' + index)
      var todos = this.state.todos;
      todos[index].status = !todos[index].status;
      this.setState({
        todos: todos
      })
  },
  
  render: function () {
    return (
      <div>
        Welcome to React!
        <AppHeader 
          title="Todos" 
          tagline="Get 'em todone"
        />
         <TodoList todos={this.state.todos} onTodoClick={this.toggleTodo}/>
         <TodoNew onSubmit={this.addTodo} />
      </div>
    );
  }
});
