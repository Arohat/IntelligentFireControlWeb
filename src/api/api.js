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
	'queryAllSystemMenuInfo':'/sys/menu/queryAllSystemMenuInfo',//系统菜单那查询
	//部门列表查询
    'departmentQuery':'/basic/department/query',
    'departmentTree':'/basic/department/tree',
    //日志列表查询
    'systemLogQuery':'/basic/systemLog/query',
    //日志内型查询
    'getLogType':'/basic/systemLog/getLogType',
    //日志内型查询
    'departmentProhibit':'/basic/department/prohibit',
};
export default api;
