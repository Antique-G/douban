<template>
	<main>
	  <v-header></v-header>
	  <div class="m">
		  <span style="font-size: 18px;letter-spacing: 2px;color: deepskyblue;margin-left: 80px;">快来逛逛</span>
		  <span ><img src="../../assets/image/heart.png" width="10%"/></span>
		  <span style="font-size: 18px;letter-spacing: 2px;color: deepskyblue;">快来逛逛</span>
		  
		  <br />
		  <div><img src="../../assets/image/market.png" width="100%"/></div>
	  </div>
	</main>
</template>

<script>
	import vheader from '../nav/header.vue';
	export default{
		components:{
			'v-header':vheader
		}
	}
</script>

<style scoped="scoped">
	*{
		margin: 0;
		padding: 0;
	}
	.m{
		margin-top: 90px;
	}
	div{
		background-color: ghostwhite;
	}
</style>