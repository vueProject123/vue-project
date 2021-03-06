import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
 
Vue.use(Mint);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data:{
  	clientWidth:320
  },
  router,
  template: '<App/>',
  components: { App },
  beforeUpdate(){
  	this.clientWidth=document.documentElement.clientWidth
  	document.documentElement.style.fontSize = this.clientWidth / 7.2 + 'px';
  }
})
