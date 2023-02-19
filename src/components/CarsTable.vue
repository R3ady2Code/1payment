<template>
	<b-table
		hover
		:items="filtersCars"
		v-if="filtersCars.length"
		:fields="fields"
		label-sort-asc=""
		label-sort-desc=""
		label-sort-clear=""
		:sort-by.sync="sorter.sortBy"
		:sort-desc.sync="sorter.sortDesc"
	></b-table>
	<h4 v-else>No cars by this filters:(</h4>
</template>

<script>
export default {
	data: () => ({
		fields: [
			{
				key: 'id',
				label: 'id',
				sortable: true,
			},
			{
				key: 'brand',
				label: 'Brand',
				sortable: true,
			},
			{
				key: 'age',
				label: 'Age',
				sortable: true,
			},
		],
		sorter: {
			sortBy: 'id',
			sortDesc: false,
		},
	}),
	computed: {
		cars() {
			return this.$store.getters.getCars
		},
		filters() {
			return this.$store.getters.getFilters
		},
		filtersCarsById() {
			if (this.filters.id) {
				return this.cars.filter(car => car.id == this.filters.id)
			}
			return this.cars
		},
		filtersCarsByBrand() {
			if (this.filters.brand) {
				return this.cars.filter(car =>
					car.brand.toLowerCase().includes(this.filters.brand.toLowerCase())
				)
			}
			return this.cars
		},
		filtersCarsByAge() {
			if (this.filters.age.from && this.filters.age.to) {
				return this.cars.filter(
					car =>
						car.age >= this.filters.age.from && car.age <= this.filters.age.to
				)
			}
			if (this.filters.age.from) {
				return this.cars.filter(car => car.age >= this.filters.age.from)
			}
			if (this.filters.age.to) {
				return this.cars.filter(car => car.age <= this.filters.age.to)
			}
			return this.cars
		},
		filtersCars() {
			return this.cars.filter(
				car =>
					this.filtersCarsById.includes(car) &&
					this.filtersCarsByBrand.includes(car) &&
					this.filtersCarsByAge.includes(car)
			)
		},
	},
	watch: {
		sorter: {
			async handler() {
				await fetch(
					`https://localhost:3005/cars/index?_sort=${
						this.sorter.sortBy
					}&_order=${this.sorter.sortDesc ? 'desc' : 'asc'}`
				)
			},
			deep: true,
		},
	},
}
</script>
