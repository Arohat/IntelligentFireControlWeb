<template>
    <div class="login_page">
    <div class="logo" :style="logo"></div>
      <div class="login-panel" :style="loginPanel">
        <h1>智慧消防系统</h1>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="ruleForm">
          <el-form-item prop="name">
            <el-input v-model="ruleForm.name" placeholder="账户">
              <i slot="prefix"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB8klEQVRIS83VsYsTQRQG8O+bwcSFa5TgFVoosbIQLcSQhU1m5SxiHxAELSyU8084S7G0EAULEbSR9KYQdyarkgMREbWwELERRIigoiZF9smCBzndZC97BNxy9r3vxzxmdokFP1xwPv4PIIqivUqpOwCOANgpIq9JrhpjXuZNIHcHcRwfGI/H6ySXJ8NE5KfWeqXRaPRnIbmAtfYpSX9KyIdyuXyoXq//mobMBOI4PpokyYucMZw2xtwvBDjnzgC4lwNcMcasFQVqANZnASJyNgzDu4WAbrdb9jzvLYD9WQEi8oPkQWPMp0JA2uScawJ4CGBHRsh5Y8ztuU9Rp9PRlUplFUADQKS1fpIkyTUAh9N7AOCNiFwGsETyHIDnnuddr9Vq3/7GMk+RtfYmyYsbxSLSEZFbg8Egbrfb416vdyxJkjT4Akn1py5qNpsrJGUS+Qew1p4g+Sjvhk55f8kYcyMPeECyVQQQkfdhGFZnAs65LwB2FQHSnlKptOz7/ueN/k0j6vf7u0ej0aBoeNqnlPInv0+bgCiKqkqpd9sBRORUGIbdzB0455YAfN8OoLU+HgTBs0wgXbTWxiSDIoiIfBwOh9VWqzWaCjjn9gG4KiInSe7ZCiQiX0k+1lqvBUHwauYp2krgPDW5P5x5wrJqFw78Bh1tpxkkBcYJAAAAAElFTkSuQmCC" /></i>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="ruleForm.password" placeholder="密码">
              <i slot="prefix"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABvElEQVRIS72Vv4sUQRCFv1rZnePA4IRFMDERzAxEDNYFpxoUhRNMDQwEQwPBRNREBC8R/RNMLpA1FASR6xrZ5II1NVQQIzlQ2UBxYUpGHFj3t6Njp029r6vrvW6h5iWr6g8Gg/XhcHgFaLv791artd3tdt8vq18JYGZXgfuFeClYQETkUZIkdzudztd5oKUAM3sA3HD3XESeAk+Aw8A14Aiwm6bpKRHJZ0EWAmKMR4E3wKjRaJxJ07RfipjZmru/EpGTwGVV3f5jgJndA+64+1YI4dakgJl1gQL6QlXPVQE8Azbd/UQI4fWkgLs3siz7Buyp6qEqAAPSYriqujdLwMwKJ+1X1Y0qgAjoIkCM8YOIrKvqgZUB/X5/YzQaHQMeishxd78oIl/mWLFw1hpwodlsvp3MxpSLsiy7lOf5YxFJloVoxr7/MsTtcm8KYGbPgfMVxH+WuPvHEMLBuYAY446IhKoA4PP4wKc6qB1gZqVzqjaxuIP/ASjDVVsH9QJijJmInK56/FVcVC/gHwz50/i7NCvJW8DNv7iil6p6dm6Se73evna7fb14gitA3iVJ0hv/o5f+yRUgv5X8AMxZuRmch6HEAAAAAElFTkSuQmCC" /></i>
            </el-input>
          </el-form-item>
          <el-form-item prop="code">
            <div style="float: left; width:70%;">
              <el-input v-model="ruleForm.code" placeholder="验证码">
                <i slot="prefix"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABkklEQVRIS+2VvUsDQRDF3zMJCHZ22gg2FlYqVpJwc42IlYgBwdLWRlD8KiwUiWBhq51WQhobIRY7gaSMaKGthdjdH6BwysrBBTS55C5Ru1y5s+/9mNmZG+KfP/6zP5oAxpgxkkPdgK21nuu6T9+1UYAqyZluAABqIjIdB7gjOdkl4EFEJn4FEJGorAskNwH0AECvRDDGtG3TvyhRjeRUqzloATgmuQHgXkR+zFBTT6vqDYC5TgCqeglgxVp767rubNygbZIsJAWUSqWBTCbzQnKQ5I7jOEdtAdVqddj3/Veg+UcYCBtLpKrnAFYBvKVSqZFcLue1BQRBY8wJyfWoLL4DVHUXwEF471BE9ho1kfvAWttXLpeLABYaBQEgzPIMwHwYv/Y8bzGfz38mAgSXVDVtrb0gudwg2gewBaA/PL8KHlhEPqIybrvRrLVU1bXw0euGdZ93ANuO45yStK2aItHKrFQqo77vH5FcCo2K6XR6K5vNPsftjUSAuokxZpwkReQxzrge7wiQ1DS2TbsxaqX5AhyfuRkjVK2QAAAAAElFTkSuQmCC" /></i>
              </el-input>
            </div>
            <div style="float: right; width: 30%;height: 50px;">
              <img width="100%" @click="getImg" :src="codeUrl" height="40" />
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
    import api from '@/api/api';
		import http from '@/http'
  export default {
    data() {
      return {
        loginPanel:{
          width:'',
          height:'',
        },
        logo:{
          width:'',
          height:'',
        },
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
        },
        codeUrl:''
      };
    },
    methods: {
      init(){
        var loginpanelWidth = document.body.offsetWidth * 498 / 1920;
        var loginpanelHeight = document.body.offsetHeight * 464 / 974;
        var percentHeight = 464 / 974;
        this.loginPanel.height=loginpanelHeight+'px';
        this.loginPanel.width=loginpanelWidth+'px';
        this.logo.width=(loginpanelWidth * 170 / 498)+'px';
        this.logo.height=(loginpanelHeight * 55 / 464)+'px';
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$http2.post(api.login, {
            "userName": this.ruleForm.name,
            "password": md5(this.ruleForm.password),
            "identifyCode": this.ruleForm.code,
            })
            .then(data => {
							this.$router.push({ path: '/index'})
              console.log("成功");
            }).catch(()=>{
              console.log("失败");
            });

          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      getImg(){
				this.codeUrl = http.defaults.baseURL + '/sys/getImage?d='+Math.random();
      }
    },
    created(){
      this.getImg()
//      this.init()
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
      background-size: contain;
        width: 170px;
        height: 55px;
    }
    .login-panel {
        width: 350px;
        height: 350px;
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
            height: 40px;
            border-radius: 0;
        }

        .el-input__inner {
            border-radius: 0;
        }
        .el-input__prefix {
            top: 7px;
        }
    }
}
</style>

