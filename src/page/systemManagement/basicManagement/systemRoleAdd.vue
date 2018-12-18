<template>
    <el-form class="container-form" :rules="rules" ref="form" :model="form" label-width="80px">
        <el-form-item label="选择类型">
            <el-select v-model="form.roleType" filterable placeholder="请选择活动区域">
                <el-option label="请选择" value=""></el-option>
                <el-option
	            v-for="item in developments"
	            :key="item.type"
	            :label="item.typename"
	            :value="item.type">
	          </el-option>
            </el-select>
        </el-form-item>
        
        <el-form-item label="输入名称">
            <el-input v-model="form.roleName"></el-input>
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
                form: {
                    
                    roleType: '',
                    roleName :'',
                },
                developments:[],
                rules: {
		         roleName: [
		            { required: true, message: '请输入角色名', trigger: 'blur' },
		            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
		          ]
		        },
            }
        },
        created(){
      		this.onQueryRoleType();
    	},
        methods: {
        	/**
        	 * 查询角色类型
        	 */
		    onQueryRoleType(){
		      	this.$http2.get(api.querySystemRoleType, {
		        	
		        })
		          .then(data => {
		            console.log(data);
		           this.developments = data;
		          }).catch(()=>{
		          console.log("**********失败");
		        });
		      },
        	onSkip(){
     		 this.$router.push({path: '/systemRole'});
     		},
            onSubmit() {
                let query = this.form;
                console.log(query);
                this.$http2.post(api.addSystemRole, {
		        	'name' :this.form.roleName,
		        	'type': this.form.roleType
		        })
		          .then(data => {
		            console.log(data);
		           if(data.code==0){
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
