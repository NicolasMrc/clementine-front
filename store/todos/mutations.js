export default {

  /**
   * add a todo to the list if it's not already in it
   * @param state
   * @param todo
   */
  add(state, todo) {
    const index = state.todos.map(t => t.id).indexOf(todo.id)
    if(index === -1) {
      state.list.push(todo)
    }
  },

  /**
   * set the list of todos
   * @param state
   * @param todos
   */
  set(state, todos){
    state.list = todos
  },

  /**
   * select a todo
   * @param state
   * @param todo
   */
  select(state, todo){
    state.selected = todo
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

  save(state, todo){
    state.list.unshift(todo)
  }
}
