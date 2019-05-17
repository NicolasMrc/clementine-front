export default {

  /**
   * set the list of todos
   * @param state
   * @param todos
   */
  set(state, todos){
    state.list = todos
  },

  /**
   * delete a todo from the list
   * @param state
   * @param todo
   */
  delete(state, id){
    const index = state.list.map(t => t.id).indexOf(id)
    if(index !== -1){
      state.list.splice(index, 1)
    }
  },

  /**
   * update a todo contained in the list
   * @param state
   * @param todo
   */
  update(state, todo){
    const index = state.list.map(t => t.id).indexOf(todo.id)
    if(index !== -1){
      state.list[index].title = todo.title
      state.list[index].completed = todo.completed
    }
  },

  /**
   * add the new todo at the begining of the list
   * @param state
   * @param todo
   */
  save(state, todo){
    state.list.unshift(todo)
  }
}
