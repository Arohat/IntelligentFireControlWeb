<template>
    <div class="login_page">
    <div class="logo"></div>
        <div class="login-panel">
        <h1>智慧消防系统</h1>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="ruleForm">
                <el-form-item prop="name">
                    <el-input v-model="ruleForm.name" placeholder="账户">
                    <i slot="prefix"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC8klEQVRYR8WWS2jUUBSG/5NURouLLhQVwReiiKiIL0RQ8YEv0KVvVBRmp9Jp7x1n1Y2Qm7TjohRECorgg+50UUF84K5qEVQQfGARURRREO1icJJfAi7q2Jl7I4Vme/7znS/3JCGCcb5knOfjvwQ6OzunJElyGMC6PzfwREQG2tvb72W9oUwCPT09k4eHh7sBHAQwYZRh/dVq9WipVPriKuIsUC6XJ1Wr1fsA1jSCk/zc1NS0qlAovHeRcBYwxlwTkX0uUJKDWutVLlkngSiKNpG86wIckdmllOq39TgJhGF4EcBRG6ymfkkpdczW4yowYNt97SCSA1rrtWMiYIx5JiJLbLCRdZLPtdZLbT1OJ2CMuSEiu22wmvodpdRWW4+rwHER6bXBaupnlFKBrcdJ4M834C2A6TZgWif5NY7jhaVS6ast7ySQQsIw3AAgfRV9CzQGsFkp9cA2PK07CZTL5ZmVSiXned5sAFdEZEYdeJwkySGSj3K5XKW1tfWDTaKhgDFmJYBeEVlGsgrgbBzH3b7vnxKRNSSXicg0AN9IXgZwXkQOkCyJSBPJpwBOaK0H64nUFQiCYL3nebcB5Gper0ER6SZ5R2v9Ma0FQTDL87yNJE+LyPKaYRUA2+qtZFSBvr4+f2ho6JWIzLMc4WuSE0RkjiX3ieQCrfWP2tyoAmEY7gdw1ba/jPVWpdQ5JwFjTL+I7Mg4wBZ/rJRabRXo6OjwmpubfwKYZCNmqZNMWlpaJubz+V8j+/5ZgTFmkYi8yALPkF2hlHrSUCAMw+0AbmWAOkdJ7tFa37SdwBERueRMzRY8ppT6i/3PCqIoypM8n43rnM4rpS7YVrAXwHVnZIZgkiR7i8ViX0OBrq6uBXEcv8zAdY76vr+wUCi8aiiQFsMwTB/C9GEcs4vkLa31Tut3IA1EUTQ3SZKHIjJ1LAxIvvF9f0tbW9s7J4E0FATBYs/zTgKY7/APUM+zQvI2yd5isfh9tJDT/8BYnEI9xrgL/AbPqBgwNJoGegAAAABJRU5ErkJggg==" /></i>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="ruleForm.password" placeholder="密码">
                    <i slot="prefix"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACh0lEQVRYR8WXv4sTURDHZ+5yd7nnTxAEBW0srtDGysI/wu5ELQ60sZQIM5Xy0Ca7CxHSxeqKw+IU/wrrKxSxsYggqIVC1Msllx9f2WDC3prdt5usZMrkzcxnv2/e9+0yLTh4wf0pM4C1tmyM2SSi60R0mYg2AKwQ0Tsi+sDMb0ql0stKpXKQ56EyAQRBcAPAcyI6m1YcwHciuq+qr7JCOAGCILgNYIcos1ogorsisp0FIhUgCIIrAPaIKJR6FADeA3g4HA73yuXyoNfrXWXme0R0K7Kmz8zXRCTMTY1UAM/ztpl5K1Jhp91ub1lrh/Gqnuc9Y+YHkd9fiMideQE+MfPFSJFzIvJ1WlHf9y8R0ceICl9U9fxcAL7vd4ho7a/0Q1VdTiq4u7u73Gw2+xGA1PXjda4t6DFzKQtAo9FYabVah0UDDJh5KQuAtXbVGNONKDQQkRF8WqQq4Pt+eKTG058qab1eX+t0OuGWjdf3VXVyepIgEgEAcBAEk2kHkApQq9XW+/1+uzCAvENlrTXGmP3Ik/ZEZDXXFlSr1U1mfsLMG67EnP+/BfB0mkUf2QLf97+5/D5n4+jyHyJyJp4fB5ic+zkaTU0FMHUojwB4ntdlZue+zQg3dSbiCoRG4jw6swAAOFTVkatGI67AxPlmaeLI6YpI2TUDoZcn+v08UAA6qrruUmBivfM0S8g9EBHjUiB0Pudb0ixwANqqeswFMPH+WZo4cvZF5PjCAAD8VtUTiQDxy6doBQD8UtWTiQDW2iVjzKDoxpF6P0XkVCJA/PYrGgRAS1VPu2YgvM//OatFwAD4rKoXXAA3ATxi5vDTq7AIvyWI6LGqvk4FKKxjjkL/xXRy9Kc/kFg8MJ//o2kAAAAASUVORK5CYII=" /></i>
                    </el-input>
                </el-form-item>
                <el-form-item prop="code">
                    <div style="float: left; width:70%;">
                        <el-input v-model="ruleForm.code" placeholder="验证码">
                        <i slot="prefix"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACGElEQVRYR+2WP4jUQBjF38vtChH/wKGiKLJorVZWFmp1qJWFq4XiNQpyYLGQScAmBxYzs5BGEQ4ERRA8rBUr/zQWViKWtmKjB2o75pNIAuFMdrN7e6zCTpvve+83j28yQ0x5ccr++DcBjDHbAdwE0J5EQiRdmqZ3oij6vl6vMgFr7SKAB5MwL2lcU0rdbwpwHcDKJAFEZCkMw3ubAfBmAOgRAPPZ900DUErVDrIx5jnJMzOAWQKzBGYJ/JcJXATwpMldMOhPaK19B+B4rnNVKfWo0V2gtT7med77jQDEcbzF9/1vJLflOqeUUn/dG7X/cWvtFwB7h0HUJWCtXQJwN+9f63Q6e7rd7q9GCWRFxphbJG+PA6C1PkjyA8mdWT/JOAiC5Sqt2gTiON7q+/4nkvsGQaxPIEmSeefcKwBH876vInIoDMOfIwFkxVrrBc/zngGYq4MoAxhjDpB8DeBwfvRSkueUUi/q+oc+SrXWl0g+JulViRQA1tqTIvKU5O68TgAsVk1+WWcoQFbc7/fPi8hq1SPVOber1Woti8iNAlJEHMnLSqmsZ+BqBJAP5WkAq6UdFsI/AOwouayRvBAEwcth5n8GtElRUZMkyX7nXLarE1V9IvK23W53e73e56a6IwEUotbasyKiSWaPzmx9TNM0iqIoG9iR1lgAhYMx5grJOaXUw5FcS8UbAhjXdORTMAmjOo2pJ/Abw9wcMKGhxsIAAAAASUVORK5CYII=" /></i>
                        </el-input>
                    </div>
                    <div style="float: right; width: 30%;height: 50px;">
                        <img width="100%"  height="50" />
                    </div>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
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
            this.$http2.post("/sys/login", {
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

