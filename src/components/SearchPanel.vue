<template>
	<b-row class="align-items-end mb-3 pt-5">
		<b-col :sm="1">
			<label class="mb-2">id</label>
			<b-form-input v-model="filters.id" type="number" :min="1"></b-form-input>
		</b-col>
		<b-col :sm="2">
			<label class="mb-2">brand</label>
			<b-form-input v-model="filters.brand" type="text"></b-form-input>
		</b-col>
		<b-col :sm="1">
			<label class="mb-2">age</label>
			<b-form-input
				v-model="filters.age.from"
				type="number"
				placeholder="from"
			></b-form-input>
		</b-col>
		<b-col :sm="1">
			<b-form-input
				v-model="filters.age.to"
				type="number"
				placeholder="to"
			></b-form-input>
		</b-col>
	</b-row>
</template>

<script>
export default {
	computed: {
		filters: {
			get() {
				return this.$store.getters.getFilters
			},
			set() {
				this.$store.commit('setFilter', { ...this.filters })
			},
		},
	},
}
</script>

<style></style>
