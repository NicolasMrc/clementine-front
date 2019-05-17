export default {

  /**
   * getter for the list of todos
   * @param state
   * @returns {Array|HTMLElement}
   */
  todos(state) {
    return state.list
  },

  /**
   * getter for all todos not completed
   * @param state
   * @returns {T[]}
   */
  remaining(state) {
    return state.list.filter(t => !t.completed)
  },
}
