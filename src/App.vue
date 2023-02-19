<template>
	<b-container>
		<SearchPanel />
		<CarsTable />
	</b-container>
</template>

<script>
import CarsTable from './components/CarsTable'
import SearchPanel from './components/SearchPanel.vue'

export default {
	name: 'App',
	components: {
		CarsTable,
		SearchPanel,
	},
}
</script>
