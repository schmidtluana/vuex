import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    veiculos: [  
  ]
  },
  mutations: {
    cadastrarVeiculo(state,veiculo){
      state.veiculos.push(veiculo)
    }
  
  },
  actions: {
  },
  modules: {
  }
})
