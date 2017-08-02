<template>
	<div class="wrapper">
		<div class="header">
			<div class="left">
				<a class="home" href="#/main">
					<span class="iconfont icon-shouye ib"></span>
				</a>
			</div>
			<div class="tit">
				<input v-model="inputTo" />
			</div>
			<div class="right">
				<router-link :to="'/searchtest/'+inputTo">
					<div class="iconfont icon-sousuo"></div>
				</router-link>
			</div>
		</div>

		<div class="adlist">
			<div class="title">热门搜索</div>
			<div class="f-list">
				<div class="section">

					<a class="exposure" href="http://s1.mi.com/m/ghd/2017/xgs0725/index.html?needValidHost=false&amp;client_id=180100031058&amp;masid=17409.0084">
						<div class="img">
							<img src="http://i8.mifile.cn/b2c-mimall-media/dd6738145fe7f65c838db3aa20d77463!720x200.jpg?bg=FFFFFF" />
							<!--vue-if-->
						</div>
					</a>

				</div>
				<!--v-repeat-items-->
			</div>
		</div>

		<div>
			<ul class="list-default" v-if="isSearch">
				<li class="top" v-for="h of hotSearch" :style="{background : h.back_n , color : h.font_n, borderColor : h.border_n}">
					<span v-text="h.word"></span>
				</li>

				<!--v-repeat-defaultKeywords-->
			</ul>
			<template  v-else>
				<ul class="ui-list keylist" >
					<li class="ui-list-item" v-for="goods in wordList"><span v-text="goods.keyword"></span></li>
					
					<!--v-repeat-keywordsList-->
				</ul>
			</template>
			
		</div>

	</div>

</template>

<script>
	import axios from "axios"
	export default {
		name: "search",
		data: function() {
			return {
				hotSearch: "",
				inputTo: "",
				wordList:"",
				isSearch: true
			}
		},
		watch: {
			inputTo: function() {
				if(this.inputTo != "") {
					this.isSearch=false;
					this.getWordList();
					
					
				}else{
					this.isSearch=true;
				}
			}
		},
		methods: {
			getHotSearch: function() {
				var that = this
				axios.get("/static/json/hotSearch.json", {})
					.then(function(res) {
						that.hotSearch = res.data.data.keywords;
					})
			},
			getWordList: function() {
				axios.get("/static/json/wordList.json", {})
					.then(function(msg) {
//						console.log(msg.data.data);
						this.wordList = msg.data.data;
					}.bind(this))
			}
		},
		created() {
			this.getHotSearch();
			
		}
	}
</script>

<style scoped lang="scss">
	.wrapper {
		height: 100%;
	}
	
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
				font-size: .44rem;
			}
		}
		.tit {
			-webkit-box-flex: 1;
			box-flex: 1;
			width: 100%;
			input {
				position: absolute;
				top: 0;
				right: 0;
				bottom: 0;
				left: 0;
				margin: auto;
				width: 5rem;
				height: 0.55rem;
				border: 1px solid #ccc;
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
				.iconfont {
					font-size: 20px;
				}
			}
			.icon {
				color: #999;
			}
		}
	}
	
	.adlist {
		margin-top: -.84rem;
		background: #FFFFFF;
		.title {
			margin-top: .84rem;
			line-height: .8rem;
			padding: 0 .3rem;
			font-size: .24rem;
		}
		.f-list {
			.section {
				transform: translateZ(0);
				margin-top: -1px;
			}
		}
		img {
			width: 100%;
		}
	}
	
	ul.list-default {
		overflow: hidden;
		margin: .1rem .2rem;
		li {
			float: left;
			background: #E4E4E4;
			padding: .14rem .2rem;
			margin: .1rem;
			border: 1px solid #E4E4E4;
		}
		span {
			font-size: .24rem;
		}
	}
	.ui-list {
    	position: relative;
    	.ui-list-item {
    		background: #F5F5F5;
		    border-bottom: 1px solid #f6f6f6;
		    display: block;
		    font-size: .28rem;
		    overflow: hidden;
		    background: #FFF;
		    padding: .2rem .3rem;
		}
	}
</style>