<template>
	<el-form class="container-form" label-width="80px">
		<el-form-item label="所属机构">
			<el-select v-model="organizationId" placeholder="请选择">
				<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
				</el-option>
			</el-select>
		</el-form-item>
		<el-form-item label="部门名称">
			<el-input placeholder="请输入内容" v-model="name" clearable>
			</el-input>
		</el-form-item>
		<el-form-item label="上级部门">
			<el-select v-model="value" placeholder="请选择">
				<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
				</el-option>
			</el-select>
		</el-form-item>
	</el-form>
</template>

<script>
	import api from '@/api/api';
	import http from '@/http'
	export default {
		data() {
			return {
				name: '',
				value: '',
				organizationId: '',
				options: [{
					value: '选项1',
					label: '总经办'
				}, {
					value: '选项2',
					label: '研发部'
				}],

			}
		},
		created: function() {
			this.$http2.post(api.department+'/add', {
					/*            "userName": this.ruleForm.name,
					            "password": md5(this.ruleForm.password),
					            "identifyCode": this.ruleForm.code,*/
				})
				.then(data => {
					//this.$router.push({ path: '/index'})
					console.log("成功");
				}).catch(() => {
					console.log("失败");
				});
		}
	}
</script>

<style lang='less'>
	.container-form {
		background: #fff;
		padding: 20px;
	}
</style>