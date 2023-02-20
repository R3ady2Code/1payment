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
		<b-col cols="2">
			<label class="mb-2">age</label>
			<b-form-select v-model="filters.age.from" :options="years">
				<template #first>
					<b-form-select-option :value="null" disabled
						>from</b-form-select-option
					>
				</template>
			</b-form-select>
		</b-col>
		<b-col cols="2">
			<b-form-select v-model="filters.age.to" :options="years">
				<template #first>
					<b-form-select-option :value="null" disabled>to</b-form-select-option>
				</template>
			</b-form-select>
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
		years() {
			const result = Array.from(
				{ length: 50 },
				(_, index) => new Date().getFullYear() - index
			)
			result.unshift({ value: '', text: '' })
			return result
		},
	},
}
</script>

<style></style>
