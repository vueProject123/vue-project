<template>
	<div class="tuijian">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="banner in TjData_detail_banner">
					<a class="banner">
						<img :src="banner.img_url" />
					</a>
				</div>
			</div>
			<div class="swiper-pagination"></div>
		</div>
		<div class="message">
			<div v-for="message in TjData_message">
				<img :src="message.img_url" :width="message.w/2" :height="message.h/2" />
			</div>
		</div>
		<div class="divider_line"></div>
		<div class="TjData_tip">
			<div class="img">
				<img :src="TjData_tip.title_logo_url" />
			</div>
			<!--:class="time==index?'active':''"-->
			<div class="list" v-for="(data,index) in TjData_tip.items" v-show="time==index">
				<a href="">{{data.news_title}}</a>
			</div>
		</div>
		<div class="section">
			<div class="left" data-ad_position_id='215'>
				<img src="//i8.mifile.cn/v1/a1/435946f2-46a6-9201-7242-e10fe972916d.webp" />
			</div>
			<div class="right">
				<div class="item top" data-ad_position_id='216'>
					<img src="//i8.mifile.cn/v1/a1/70c9dec4-3a1d-8508-70f2-84a9c119cd04!358x252.webp" />
				</div>
				<div class="item bottom" data-ad_position_id='217'>
					<img src="//i8.mifile.cn/v1/a1/87f6b34c-042f-0755-8f85-78c1cd41988d!358x252.webp" />
				</div>
			</div>
		</div>
		<div class="section">
			<div class="left" data-ad_position_id='215'>
				<img src="//i8.mifile.cn/v1/a1/435946f2-46a6-9201-7242-e10fe972916d.webp" />
			</div>
			<div class="right">
				<div class="item top" data-ad_position_id='216'>
					<img src="//i8.mifile.cn/v1/a1/70c9dec4-3a1d-8508-70f2-84a9c119cd04!358x252.webp" />
				</div>
				<div class="item bottom" data-ad_position_id='217'>
					<img src="//i8.mifile.cn/v1/a1/87f6b34c-042f-0755-8f85-78c1cd41988d!358x252.webp" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	import axios from 'axios'
	const TjComponent = Vue.extend({
		Swiper: '',
		data: function() {
			return {
				time: 0,
				TjData: '',
				TjData_detail: '',
				TjData_detail_banner: '',
				TjData_message: '',
				TjData_tip: '',
				TjData_section: ''
			}
		},
		methods: {
			getBanner() {
				var that = this
				axios.get('/static/json/TitleList.json')
					.then(function(res) {
						//						console.log(res)
						that.TjData = res.data.data.tabs[0].tab_data
						that.TjData_detail = that.TjData.sections
//						console.log(that.TjData_detail)
						that.TjData_detail_banner = that.TjData_detail[0].body.items
						//console.log(that.TjData_detail_banner)

						that.TjData_message = that.TjData_detail[1].body.items

						that.TjData_tip = that.TjData_detail[3].body
						//						console.log(that.TjData_tip)

						that.TjData_section = that.TjData_detail[5].body.items
//						console.log(that.TjData_section)
					})
			},
			setTips(val) {
				setInterval(() => {
					this.time++
						if(this.time == 3) {
							this.time = 0
						}
				}, 2000)
			}
		},
		mounted() {
			this.$options.Swiper = new Swiper('.swiper-container', {
				pagination: '.swiper-pagination',
				paginationClickable: true,
				autoplay: 2000,
				loop: true
			});
			this.getBanner()
			this.setTips()
		},
		watch: {
			'TjData_detail_banner': function(val) {
				let that = this
				setTimeout(() => {
					that.$options.Swiper.update()
				}, 0)
			}
		}
	})
	export default TjComponent
</script>

<style scoped lang="scss">
	.tuijian {
		background-color: #fafafa;
		padding-bottom: 45px;
		.section {
			display: flex;
			justify-content: space-around;
			align-items: center;
			position: relative;
			.left {
				width: 50%;
				img {
					width: 100%;
					height: 100%;
				}
			}
			.right {
				width: 50%;
				img {
					width: 100%;
					height: 100%;
				}
				.item {
					position: absolute;
				}
				.top {
					width: 50%;
					height: 2.52rem;
					top: 0;
					left: 3.5rem;
				}
				.bottom {
					width: 50%;
					height: 2.52rem;
					left: 3.5rem;
					top: 2.56rem;
				}
			}
		}
		.TjData_tip {
			display: flex;
			justify-content: center;
			align-items: flex-start;
			overflow: hidden;
			height: .8rem;
			width: 100%;
			font-size: .24rem;
			color: #000;
			background: #FFFFFF;
			position: relative;
			.img {
				img {
					width: 1.5rem;
					height: auto;
					position: absolute;
					left: 0;
					top: 0;
				}
			}
			.list {
				transition: all 0.3s;
				font-size: .24rem;
				line-height: .28rem;
				padding-left: .2rem;
				border-left: 1px solid #b2b2b2;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				margin: .23rem 0 .23rem .2rem;
				max-width: 5rem;
				position: absolute;
				top: 0;
				left: 1.8rem;
				background: #FFFFFF;
			}
		}
		.banner {
			img {
				width: 100%;
			}
		}
		.message {
			display: flex;
			justify-content: space-around;
			align-items: center;
			flex-wrap: nowrap;
		}
		.divider_line {
			line-height: 24px;
			border-top: 1px solid #cecece;
		}
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
		}
		.swiper-pagination {
			text-align: right;
			padding-right: 20px;
		}
	}
</style>