import Vue from 'vue'
import Router from 'vue-router'
import manage from '@/page/index'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const userManagement = r => require.ensure([], () => r(require('@/components/userManagement')), 'userManagement');
const informationAdded = r => require.ensure([], () => r(require('@/components/informationAdded')), 'informationAdded');
const department = r => require.ensure([], () => r(require('@/components/department')), 'department');

export default new Router({
  routes: [
    {
      path: '/',
      component: login,
      meta: {
        isHadLogin: true,
      }
    },
    {
      path: '/index',
      name: '首页',
      component: manage,
      meta:{
        requireAuth:true,
      },
      children: [{
        path: '',
        component: userManagement,
        meta: [],
      }, {
        path: '/systemManagement/userManagement/userManagement',
        component: userManagement,
        meta: [{title: '用户管理', path: '/userManagement'}, {title: '用户管理', path: '/userManagement'}],
      }, {
          path: '/systemManagement/userManagement/userRoleManagement',
          component: informationAdded,
          meta: [{title: '用户管理', path: '/informationAdded'}, {title: '用户管理', path: '/informationAdded'}],
      },
          {
              path: '/systemManagement/userManagement/departmentManagement',
              component: department,
              meta: [{title: '用户管理', path: '/department'}, {title: '用户管理', path: '/department'}],
          },

      ]
    },
		{
		      path: '/basicManagement',
		      name: '基础管理',
		      component: manage,
		      meta:{
		        requireAuth:true,
		      },
		      children: [{
		        path: '',
		        component: userManagement,
		        meta: [],
		      }, {
		        path: '/userManagement',
		        component: userManagement,
		        meta: [{title: '用户管理', path: '/userManagement'}, {title: '用户管理', path: '/userManagement'}],
		      }, {
		          path: '/informationAdded',
		          component: informationAdded,
		          meta: [{title: '用户管理', path: '/informationAdded'}, {title: '用户管理', path: '/informationAdded'}],
		      },
		          {
		              path: '/department',
		              component: department,
		              meta: [{title: '用户管理', path: '/department'}, {title: '用户管理', path: '/department'}],
		          },
		
		      ]
		    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
