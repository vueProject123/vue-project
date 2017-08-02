<template>
	<div class="car">
		<!--去登陆-->
		<div class="nologin">
			<a href="/#/login">
				<span>登录后享受更多优惠</span>
				<div class="goLogin">
					<span>去登录</span>
					<span class="iconfont icon-xiangyou"></span>
				</div>
			</a>
		</div>

		<!--购物车提示-->
		<div class="noitems grey">
			<a href="/#/main">
				<span>购物车还是空的</span>
				<em>去逛逛</em>
			</a>
		</div>

		<!--为你推荐-->
		<div class="car_tuijian">
			<div class="tip">为你推荐</div>
			<div class="list">
				<div class="img" v-for="list in carTuijian">
					<div class="top">
						<img :src="list.image_url" />
					</div>
					<div class="msg ">
						<div class="name" v-text="list.name"></div>
						<div class="price"><span>￥</span>
							<slot>{{list.price}}</slot>
						</div>
					</div>
				</div>
			</div>
		</div>
		<m-footer></m-footer>
	</div>
</template>

<script>
	import Footer from './Footer'
	import axios from 'axios'
	export default {
		name: 'car',
		data: function() {
			return {
				carTuijian: ''
			}
		},
		methods: {
			getcarTuijian() {
				let that = this
				axios.get('/static/json/detail_recommend2.json')
					.then((res) => {
						//					console.log(res)
						that.carTuijian = res.data.data.recom_list
						console.log(that.carTuijian)
					})
			}
		},
		mounted() {
			this.getcarTuijian()
		}
	}
</script>

<style scoped lang="scss">
	.car {
		height: 100%;
		background: #FFFFFF;
		.nologin{
			width: 99%;
			height: 1.04rem;
			span{
				font-size: .32rem;
			    color: rgba(0,0,0,.87);
			    display: block;
			}
			.goLogin{
				float: right;
				span{
					display: inline-block;
					font-size: .24rem;
				}
			}
		}
		.grey {
			width: 99%;
			background: #ebebeb;
			height: 1rem;
			margin: 0 auto;
			a {
				height: 1.04rem;
				font-size: .24rem;
				display: flex;
				justify-content: center;
				align-items: center;
				span {
					display: block;
					line-height: .8rem;
					padding: 0 .16rem 0 .96rem;
					color: rgba(0, 0, 0, .27);
				}
				em {
					display: block;
					border: 1px solid rgba(0, 0, 0, .15);
					height: .5rem;
					line-height: .5rem;
					padding: 0 .24rem;
					color: rgba(0, 0, 0, .87)
				}
			}
		}
		.car_tuijian {
			width: 100%;
			padding-bottom: 45px;
			.tip {
				height: .8rem;
				line-height: .8rem;
				background: #fff;
				font-size: .3rem;
				padding: 0 .32rem;
			}
			.list {
				display: flex;
				justify-content: space-around;
				align-items: center;
				flex-wrap: wrap;
			}
			.img {
				width: 50%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: flex-start;
				padding: 0 .025rem;
				img {
					width: 100%;
					height: auto;
					min-height: 3.56rem;
					border: 0;
				}
				.msg {
					padding: .18rem .27rem;
					width: 100%;
					.name {
						width: 100%;
						font-size: .25rem;
						color: rgba(0, 0, 0, .87);
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
					}
					.price {
						font-size: .28rem;
						color: #ff6000;
						margin-top: .1rem;
						span {
							font-size: .2rem;
						}
					}
				}
			}
		}
	}
</style>