import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		baseURL: "http://119.8.42.40:8080/",
		site: {},
	},
	mutations:{
		setState (state,data) {
			state[data.key] = data.value
		}
	}
})

export default store