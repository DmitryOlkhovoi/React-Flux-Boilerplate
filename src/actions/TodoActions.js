import AppDispatcher from '../dispatcher/AppDispatcher';
import TodoConstants from '../constants/TodoConstants';

 export default {

  /**
   * @param  {string} text
   */
  create(text){
    AppDispatcher.dispatch({
      actionType: TodoConstants.TODO_CREATE,
      text
    });
  }
};
