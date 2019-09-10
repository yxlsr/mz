import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import './stylesheets/main.scss'
import "../src/../public/font_hqgm92jhd29/iconfont.css"
import "swiper/dist/css/swiper.min.css"

Vue.config.productionTip = false
import { Button } from 'mint-ui';

Vue.component("mt-button", Button);
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component("mt-swipe", Swipe);
Vue.component("mt-swipe-item", SwipeItem);
import { Lazyload } from 'mint-ui';

Vue.use(Lazyload);
import { InfiniteScroll } from 'mint-ui';

Vue.use(InfiniteScroll);
import axios from "axios";
Vue.prototype.$http=axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
