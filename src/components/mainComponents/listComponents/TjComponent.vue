<template>
	<div class="tuijian">
		 <div class="swiper-container">
	        <div class="swiper-wrapper">
	            <div class="swiper-slide">
	            	<router-link to=''>
	            		<img src=""/>
	            	</router-link>
	            </div>
	            <div class="swiper-slide">Slide 2</div>
	        </div>
	        <!-- Add Pagination -->
	        <div class="swiper-pagination"></div>
	    </div>
		
	</div>
</template>

<script>
	import Vue from 'vue'
	import axios from 'axios'
	const TjComponent=Vue.extend({
		Swiper:'',
		data:function(){
			return {
				
			}
		},
		methods:{
			getBanner(){
		    	axios.get('/static/json/bannerList.json')
		    	.then(function(res){
		    		//console.log(res)
		    	})
		    }
		},
		mounted(){
			 this.$options.Swiper= new Swiper('.swiper-container', {
		        pagination: '.swiper-pagination',
		        paginationClickable: true,
		        autoplay: 2000,
        		autoplayDisableOnInteraction: false
		    });
		    this.getBanner()
		    
		},
		watch:{
			'Swiper':function(){
				this.$options.Swiper.update()
			}
		}
	})
	export default TjComponent
</script>

<style scoped lang="scss">
	.tuijian{
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
	    .swiper-pagination{
	    	text-align: right;
	    	padding-right: 20px;
	    }
	    
	}
</style>