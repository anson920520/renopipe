import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		//baseURL: "https://renopipe.co/supervisor/",       // 需要token
		baseURL: "http://localhost:8080/",             // 无需token
		//baseURL: "https://renopipe.co/",             // 无需token
		site: {},
	},
	mutations:{
		setState (state,data) {
			state[data.key] = data.value
		}
	}
})

export default store