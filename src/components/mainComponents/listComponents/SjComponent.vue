<template>
	<div class="shouji">
		<div class="content">
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="banner in bannerData">
						<router-link to=''>
							<img :src="banner.img_url" />
						</router-link>
					</div>
				</div>
				<div class="swiper-pagination"></div>
			</div>
		</div>
		
		<div class="tip">
			<img :src="ImgData.tipData" />
		</div>
		
		<div class="three">
			<div class="img">
				<img class="big" :src="ImgData.bigData.img_url">
				<div class="tag">
					<img class="" src="">
				</div>
			</div>
			<div class="info">
				<div class="l l1">
					<div class="name">{{ImgData.bigData.product_name}}</div>
					<div class="price">{{ImgData.bigData.product_price}}<span>起</span></div>
				</div>
				<div class="l l2">
					<div class="brief">{{ImgData.bigData.product_brief}}</div>
				</div>
			</div>
		</div>
		
		<div class="box" v-for="list in ImgData.boxData">
			<div class="item" v-for="data in list"> 
				<a class="exposure">
					<div class="img">
						<img class="big" :src="data.img_url"/>
						<div class="tag">
							<img class="" :src="data.product_tag">
						</div>
					</div>
					<div class="info">
						<div class="name">{{data.product_name}} </div>
						<div class="brief">{{data.product_brief}}</div>
						<div class="price">{{data.product_price}}<span>起</span></div>
					</div>
				</a>
			</div>
		</div>

	</div>
</template>

<script>
	import Vue from 'vue'
	import axios from 'axios'
	const SjComponent = Vue.extend({
		Swiper: '',
		data: function() {
			return {
				shoujiData: [],
				bannerData: [],
				ImgData: {
					tipData: '',
					bigData: '',
					boxData:[],
				}

			}
		},
		methods: {
			getBanner() {
				var that = this
				axios.get('/static/json/bannerList.json')
					.then(function(res) {
						const dataList = res.data.data
						console.log(dataList)
						that.shoujiData = dataList["1864"].sections
//						console.log(that.shoujiData)
						that.bannerData = that.shoujiData[0].body.items
						that.ImgData.tipData = that.shoujiData[2].body.items[0].img_url
						that.ImgData.bigData = that.shoujiData[3].body.items[0]
						that.ImgData.boxData.push(that.shoujiData[4].body.items)
						that.ImgData.boxData.push(that.shoujiData[5].body.items)
//						console.log(that.ImgData.boxData)
					})
			}
		},
		watch: {
			bannerData(val) {
				let that = this
				setTimeout(() => {
					that.$options.Swiper.update()
				}, 0)
			}
		},
		mounted() {
			this.$options.Swiper = new Swiper('.swiper-container', {
				pagination: '.swiper-pagination',
				paginationClickable: true,
				autoplay: 1000
			});
			this.getBanner()
		}
	})
	export default SjComponent
</script>

<style scoped lang="scss">
	.shouji {
		padding-bottom: 45px;
		.tip {
			img {
				width: 100%;
				height: 100%;
				display: block;
				vertical-align: top;
				border: none;
			}
		}
		
		.three {
			.img {
				.big {
					height: auto;
					width: 100%;
				}
			}
			.info {
				display: flex;
				flex-flow: column;
				justify-content: center;
				align-items: flex-start;
				padding: .2rem .27rem;
				overflow: hidden;
				.l {
					width: 100%;
				}
				.l1 {
					display: flex;
					justify-content: space-between;
					.name {
						font-size: .28rem;
						color: rgba(0, 0, 0, .87);
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
					}
					.price {
						display: inline-block;
						font-size: .32rem;
						color: #ff6000;
						margin-top: .08rem;
						position: relative;
						margin-left: .2rem;
						white-space: nowrap;
					}
				}
				.l2 {
					.brief {
						margin-top: .06rem;
						font-size: .23rem;
						height: .3rem;
						line-height: .3rem;
						color: rgba(0, 0, 0, .54);
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
					}
				}
			}
		}
		.box{
			width:100%;
		    display: flex;
		    flex-direction: row;
		    justify-content: space-between;
		    overflow: hidden;
		    flex-wrap: nowrap;
			.item{
			    .exposure{
			    	display: flex;
			    	flex-flow: column;
			    	justify-content: center;
			    	align-items: flex-start;
			    	.img{
			    		width: 3.6rem;
   						height: 3.6rem;
   						position: relative;
   						.big{
   							width: 100%;
						    height: 100%;
						    display: block;
						    vertical-align: top;
   						}
   						.tag{
   							position: absolute;
						    top: 0;
						    left: 0;
						    img{
						    	height: .32rem;
    							width: auto;
						    }
   						}
			    	}
		    	}
		    }
		    .info{
		    	padding: .2rem .27rem;
		    	display: flex;
		    	flex-flow: column;
		    	justify-content: center;
		    	align-items: flex-start;
		    	.name{
		    		font-size: .28rem;
				    color: rgba(0,0,0,.87);
				    white-space: nowrap;
				    overflow: hidden;
				    text-overflow: ellipsis;
		    	}
		    	.brief {
				    margin-top: .06rem;
				    font-size: .23rem;
				    height: .3rem;
				    line-height: .3rem;
				    color: rgba(0,0,0,.54);
				    white-space: nowrap;
				    overflow: hidden;
				    text-overflow: ellipsis;
				}
				.price {
				    display: inline-block;
				    font-size: .32rem;
				    color: #ff6000;
				    margin-top: .08rem;
				    position: relative;
				    white-space: nowrap;
				}
		    }
		}
		.content {
			.swiper-container {
				width: 100%;
				height: 180px;
			}
			.swiper-slide {
				text-align: center;
				font-size: 18px;
				background: #fff;
				/* Center slide text vertically */
				display: -webkit-box;
				display: -ms-flexbox;
				display: -webkit-flex;
				display: flex;
				-webkit-box-pack: center;
				-ms-flex-pack: center;
				-webkit-justify-content: center;
				justify-content: center;
				-webkit-box-align: center;
				-ms-flex-align: center;
				-webkit-align-items: center;
				align-items: center;
				img {
					height: auto;
					width: 100%;
				}
			}
			.swiper-pagination {
				text-align: right;
				padding-right: 20px;
			}
		}
	}
</style>