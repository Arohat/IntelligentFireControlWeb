import Vue from 'vue'
import Router from 'vue-router'
import manage from '@/page/index'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const userManagement = r => require.ensure([], () => r(require('@/components/userManagement')), 'userManagement');
const informationAdded = r => require.ensure([], () => r(require('@/components/informationAdded')), 'informationAdded');
const department = r => require.ensure([], () => r(require('@/components/department')), 'department');
const systemPermissions = r => require.ensure([], () => r(require('@/page/systemManagement/basicManagement/systemPermissions')), 'systemPermissions');
const systemPermissionsAdd = r => require.ensure([], () => r(require('@/page/systemManagement/basicManagement/systemPermissionsAdd')), 'systemPermissionsAdd');

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
        path: '/userManagement',
        component: userManagement,
        meta: [{title: '用户管理', path: '/userManagement'}, {title: '用户管理', path: '/userManagement'}],
      },
      {
        path: '/systemManagement/basicManagement/systemPermissions',
        component: systemPermissions,
        meta: [{title: '系统权限', path: '/systemManagement/basicManagement/systemPermissions'}, {title: '系统权限', path: '/systemManagement/basicManagement/systemPermissions'}],
      }, 
      {
        path: '/systemManagement/basicManagement/systemPermissionsAdd',
        component: systemPermissionsAdd,
        meta: [{title: '添加系统权限', path: '/systemManagement/basicManagement/systemPermissionsAdd'}, {title: '添加系统权限', path: '/systemManagement/basicManagement/systemPermissionsAdd'}],
      },{
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
