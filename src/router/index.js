import Vue from 'vue'
import Router from 'vue-router'
import manage from '@/page/index'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const index = r => require.ensure([], () => r(require('@/page/firstPage')), 'index');
const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const userManagement = r => require.ensure([], () => r(require('@/components/userManagement')), 'userManagement');
const informationAdded = r => require.ensure([], () => r(require('@/components/informationAdded')), 'informationAdded');
const department = r => require.ensure([], () => r(require('@/components/department')), 'department');
const systemMenu = r => require.ensure([], () => r(require('@/page/systemManagement/basicManagement/systemMenu')), 'systemMenu');
const systemMenuAdd = r => require.ensure([], () => r(require('@/page/systemManagement/basicManagement/systemMenuAdd')), 'systemMenuAdd');
//系统日志
const systemLog = r => require.ensure([], () => r(require('@/page/systemManagement/basicManagement/systemLog')), 'systemLog');
//部门信息
const departmentManagement = r => require.ensure([], () => r(require('@/page/systemManagement/department/departmentList')), 'departmentManagement');
//部门树形
const departmentTree = r => require.ensure([], () => r(require('@/page/systemManagement/department/departmentTree')), 'departmentTree');
//部门添加
const departmentAdd = r => require.ensure([], () => r(require('@/page/systemManagement/department/departmentAdd')), 'departmentAdd');
export default new Router({
	routes: [{
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
			meta: {
				requireAuth: true,
			},
			children: [{
					path: '/index',
					component: index,
					meta: [],
				},
				{
					path: '/department',
					component: department,
					meta: [{
						title: '用户管理',
						path: '/department'
					}, {
						title: '用户管理',
						path: '/department'
					}],
				},
				{
					path: '/systemMenu',
					component: systemMenu,
					meta: [{
						title: '系统菜单',
						path: '/systemMenu'
					}, {
						title: '系统菜单',
						path: '/systemMenu'
					}],
				},
				{
					path: '/userManagement',
					component: userManagement,
					meta: [{
						title: '用户管理',
						path: '/userManagement'
					}, {
						title: '用户管理',
						path: '/userManagement'
					}],
				},
				{
					path: '/informationAdded',
					component: informationAdded,
					meta: [{
						title: '用户管理',
						path: '/informationAdded'
					}, {
						title: '用户管理',
						path: '/informationAdded'
					}],
				},
				{
					path: '/systemMenuAdd',
					component: systemMenuAdd,
					meta: [{
						title: '系统菜单',
						path: '/systemMenuAdd'
					}, {
						title: '系统菜单',
						path: '/systemMenuAdd'
					}],
				},
				{
					path: '/systemLog',
					component: systemLog,
					meta: [{
						title: '系统日志',
						path: '/systemLog'
					}, {
						title: '系统日志',
						path: '/systemLog'
					}],
				},
				{
					path: '/departmentManagement',
					component: departmentManagement,
					meta: [{
						title: '部门管理',
						path: '/departmentManagement'
					}, {
						title: '部门管理',
						path: '/departmentManagement'
					}],
				},
				{
					path: '/departmentTree',
					component: departmentTree,
					meta: [{
						title: '部门树形',
						path: '/departmentTree'
					}, {
						title: '部门树形',
						path: '/departmentTree'
					}],
				},
				{
					path: '/departmentAdd',
					component: departmentAdd,
					meta: [{
						title: '部门添加',
						path: '/departmentAdd'
					}, {
						title: '部门添加',
						path: '/departmentAdd'
					}],
				}
			]
		}
	]
})