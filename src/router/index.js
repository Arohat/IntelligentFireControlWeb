import Vue from 'vue'
import Router from 'vue-router'
import manage from '@/page'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const userManagement = r => require.ensure([], () => r(require('@/components/userManagement')), 'userManagement');
const informationAdded = r => require.ensure([], () => r(require('@/components/informationAdded')), 'informationAdded');
const department = r => require.ensure([], () => r(require('@/components/department')), 'department');
const userRoleManagement = r => require.ensure([], () => r(require('@/page/systemManagement/userManagement/userRoleManagement')), 'userRoleManagement');
const systemRole = r => require.ensure([], () => r(require('@/page/systemManagement/basicManagement/systemRole')), 'systemRole');
const addSystemRole = r => require.ensure([], () => r(require('@/page/systemManagement/basicManagement/addSystemRole')), 'addSystemRole');
const updateSystemRole = r => require.ensure([], () => r(require('@/page/systemManagement/basicManagement/updateSystemRole')), 'updateSystemRole');
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
          {
              path: '/systemManagement/userManagement/userRoleManagement',
              component: userRoleManagement,
              meta: [{title: '系统管理', path: '/systemManagement/userManagement/userRoleManagement'}, {title: '用户角色', path: '/systemManagement/userManagement/userRoleManagement'}],
          },
          {
              path: '/systemManagement/basicManagement/systemRole',
              component: systemRole,
              meta: [{title: '系统管理', path: '/systemManagement/basicManagement/systemRole'}, {title: '角色管理', path: '/systemManagement/basicManagement/systemRole'}],
          },
          {
              path: '/systemManagement/basicManagement/addSystemRole',
              component: addSystemRole,
              meta: [{title: '系统管理', path: '/systemManagement/basicManagement/addSystemRole'}, {title: '角色管理', path: '/systemManagement/basicManagement/addSystemRole'},{title: '增加角色', path: '/systemManagement/basicManagement/addSystemRole'}],
          },
          {
              path: '/systemManagement/basicManagement/updateSystemRole',
              component: updateSystemRole,
              meta: [{title: '系统管理', path: '/systemManagement/basicManagement/updateSystemRole'}, {title: '角色管理', path: '/systemManagement/basicManagement/updateSystemRole'},{title: '修改角色', path: '/systemManagement/basicManagement/updateSystemRole'}],
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
