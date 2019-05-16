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
   * getter for the selected todo
   * @param state
   * @returns {default.selected|(function(*))|null|boolean}
   */
  selected(state) {
    return state.selected
  }
}
