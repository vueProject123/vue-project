<template>
	<div class="detail">
		<!--头部-->
		<div class="detail_title">
			<a class="iconfont icon-goback" href="#/main"></a>
			<a class="iconfont icon-fenxiang share"></a>
		</div>
		<!--详细图片-->
		<div class="detailBanner">
			<div class="swiper-container">
		        <div class="swiper-wrapper">
		            <div class="swiper-slide" v-for="banner in detailBanner">
		            	<img :src="banner.image_url"/>
		            </div>
		        </div>
		        <!-- Add Pagination -->
		        <div class="swiper-pagination" id="tips"></div>
		    </div>
		</div>
		
		<!--为你推荐-->
		<div class="detail_tuijian">
			<div class="tip">为你推荐</div>
			<ul class="img">
				<li v-for="banner in detailTuijian">
					<img :src="banner.image_url"/>
					<div class="msg">
						<div class="name" v-text="banner.name"></div>
						<div class="price"><span>￥</span><slot>{{banner.price}}</slot></div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	import axios from 'axios'
	const DetailComponent =Vue.extend({
		Swiper:'',
		data:function(){
			return {
				detailTuijian:'',
				detailBanner:'',
			}
		},
		methods:{
			getTuijianMsg(){
				let that=this
				axios.get('/static/json/detail_recommend.json')
				.then((res)=>{
//					console.log(res)
					that.detailTuijian=res.data.data.recommend_list
//					console.log(that.detailTuijian)
				})
			},
			getBannerPic(){
				let that=this
				axios.get('/static/json/detail_recommend2.json')
				.then((res)=>{
					console.log(res)
					that.detailBanner=res.data.data.recommend_list
				})
			}
			
		},
		mounted(){
			console.log(this.$route.params.id)
			this.$options.Swiper=new Swiper('.swiper-container', {
		        pagination: '.swiper-pagination',
		        paginationClickable: true,
		        loop: true
		    });
		    this.getTuijianMsg()
		    this.getBannerPic()
		},
		watch: {
			detailBanner(val) {
				let that = this
				setTimeout(() => {
					that.$options.Swiper.update()
				}, 0)
			}
		},
	})
	export default DetailComponent
</script>

<style scoped lang="scss">
.detail{
	position: relative;
	.detail_tuijian{
		position:absolute;
		top:8.0rem;
		left:0;
		.tip{
		    height: .8rem;
		    line-height: .8rem;
		    background: #fff;
		    font-size: .3rem;
		    padding: 0 .32rem;
		}
		.img{
			li{
				float: left;
			    width: 50%;
			    box-sizing: border-box;
			    padding-right: .04rem;
			    vertical-align: middle;
			    img{
			    	width: 100%;
				    height: auto;
				    min-height: 3.56rem;
				    border: 0;
			    }
		    .msg{
		    	padding: .18rem .27rem;
		    	.name{
		    		font-size: .25rem;
				    color: rgba(0,0,0,.87);
				    white-space: nowrap;
				    overflow: hidden;
		    	}
		    	.price{
		    		font-size: .28rem;
				    color: #ff6000;
				    margin-top: .1rem;
				    span{
				    	font-size: .2rem;
				    }
		    	}
			    }
			}
		}
	}
	.detail_title{
		width: 100%;
		height: .84rem;
		padding: 0.6rem .4rem;
		background:#fafafa;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 9999;
		a{
			display: block;
			width: .44rem;
    		height: .44rem;
			background: #7d7d7d;
			border-radius: 50%;
			color: #ffffff;
			font-size: .35rem;
			text-align: center;
			line-height: .45rem;
			float: left;
		}
		.share{
			float: right;
		}
	}
	.detailBanner{
		background: #fafafa;
	    overflow: hidden;
	    position: absolute;
	    top: 0;
	    left: 0;
	    height: 7.92rem;
	    width: 100%;
		.swiper-container {
			width: 100%;
			height: 7.92rem;
		}
		.swiper-slide {
			text-align: center;
			font-size: 18px;
			background: #fafafa;
			display: flex;
			justify-content: center;
			align-items: center;
			img {
				height: auto;
				width: 100%;
			}
		}
	}
}
</style>