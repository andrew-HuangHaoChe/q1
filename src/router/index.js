import Vue from 'vue';
import VueRouter from 'vue-router';
//官方元件
import Home from '@/components/HelloWorld';
import Login from '@/components/pages/Login';

Vue.use(VueRouter);

export default new VueRouter({
  routes:[
      {
        path:'/index',
        name:'首頁',
        component:Home,
      },

      {
          path:'/login',
          name:'Login',
          component: Login,
      },
  ],  
});