<template>
     <main>
     	<router-view></router-view>
     	<v-footer></v-footer>
     </main>
</template>

<script>

		import vfooter from './component/nav/footer.vue'
		
		export default{
			//注册组件
			components:{
				'v-footer':vfooter
			}
		}
</script>

<style>

</style>
