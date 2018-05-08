import Vuex from 'vuex'
import Vue from 'vue'
import Actions from './Action'
import Mutations from './Mutations'
import Getters from './Getter'
import State from './State'

Vue.use(Vuex)
export default new Vuex.Store({
  state: State,
  mutations: Mutations,
  actions: Actions,
  getters: Getters
})
