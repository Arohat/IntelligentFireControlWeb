<template>
    <el-form class="container-form" ref="form" :model="form" label-width="80px">
        <el-form-item label="所属区域">
            <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="请选择" value=""></el-option>
                <el-option label="天津区域" value="shanghai"></el-option>
                <el-option label="上海区域" value="beijing"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="所属项目">
            <el-select v-model="form.project" placeholder="请选择活动区域">
                <el-option label="请选择" value=""></el-option>
                <el-option label="碧桂园" value="shanghai"></el-option>
                <el-option label="万科新城" value="beijing"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="合同编号">
            <el-input v-model="form.number"></el-input>
        </el-form-item>
        <el-form-item label="合同名称">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="维保公司">
            <el-select v-model="form.Maintenance" placeholder="请选择活动区域">
                <el-option label="请选择" value=""></el-option>
                <el-option label="测试公司1" value="shanghai"></el-option>
                <el-option label="测试公司2" value="beijing"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="主联系人">
            <el-input v-model="form.Contact"></el-input>
        </el-form-item>
        <el-form-item label="联系电话">
            <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="开始日期">
            <el-date-picker type="date" placeholder="开始日期" v-model="form.startDate" style="width: 100%;"></el-date-picker>
        </el-form-item>
        <el-form-item label="结束日期">
            <el-time-picker type="fixed-time" placeholder="结束日期" v-model="form.endDate" style="width: 100%;"></el-time-picker>
        </el-form-item>
        <el-form-item label="合同状态">
            <el-select v-model="form.status" placeholder="请选择活动区域">
                <el-option label="请选择" value=""></el-option>
                <el-option label="有效" value="有效"></el-option>
                <el-option label="失效" value="失效"></el-option>
                <el-option label="作废" value="作废"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="备注信息">
            <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item label="备注信息">
            <el-upload
                    class="upload-demo"
                    ref="upload"
                    :on-remove="handleRemove"
                    :file-list="form.fileList"
                    :multiple="false"
                    :auto-upload="false">
                <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                <!--<el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>-->
                <!--<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
            </el-upload>
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
                    number: '',
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
//                        [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
                }
            }
        },
        methods: {
            onSubmit() {
                let query = this.form;
                console.log(query);
                this.$http2.post("/sys/informationAdded", query)
                    .then(data => {
                        console.log("成功");
                    }).catch(()=>{
                    console.log("失败");
                });
            },
            submitUpload() {
                this.$refs.upload.submit();
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
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
