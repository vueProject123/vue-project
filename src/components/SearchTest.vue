<template>
	<div class="searchtest">
		<search-header>{{word}}</search-header>

		<ol class="version">
			<li class="version-item" v-for=" product in list">
				<div class="version-item-img">
					<img class="lazy" :src="product.image_url" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
				</div>
				<div class="version-item-intro">
					<div class="version-item-name">
						<p>小米Max 2 4GB+64GB</p>
					</div>
					<div class="version-item-brief">
						<p>
							<font color="#ff4a00">【64GB版本 赠小米活塞耳机清新版】</font>6.44''大屏 / 5300mAh 充电宝级的大电量 / 大像素相机 / 轻薄全金属 / ​4GB 大内存 / 骁龙八核处理器</p>
					</div>
					<!--vue-if-->
					<div class="version-item-intro-price"><span>1699</span>
						<!--vue-if--><em>起</em>
						<!--vue-if-->
					</div>
				</div>
			</li>
			
		</ol>
	</div>
</template>

<script>
	import searchHeader from './classifyComponents/searchHeader'
	import axios from 'axios'
	export default {
		name: 'searchtest',
		data: function() {
			return {
				word: this.$route.params.word,
				list:""
			}
		},
		methods: {
			getProduct: function() {
				var that = this
				axios.get("/static/json/productList.json", {})
					.then(function(res) {
						this.list = res.data.data.product
						console.log(this.list)
					}.bind(this))
			}

		},
		
		created() {
			this.getProduct();
			
		}
	}
</script>

<style scoped lang="scss">
.searchtest {
    background: #f5f5f5;
    padding-bottom: 1rem;
    min-height: 100%;
    .version {
	    background: #fff;
	    .version-item {
		    display: box;
		    display: -webkit-box;
		    box-align: center;
		    -webkit-box-align: center;
		    
		    padding: 0 0 .06rem;
   			position: relative;
   			.version-item-img {
			    width: 3rem;
			    height: 3rem;
			    position: relative;
			    img{
			    	width: 100%;
			    }
			}
			.version-item-intro {
			    -webkit-box-flex: 1;
			    box-flex: 1;
			    display: block;
			    padding: 0 .32rem .08rem;
			    .version-item-name {
				    font-size: .28rem;
				    color: rgba(0,0,0,.87);
				    margin-bottom: .16rem;
				}
				.version-item-brief {
				    font-size: .23rem;
				    color: rgba(0,0,0,.54);
				    margin-bottom: .16rem;
				    line-height: .3rem;
				    height: .6rem;
				    overflow: hidden;
				}
				.version-item-intro-price {
				    font-size: .32rem;
				    position: relative;
				    margin-left: .2rem;
				    span {
					    color: #ff6000;
					    &:before{
					    	content: "￥";
						    position: absolute;
						    left: -.2rem;
						    top: .01rem;
						    font-size: .2rem;
						    margin-right: .05rem;
						    font-weight: 400;
					    }
					}
					em {
					    color: #ff6000;
					    font-size: .2rem;
					    margin-left: .1rem;
					    font-style: normal;
					}
				}
			}
		}
	}
}
</style>