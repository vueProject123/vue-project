<template>
	<div class="shouji">
		<div class="content" v-for="data in shoujiData">
			<div class="swiper-container">
		        <div class="swiper-wrapper">
		            <div class="swiper-slide" v-for="banner in bannerData">
		            	<router-link to=''>
		            		<img :src="banner.img_url"/>
		            	</router-link>
		            </div>
		        </div>
		        <div class="swiper-pagination"></div>
		    </div>
	    
	    	<div>
	    		<div></div>
	    	</div>
	    </div>
		
	</div>
</template>

<script>
	import Vue from 'vue'
	import axios from 'axios'
	const SjComponent=Vue.extend({
		Swiper:'',
		data:function(){
			return {
				shoujiData:[],
				bannerData:[]
			}
		},
		methods:{
			getBanner(){
				var that=this
		    	axios.get('/static/json/bannerList.json')
		    	.then(function(res){
		    		const dataList=res.data.data
		    		that.shoujiData=dataList["1864"].sections
		    		console.log(that.shoujiData)
		    		that.bannerData=that.shoujiData[0].body.items
//		    		console.log(that.bannerData)
		    	})
		    }
		},
		watch:{
			bannerData(val){
				let that = this
		  		setTimeout(()=>{
		  			that.$options.Swiper.update()
		  		},0) 
			}
		},
		mounted(){
			 this.$options.Swiper= new Swiper('.swiper-container', {
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
	.shouji{
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
	        img{
	        	height: auto;
    			width: 7.2rem;
	        }
	    }
	    .swiper-pagination{
	    	text-align: right;
	    	padding-right: 20px;
	    }
	    .tip{
	    	img{
	    		width: 100%;
		    	height: 100%;
			    display: block;
			    vertical-align: top;
			    border: none;
	    	}
	    }
	    
	}
</style>