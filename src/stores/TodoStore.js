import { EventEmitter} from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import TodoConstants from '../constants/TodoConstants';

let CHANGE_EVENT = 'change';

let _todos = [];

/**
 * Create a TODO item.
 * @param  {string} text The content of the TODO
 */
function create(text) {
  // Hand waving here -- not showing how this interacts with XHR or persistent
  // server-side storage.
  // Using the current timestamp + random number in place of a real id.
  let id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  _todos.push({
    id,
    text
  });
}

let TodoStore = Object.assign({}, EventEmitter.prototype, {
  getAll() {
    return _todos;
  },

  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register(function(action) {
  let text;

  switch (action.actionType) {
    case TodoConstants.TODO_CREATE:
      {
        text = action.text.trim();
        if (text !== '') {
          create(text);
          TodoStore.emitChange();
        }
        break;
      }
  }
});

export default TodoStore;
