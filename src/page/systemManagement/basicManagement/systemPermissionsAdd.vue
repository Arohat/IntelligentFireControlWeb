<template>
	<div>
		<el-breadcrumb separator-class="el-icon-arrow-right">
	      <el-breadcrumb-item :to="{ path: '/manage' }">基础管理</el-breadcrumb-item>
	      <el-breadcrumb-item>系统权限</el-breadcrumb-item>
	      <el-breadcrumb-item>编辑</el-breadcrumb-item>
	    </el-breadcrumb>
		<el-form class="container-form" :model="form" :rules="rules" ref="form" label-width="200px">
	        <el-form-item label="所属模块" prop="displayName">
	            <el-select v-model="form.modelName" placeholder="请选择所属模块">
	                <el-option
				      v-for="item in modelNameoptions"
				      :key="item"
				      :label="item"
				      :value="item">
				    </el-option>
	            </el-select>
	        </el-form-item>
	        
	        <el-form-item label="系统权限名称" prop="powerName">
	            <el-input v-model="form.powerName" placeholder="请输入系统权限名称"></el-input>
	        </el-form-item>
	        <el-form-item label="系统权限值" prop="displayName">
	            <el-input v-model="form.displayName" placeholder="请输入系统权限值"></el-input>
	        </el-form-item>
	 
	        <el-form-item label="备注信息">
	            <el-input type="textarea" v-model="form.remark"></el-input>
	        </el-form-item>
	       
	        <el-form-item>
	            <el-button type="success" round @click="onSubmit('form')">保存</el-button>
	            <el-button type="info" @click="goBack('form')" round>返回</el-button>
	        </el-form-item>
	    </el-form>
	</div>
    
</template>

<script>
	import api from '@/api/api';
    export default {
        data() {
            return {
            	paramPageNum:'',
            	modelNameoptions:[],
                form: {
                    modelName: '',
                    powerName:'',
                    displayName:'',
                    remark:'',
                },
                rules: {
			          modelName: [
			            { required: true, message: '请选择消息类型', trigger: 'change' }
			          ],
			          powerName: [
			            { required: true, message: '权限名称不能为空', trigger: 'blur' }
			          ],
			          displayName: [
			            { required: true, message: '权限展示名称不能为空', trigger: 'blur' }
			          ]
			    }
            }
        },
        created:function() {
        	this.paramPageNum = this.$route.query.parampageNum
        	console.log(this.paramPageNum)
        	this.$http2.post('/basic/modelPower/getModelName', {})
		          .then(data => {
		          	if(data.code==0){
		          		this.modelNameoptions = data.data
		          	}
		          }).catch(()=>{
		          console.log("失败");
		        });
        },
        methods: {
        	getModelName(){
        		this.$http2.post(api.getModelName, {})
		          .then(data => {
		          	if(data.code==0){
		          		this.modelNameoptions = data.data
		          	}
		          }).catch(()=>{
		          console.log("失败");
		        });
        	},
            onSubmit(formName) {
            	var param = this.form
                this.$refs[formName].validate((valid) => {
		          if (valid) {
		            this.$http2.post("/basic/modelPower/saveModelPower", param)
			          .then(data => {
			          	if(data.code==0){
			          		this.successOpen()
			          	}else{
			          		this.faOpen()
			          	}
			          }).catch(()=>{
			          	console.log("失败");
			        });
		          } else {
		            return false;
		          }
		        });
            },
            goBack(formName){
            	this.$refs[formName].resetFields();
            	this.$router.push({
				    path: '/systemManagement/basicManagement/systemPermissions',
				    query: {
				    	parampageNum:this.paramPageNum
				    }
				})
            },
            modelNameChange(val){
            	console.log(this.form.modelName)
            },
            successOpen() {
		        this.$alert('操作成功', '信息', {
		          confirmButtonText: '确定',
		          callback: action => {
//		            this.$message({
//		              type: 'success',
//		              message: `保存成功`
//		            });
		            this.$router.push({
					    path: '/systemManagement/basicManagement/systemPermissions',
					    query: {
					    	parampageNum:1
					    }
					})
		          }
		        });
		     },
		     faOpen() {
		        this.$alert('操作失败', '信息', {
		          confirmButtonText: '确定',
		          callback: action => {
//		            this.$message({
//		              type: 'danger',
//		              message: `保存失败`
//		            });
		          }
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
