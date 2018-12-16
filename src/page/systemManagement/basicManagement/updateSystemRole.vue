<template>
    <el-form class="container-form" :rules="rules" ref="form" :model="form" label-width="80px">
    	<el-form-item label="id">
            <el-input v-model="form.id"></el-input>
        </el-form-item>
        <el-form-item label="选择类型">
            <el-select v-model="form.roleType" :placeholder=roleTypeName>
                <el-option
	            v-for="item in developments"
	            :key="item.type"
	            :label="item.typeName"
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
		         roleName: [
		            { required: true, message: '请输入角色名', trigger: 'blur' }
		          ]
		        },
            }
        },
        created:function(){
        	this.getParams();
//    		this.onQueryRoleType();
    	},
    	watch: {
		  // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
		  '$route': 'getParams'
		},
        methods: {
        	getParams(){
        		var　row = this.$route.query.row;
        		console.log(row);
        		console.log(this.form.typeName);
        		this.form = row;
        		this.roleTypeName = row.typename;
        		console.log(this.roleTypeName);
        		
        	},
        	/**
        	 * 查询角色类型
        	 */
		    onQueryRoleType(){
		      	this.$http2.get(api.queryRoleType, {
		        	
		        })
		          .then(data => {
		           this.developments = data;
		          }).catch(()=>{
		          console.log("**********失败");
		        });
		      },
        	onSkip(){
     		 this.$router.push({path: '/systemManagement/basicManagement/systemRole'});
     		},
            onSubmit() {
                let query = this.form;
                console.log(query);
                this.$http2.post(api.addRole, {
		        	'name' :this.form.roleName,
		        	'type': this.form.roleType
		        })
		          .then(data => {
		            console.log(data);
		           if(data.code=='200'){
	          			this.$message({
	                	message: data.msg,
	            		});
	            		this.onSkip();
		          	}else{
	          			this.$message({
	                	message: data.msg,
	            		});
		          	}
		          }).catch(()=>{
		          console.log("**********失败");
		        });
            },
            handlebeforeupload(file,fileList){
                this.form.fileList = fileList
            },
            handleRemove(file, fileList) {
                this.form.fileList = fileList
            },
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
