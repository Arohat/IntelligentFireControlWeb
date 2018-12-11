import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const login = r => require.ensure( [], () => r( require( '@/page/login' ) ), 'login' );

export default new Router({
  routes: [
  {
        path: '/',
        component: login,
        meta:{
            isHadLogin:true,
        }
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
