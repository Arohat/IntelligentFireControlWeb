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
    //查询接口用户
    'searchPage' : '/basic/interfaceAccount/searchPage',

    'findMenuByUser':'/sys/findMenuByUser',
    'findMenuByUserAndParentId':'/sys/menu/findMenuByUserAndParentId',
    'findTwoAndThreeUserMenuTree':'/sys/menu/findTwoAndThreeUserMenuTree',
	'queryAllSystemMenuInfo':'/sys/menu/queryAllSystemMenuInfo',//系统菜单那查询
	//部门列表查询
    'departmentQuery':'/basic/department/query',
    //部门列表添加
    'departmentAdd':'/basic/department/add',
    //部门列表编辑
    'departmentEdit':'/basic/department/edit',
    //部门树形
    'departmentTree':'/basic/department/tree',
    //日志列表查询
    'systemLogQuery':'/basic/systemLog/query',
    //日志内型查询
    'getLogType':'/basic/systemLog/getLogType',
    //日志内型查询
    'departmentProhibit':'/basic/department/prohibit',
};
export default api;
