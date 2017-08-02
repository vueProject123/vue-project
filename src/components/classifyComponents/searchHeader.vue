<template>
	<div class="header">
		<div class="left">
			<a class="home" data-stat-id="346f31c749f6e40d" href="#/main">
				<img src="//s1.mi.com/m/images/m/icon_back_n.png" class="ib">
			</a>
		</div>
		<div class="tit">
			<h2 data-log="HEAD-标题-商品分类"><span class="title"><slot></slot></span></h2>
			<!--vue-if-->
		</div>
		<div class="right">
			<router-link to="/search">
				<div class="iconfont icon-sousuo"></div>
			</router-link>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	const SearchHeader=Vue.extend({
		name:'searchheader'
	})
	Vue.component('search-header',SearchHeader)
	export default SearchHeader
</script>

<style scoped lang="scss" >
.header {
    display: box;
    display: -webkit-box;
    height: .84rem;
    box-align: center;
    -webkit-box-align: center;
    padding: 0 .2rem;
    background: #f2f2f2;
    position: relative;
    border-bottom: 1px solid #eee;
    z-index: 2;
    .left {
    	position: relative;
	    z-index: 1;
	    a {
	   	 	display: block;
		}
		.ib {
		    width: .44rem;
		    height: .44rem;
		}
    }
    .tit {
	    -webkit-box-flex: 1;
	    box-flex: 1;
	    width: 100%;
	    h2 {
	    	font-weight: 100;
		    text-align: center;
		    position: absolute;
		    top: 0;
		    right: 0;
		    bottom: 0;
		    left: 0;
		    line-height: .84rem;
		}
	}
	.right {
    	position: relative;
    	a {
		    display: inline-block;
		    margin-left: .2rem;
		    width: .44rem;
		    height: .44rem;
		    font-size: .44rem;
		   	.iconfont{
		   		font-size: 20px;
		   	}
		}
		.icon {
			
		    color: #999;
		}
	}
}

</style>