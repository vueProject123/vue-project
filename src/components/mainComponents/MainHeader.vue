<template>
	<div class="main_box">
		<div class="index-header">
			<div class="logo">
				<img src="../../assets/img/logo.png">
			</div>
			<div class="search_bar">
				<a href="#/search">
					<span class="iconfont icon-sousuo i"></span>
					<span class="text">搜索商品名称</span>
				</a>
			</div>
			<div class="login">
				<div class="text">登录</div>
			</div>
		</div>
		
		<header-nav></header-nav>
		
	</div>
</template>

<script>
	import Vue from 'vue'
	
	import HeaderNav from './HeaderNav'
	
	
	const MainHeader=Vue.extend({
		name:'mainHeader',
		data:function(){
			return {
				
			}
		},
		components:{
			'headerNav':HeaderNav
		}
	})
	
	export default MainHeader
</script>

<style scoped lang="scss">
.main_box{
	.index-header{
	    right: 0;
	    z-index: 100;
	    display: flex;
	    justify-content: space-around;
	    align-items: center;
	    padding: .15rem 0;
	    background-color: #fafafa;
	    .logo{
	    	img{
	    		width: .5rem;
    			height: auto;
	    	}
	    }
	    .search_bar {
    		line-height: .34rem;
    		width: 5.5rem;
		    height: .53rem;
		    border-radius: .08rem;
		    border: 1px solid #e5e5e5;
    	}
	   	.search_bar>a {
		    display: block;
		    padding: .1rem .2rem;
		}
		.search_bar .text{
		    font-size: .26rem;
		    color: rgba(0,0,0,.3);
		}
		.search_bar .i{
			font-size: .25rem;
		    color: rgba(0,0,0,0.5);
		}
		 .login{
		    display: block;
		    white-space: nowrap;
		    box-sizing: border-box;
		    text-align: center;
		    .text {
			    font-size: .28rem;
			    text-align: center;
			    color: #969696;
			    margin: 0 .22rem;
			}
		}
	}
}
	
</style>