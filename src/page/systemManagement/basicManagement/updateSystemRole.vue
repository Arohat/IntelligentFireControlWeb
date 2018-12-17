<template>
    <el-form class="container-form" :rules="rules" ref="form" :model="form" label-width="80px" @change="handlerChange">
    	<el-form-item label="id">
            <el-input v-model="form.id" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="选择类型">
            <el-select v-model="form.roleType" filterable :placeholder=roleTypeName>
                <el-option
	            v-for="item in developments"
	            :key="item.type"
	            :label="item.typename"
	            :value="item.type">
	          </el-option>
            </el-select>
        </el-form-item>        
        <el-form-item label="输入名称">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="success" round @click="onSubmit">保存</el-button>
            <el-button type="info" round @click="onSkip">返回</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
	import api from '@/api/api';
    export default {
        data() {
            return {
            	roleTypeName:'text',
                form: {
                    id:0,
                    roleType: '',
                    name :'',
                },
                developments:[],
                rules: {
                 roleType: [
		            { required: true, message: '选择类型', trigger: 'blur' }
		          ],
		         name: [
		            { required: true, message: '请输入角色名', trigger: 'blur' }
		         ]
		        },
            }
        },
        created:function(){
        	this.getParams();
      		this.onQueryRoleType();
    	},
    	watch: {
		  // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
		  '$route': 'getParams'
		},
        methods: {
        	getParams(){
        		var　row = this.$route.query.row;
        		let  typeName = row.typename;
        		this.roleTypeName = typeName;
        		this.form = row;
        		
        	},
        	/**
        	 * 系统角色修改
        	 */
        	SystemRoleUpdate(data){
				 this.$confirm('是否修改?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.onSubmit();
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消'
                    });
                });
			},
        	/**
        	 * 查询角色类型
        	 */
		    onQueryRoleType(){
		      	this.$http2.get(api.querySystemRoleType, {
		        	
		        })
		          .then(data => {
		           this.developments = data;
		          }).catch(()=>{
		          console.log("**********错误");
		        });
		      },
		      /**
		       *返回
		       */
        	onSkip(){
     		 this.$router.push({path: '/systemRole'});
     		},
     		/**
     		 * 提交修改数据
     		 */
            onSubmit() {
                let datas = this.form;
                this.$http2.post(api.updateSystemRole, {
                	'id' : this.form.id,
		        	'name' :this.form.name,
		        	'type': this.form.roleType
		        })
		          .then(data => {
		          	if(data.code == 0) {
						this.$message({
							type: 'success',
							message: data.msg
						});
						this.onSkip();
					} else {
						this.$message.error(data.msg);
					}
		          }).catch(()=>{
		          console.log("********错误");
		        });
            },
            handlebeforeupload(file,fileList){
                this.form.fileList = fileList
            },
            handleRemove(file, fileList) {
                this.form.fileList = fileList
            },
            handlerChange(){
            	console.log('*********');
            }
        }
    }
</script>

<style lang='less'>
    .container-form{
        background: #fff;
        padding: 20px;
    }
    .demo-form-inline{
        background: #fff;
        margin: 15px 0;
        padding: 15px;
    }
    .el-pagination{
        text-align: right;
    }
</style>
