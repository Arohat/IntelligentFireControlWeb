<template>
    <div class="login_page">
    <div class="logo"></div>
        <div class="login-panel">
        <h1>智慧消防系统</h1>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="ruleForm">
                <el-form-item prop="name">
                    <el-input v-model="ruleForm.name" placeholder="账户">
                    <i slot="prefix"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACNElEQVRYR8XXS6hPURTH8c/1GMiAiLwGSvKIEolCZorEgDJRDExQXomSUFKSQpSRTAwkSkkylJAoUvIuFCIkJSmvlvbV/x7/8z/7f67b3cOz1++3v2fvddbap0Mvj45eXl9dgPmYhenpBe7gOq62+0LtAgzBSSwpWeg01uJTLkg7AMNwDyMqzN9gGt7lQLQDcBkLckxxCYtyYnMBJuN+jmFDTGgeVGlyAdbjWJVZYX4djldpcgHOYlmVWWH+DFZUaXIBbmNGlVlhPjQzqzS5APHpra4yK8yfwJoqTS7ABhypMuvJHBicMrqqBnQyvMKUnIKUuwNhPBdX0KdiJ35iNm7l7FgOQD+MwyPMwSmMLTF/jpW4hgl4hu+tQFoBjMEhLMTA1AO24iu2pWYUX0a8cTSjmziQYg9iFb7gIrYgjuWfUQYwETcQZ984viWoWOBDYW5oAtuM/oW5jwn4aZGgGUA0nbsY1WLrfqTG9DnFDMJU9G2heZnadxfwZgD7sT0ngWrE7MPORl0zgMcYX8M8R/IQk1oBjMTrHKduxEQtedupL+7AYlzohnmONO4JcV/4M4oAm1KW5xjVjYmyfrQMIJJkR13nTF2XRCzuwGFszDSqGxbFLQpT0yPYjT11nTN1u7C3DCBuMHG17smxHOfKAAbgCUb3EMGLVAeinzQ9gng4D+cRPyH/c0QJXpo65V/fsmYU/SCSMSri8Cafay7Yr/SDEtU1blTvi8Kc+0DuYrXieh3gNzV+WCFUFPdQAAAAAElFTkSuQmCC" /></i>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="ruleForm.password" placeholder="密码">
                    <i slot="prefix"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABt0lEQVRYR+3XzUtVQRjH8c9tUa2ijUQRuDCIQGgT7cJFBSIY9LKMNmYgbWtT7lSQIgjaif+BGihEtRAsgvatQoKsCHujZUG1kJG5csDOPTPXA9fFneWZZ37zfV7OzDMNHR6NDu+vXYA+3MQpnMQBfMEMpvE71bFcgD24i3HsLdnkA67iVQpELsBE3Lyp/RbP8QvX0RMn/uI8XlRB5ACcxmuEKHzHNTwrbBAicgOP4rdPOIY/rSByAF7iDP7hBN6VCN/D7Tg3itk6AA7iJ5tF+wC3Wojuw3scxlMM1QEwgJUoNBjz3ko3eD2CVRyvA+AK5qJQLz5WFNdk/Ft+FArzv0tSa6AIcBSfKwCaf8s3HKojApcxH4VSAJoRqA3gIh5nAEzhDnYEcBYP0V91mCTOryMU8JuifVkNhLytYX+ieKrZMs6lAFzAYqpqhl24sML5sDXKIlDMeYZ+pem2mti1AJewUOlPvkFyBLoAxZMvP9DlK5JT0AUo3n4dSUEXYBhLdcY+aoVGJvQTlXfBkdhYlj0+2mULp2tIbyVAMAh39/2a+oHwNniCMXxNBWjXy6x1qU1plmiO8QZrFlUhPeM0fQAAAABJRU5ErkJggg==" /></i>
                    </el-input>
                </el-form-item>
                <el-form-item prop="code">
                    <div style="float: left; width:70%;">
                        <el-input v-model="ruleForm.code" placeholder="验证码">
                        <i slot="prefix"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABlElEQVRYR+3XPWgVURCG4ecaYiFqQFQiSgqtY6pUFpoqRCsLfwqDNgYkkFpIEyGFvSIIgkEQElIbrBJtLKxELG2DjQairRo5cjYs92bXs/eHG2G33Zlv3v3O7M5sQ5+vRp/r27cARzCHwS459BOPsN2sV+TAHTzvUvFM5i6epQLM4GmXAWbxpBcAb0tAR3Es3u8ZQFkjr2GqBqgdqB2oHfgvHbiB5cRZUPYlfI/xqHMbL1JnwRg+dAhwEN9wOOpcQsvcKKP/guEEiCKNMHwex/wtnMSvVAdC3DwW2wQYwUcMxfwFPNhLq8yBQ/iMU/+AaNYI43cD52PeV5zFj6oAIX4SrzBQApEHOIM3OBfjf+MKXhflpyylN/ESBwpEMo2LWMWJGLeDsNq1dH5eJwUgxF/FSsGSejye770cZFhCb8Wc0hNMBQgiE1Ewe8JM+DuO5qqEjr+G9YQGrvxfcDpCXCgQf4fr2EwpHmKqOJDXvIyHCEtnuD7hfmzY1Np/49oFyIpMxzdkqVLVXHCnAO3W3c2rAf4ADmFQIZVhh0IAAAAASUVORK5CYII=" /></i>
                        </el-input>
                    </div>
                    <div style="float: right; height: 30%;">
                        <img width="100%"  height="50" />
                    </div>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">登陆</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
    import md5 from 'js-md5';
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          password: '',
          code:''
        },
        rules: {
          name: [
            { required: true, message: '请输入账户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ],
          code: [
            { required: true, message: '请输入验证码', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$http2
        .post("/sys/login", {
            "userName": this.ruleForm.name,
            "password": md5(this.ruleForm.password),
            "identifyCode": this.ruleForm.code,
        })
        .then(data => {
          console.log("成功");
        }).catch(()=>{
          console.log("失败");
        });

          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>
<style lang="less">
.login_page{
    width: 100%;
    height: 100%;
    background: url('../assets/img/loginbg.png');
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-attachment: fixed;
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
        h1 {
            font-size: 24px;
            color: #333;
            text-align: center;
        }
        .el-button--primary{
            width: 100%;
            height: 50px;
            border-radius: 0;
        }

        .el-input__inner {
            padding-left: 50px;
            height: 50px;
            line-height: 50px;
            border-radius: 0;
        }
        .el-input__prefix {
            top: 11px;
        }
    }
}
</style>

