import Vue from 'vue'
import Router from 'vue-router'
import manage from '@/page/manage'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const login = r => require.ensure( [], () => r( require( '@/page/login' ) ), 'login' );
const userManagement = r => require.ensure( [], () => r( require( '../components/userManagement' ) ), 'userManagement' );

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
    path: '/manage',
    name: 'manage',
    component: manage
  	},
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
