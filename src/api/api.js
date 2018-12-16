const api={
    'login':'/sys/login',
    'getImage':'/sys/getImage',
    'queryListRole':'/basic/role/queryList',
    'deleteListRole':'/basic/role//deleteRole',
    'updateRole':'/basic/role/updateState',
    'queryRoleType':'/basic/role/queryRoleType',
    'addRole' : '/basic/role/add',
    
    'findMenuByUser':'/sys/findMenuByUser',
    'findMenuByUserAndParentId':'/sys/menu/findMenuByUserAndParentId',
    'findTwoAndThreeUserMenuTree':'/sys/menu/findTwoAndThreeUserMenuTree',
	'queryAllSystemMenuInfo':'/sys/menu/queryAllSystemMenuInfo'//系统菜单那查询
};
export default api;
