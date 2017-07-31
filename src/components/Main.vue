<template>
	<div class="main">
		<main-header></main-header>
		<m-footer></m-footer>
	</div>
</template>

<script>
	import Footer from './Footer'
	import MainHeader from './mainComponents/MainHeader'
	export default {
		name:'main',
		data:function(){
			return {
				
			}
		},
		components:{
			'main-header':MainHeader
		}
	}
</script>

<style scoped>

</style>