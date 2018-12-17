const api={
    'login':'/sys/login',
    'getImage':'/sys/getImage',
    //查询系统角色（包括角色查询）
    'querySystemRole':'/basic/role/queryList',
    //删除系统角色
    'deleteSystemRole':'/basic/role//deleteRole',
    //修改系统角色
    'updateSystemRole':'/basic/role/updateRole',
    //查询系统角色分类
    'querySystemRoleType':'/basic/role/queryRoleType',
    //添加系统角色
    'addSystemRole' : '/basic/role/add',

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
