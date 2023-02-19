import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		cars: [
			{ id: 1, brand: 'BMW', age: 2010 },
			{ id: 2, brand: 'Audi', age: 2012 },
			{ id: 3, brand: 'BMW', age: 2016 },
			{ id: 4, brand: 'Audi', age: 2018 },
		],
		filterValues: {
			id: '',
			brand: '',
			age: {
				from: '',
				to: '',
			},
		},
		sortBy: 'id',
	},
	getters: {
		getCars(state) {
			return state.cars
		},
		getFilters(state) {
			return state.filterValues
		},
		getSort(state) {
			return state.sortBy
		},
	},
	mutations: {
		setFilters(state, action) {
			state.filterValues = action
		},
		setSort(state, action) {
			state.sortBy = action
		},
	},
	actions: {},
	modules: {},
})
