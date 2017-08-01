<template>
	<div class="headerNav">
		<ul>
			<li v-for="list in titleList">
				<span @click='getComponent(list.tab_name)'>{{list.tab_name}}</span>
			</li>
		</ul>
		<component :is='component'></component>
	</div>
</template>

<script>
	import Vue from 'vue'
	import axios from  'axios'
	import TjComponent from './listComponents/TjComponent'
	import SjComponent from './listComponents/SjComponent'
	import ZnComponent from './listComponents/ZnComponent'
	import DsComponent from './listComponents/DsComponent'
	import DnComponent from './listComponents/DnComponent'
	import LifeComponent from './listComponents/LifeComponent'
	const HeaderNav=Vue.extend({
		name:'headerNav',
		data:function(){
			return {
				titleList:[],
				isShow:true,
				component:'tuijian'
			}
		},
		methods:{
			getTitleList(){
				var that=this
				axios.get('/static/json/titleList.json')
				.then(function(res){
//					console.log(res.data.data.tabs)
					that.titleList=res.data.data.tabs
				})
			},
			getComponent(val){
				if(this.titleList){
					var that=this
					this.titleList.forEach(function(list,index){
						if(list.tab_name==val){
							switch(val){
								case "手机":that.component='shouji';break;
								case "智能":that.component='zhineng';break;
								case "电视":that.component='dianshi';break;
								case "电脑":that.component='diannao';break;
								case "生活周边":that.component='life';break;
								default:that.component='tuijian';break;
							}
						}
					})
				}
			}
		},
		components:{
			'tuijian':TjComponent,
			'shouji':SjComponent,
			'zhineng':ZnComponent,
			'dianshi':DsComponent,
			'diannao':DnComponent,
			'life':LifeComponent
		},
		mounted(){
			if(!this.titleList){return }
			this.getTitleList()
		}
	})
	export default HeaderNav
</script>

<style scoped lang='scss'>
	.headerNav{
		ul{
		    z-index: 2;
		    background-color: #fafafa;
		    height: .6rem;
		    overflow-y: hidden;
		    width: 100%;
		    display: flex;
		    justify-content: space-around;
		    li{
		    	line-height: .6rem;
		    	color:#969696;
		    	span{
		    		line-height: .6rem;
		    	}
		    	span:hover{
		    		color: #ed5b00;
		    	}
		    	&.active{
		    		border-bottom:2px solid #ed5b00;
		    		color: #ed5b00;
		    	}
		    }
		    li:hover{
		    	border-bottom:2px solid #ed5b00;
		    }
		}
	}

</style>