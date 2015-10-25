import React from 'react';
import TodoActions from '../actions/TodoActions';

export default React.createClass({
  onAdd(){
    TodoActions.create(this.refs.input.value);
    this.refs.input.value = '';
  },

  render(){
    return(
      <div>
        <div className="form-group">
          <input ref="input" className="form-control" />
        </div>
        <button onClick={this.onAdd} className="btn btn-success">Add</button>
      </div>
    );
  }
});
