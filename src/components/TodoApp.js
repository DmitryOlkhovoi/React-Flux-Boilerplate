import React from 'react';
import TodoStore from '../stores/TodoStore';
import TodoCreator from './TodoCreator';

export default React.createClass({
  getTodoState() {
    return {todos: TodoStore.getAll()};
  },

  getInitialState() {
    return this.getTodoState();
  },

  componentDidMount() {
    TodoStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    TodoStore.removeChangeListener(this._onChange);
  },

  render(){
    let getTodos = () => {
      return this.state.todos.map((todo, index) => {
        return <li key={todo.id}>{todo.text}</li>;
      });
    };
    return (
      <div>
        <ul>
            {getTodos()}
        </ul>
        <TodoCreator/>
      </div>
    );
  },

  _onChange() {
    this.setState(this.getTodoState());
  }
});
