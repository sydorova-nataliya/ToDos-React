import React from 'react';

import TodosComponent from "./component";

import './styles.scss';

class Todos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      enterTodo: '',
      todos: [],
    };
  }

  handleEnterTodo = e => {
    this.setState({ enterTodo: e.target.value });
    
  }

  handleAddTodo = () => {
    const { enterTodo, todos } = this.state;
    if(enterTodo!==''){
      const newTodo = {
        id: Math.round(Math.random() * 100),
        value: enterTodo,
        checked: false,
      }
  
      this.setState({
        enterTodo: '',
        todos: [...todos, newTodo]
      })
    }

  }

  handleRemoveTodo = todoId => {
    const { todos } = this.state;

    const updatedTodos = todos.filter(todo => todoId !== todo.id);

    this.setState({
      todos: updatedTodos
    })

  }
  
  handleCheckTodo = (todoId) => {
    const { todos } = this.state;
    const checkedTodos = todos.map(todo => {
      if(todo.id===todoId){
        return {
          ...todo,
          checked:!todo.checked
        }
      }
      return todo;
    });
    
    this.setState({
      todos:checkedTodos
    })

  }

  get isTodosEmpty() {
    const { todos } = this.state;

    return todos.length === 0;
  }

  render = () => {
    const { enterTodo, todos } = this.state;
    return (
      <TodosComponent
        enterTodo={enterTodo}
        todos={todos}
        isTodosEmpty={this.isTodosEmpty}
        onEnterTodo={this.handleEnterTodo}
        onAddTodo={this.handleAddTodo}
        onRemoveTodo={this.handleRemoveTodo}
        onCheckTodo={this.handleCheckTodo}
      />
    )
  }
}

export default Todos;
