const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/todos/'

export default {

  /**
   * call the api to fetch all todos
   * @param commit
   * @returns {Promise<void>}
   */
  async getAll({commit}){
    const data = await this.$axios.$get(API_ENDPOINT)
    commit('set', data)
  },

  /**
   * call the api to get one todo by id
   * @param commit
   * @param id
   * @returns {Promise<void>}
   */
  async getOneById({commit}, id){
    const data = await this.$axios.$get(API_ENDPOINT + 'id')
    commit('select', data)
  },

  /**
   * call the api to delete one todo by id
   * @param commit
   * @param id
   * @returns {Promise<void>}
   */
  async delete({commit}, id){
    const data = await this.$axios.$delete(API_ENDPOINT + 'id')
    commit('delete', data)
  },

  /**
   * call the api to update one todo by id
   * @param commit
   * @param todo
   * @returns {Promise<void>}
   */
  async update({commit}, todo){
    const data = await this.$axios.$put(API_ENDPOINT + todo.id, todo)
    commit('update', data)
  },

  /**
   * call the api to save a new todo
   * @param commit
   * @param todo
   * @returns {Promise<void>}
   */
  async save({commit}, todo){
    const data = await this.$axios.$post(API_ENDPOINT, todo)
    commit('save', data)
  },
}
