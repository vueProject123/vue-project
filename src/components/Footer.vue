<template>
	<div class="footer">
        <router-link class="tab-item external " to='main'>
            <span class="iconfont icon-shouye"></span>
            	首页
        </router-link>
        <router-link class="tab-item external" to='classify'>
            <span class="iconfont icon-icon"></span>
            	分类
        </router-link>
        <router-link class="tab-item external" to='car'>
            <span class="iconfont icon-gouwuche"></span>
           		购物车
        </router-link> 
        <router-link class="tab-item external" to='mine'>
            <span class="iconfont icon-wode"></span>
            	我的
        </router-link>
	</div>
</template>

<script>
	import Vue from 'vue'
	const Footer=Vue.extend({
		name:'footer'
	})
	Vue.component('m-footer',Footer)
	export default Footer
</script>

<style scoped lang="scss">
	.footer{
		height: 45px;
		width: 100%;
		position: fixed;
		left: 0;
		bottom: 0;
		display: flex;
		justify-content: space-around;
		align-items: center;
		font-size: 12px;
		background: #FFFFFF;
		a{
			display: flex;
			flex-flow: column;
			align-items: center;
			margin: 5px 0;
			span{
				font-size: 20px;
				margin-bottom: 3px;
			}
			&.router-link-active{
				color: #f56a00;
			}
		}
	}
</style>