<template>
    <el-form class="container-form" ref="form" :model="form" label-width="80px">
        <el-form-item label="上级菜单">
            <el-select v-model="form.parentId" placeholder="请选择">
                <el-option label="请选择" value=""></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="权限配置">
            <el-select v-model="form.powerId" placeholder="请选择">
                <el-option label="请选择" value=""></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="菜单名称">
            <el-input v-model="form.sortIndex"></el-input>
        </el-form-item>
        <el-form-item label="菜单图标">
            <el-input v-model="form.imageUrl"></el-input>
        </el-form-item>
        
        <el-form-item label="菜单地址">
            <el-input v-model="form.Contact"></el-input>
        </el-form-item>
        <el-form-item label="备注信息">
            <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="success" round @click="onSubmit">保存</el-button>
            <el-button type="info" round>返回</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    parentId: '',
                    Maintenance:'',
                    Contact:'',
                    phone:'',
                    name: '',
                    status: '',
                    region: '',
                    project:'',
                    startDate: '',
                    endDate: '',
                    desc: '',
                    fileList: []
                }
            }
        },
        methods: {
            onSubmit() {
                let query = this.form;
                console.log(query);
                this.$http2.post("/sys/menu/add", query)
                    .then(data => {
											if(data.data.code=0){
                        this.$message({
														type: 'success',
														message: '操作成功!'
														});
												}else{
													
												}
                    }).catch(()=>{
                    console.log("失败");
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
