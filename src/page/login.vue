<template>
    <div class="login_page">
    <div class="logo"></div>
        <div class="login-panel">
        <h1>智慧消防系统</h1>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="ruleForm">
                <el-form-item prop="name">
                    <el-input v-model="ruleForm.name">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="ruleForm.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">登陆</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          password: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style>
.login_page{
    width: 100%;
    height: 100%;
    background: url('../assets/img/loginbg.png');
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-attachment: fixed;
}
.logo {
    position: fixed;
    top: 3.4%;
    left: 5%;
    background: url(../assets/img/loginlogo.png) no-repeat;
    width: 170px;
    height: 55px;
}
.login-panel {
    width: 438px;
    height: 424px;
    overflow: hidden;
    background-color: #fff;
    margin: 0;
    padding: 20px 30px;
    position: fixed;
    top: 17%;
    right: 8.6%;
}
h1 {
    font-size: 24px;
    color: #333;
    text-align: center;
}
</style>

