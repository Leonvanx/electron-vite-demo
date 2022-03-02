<template>
    <div id="nav">
        <div>
            <el-button type="primary" @click="infoTest('测试123')">测试</el-button>
            <el-button type="primary" @click="fetchInterface(1, 2)">测试请求</el-button>
            <el-button type="primary" @click="resMsg = ''">清除</el-button>
        </div>
        <div>接口返回报文:{{ resMsg }}</div>
        <el-button type="text" @click="dialogVisible = true">click to open the Dialog</el-button>
        <el-upload
            class="upload-demo"
            drag
            action="http://172.20.10.13:3000/file"
            :http-request="uploadByOwnRequest"
            multiple
            :on-success="handleUploadSuccess"
            :before-upload="handlePreUpload"
        >
            <el-icon class="el-icon--upload">
                <upload-filled />
            </el-icon>
            <div class="el-upload__text">
                Drop file here or
                <em>click to upload</em>
            </div>
            <template #tip>
                <div class="el-upload__tip">jpg/png files with a size less than 500kb</div>
            </template>
        </el-upload>

        <el-dialog v-model="dialogVisible" title="Tips" width="30%" :before-close="handleClose">
            <span>This is a message</span>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="dialogVisible = false">Cancel</el-button>
                    <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
    <router-view />
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { UploadFilled } from '@element-plus/icons-vue'
import { ElMessageBox } from 'element-plus'
import service from "@/libs/utils/request";
import axios from "axios";
import { testApi } from "@apis/test/test"

const resMsg = ref('')
const infoTest = (inputVal: string) => {
    console.log(1)
    ElMessage({
        message: inputVal,
        type: 'success',
    })
}
const fetchInterface = (a: number, b: number) => {
    testApi().then(res => {
        resMsg.value = res;
    }).catch(err => {
        ElMessage({
            message: err,
            type: 'error',
        })
    })
}

const dialogVisible = ref(false)

const handleClose = (done: () => void) => {
    ElMessageBox.confirm('Are you sure to close this dialog?')
        .then(() => {
            done()
        })
        .catch(() => {
            // catch error
        })
}
const handleUploadSuccess = (response: any, file: any, fileList: any) => {
    console.info('successResponse:', response);
    console.info('successFile:', file);
    console.info('successFileList:', fileList);
}

const handlePreUpload = (file: any) => {
    // console.info('beforeUpload:', file);
}

const uploadByOwnRequest = (file: any) => {
    // debugger
    let param = new FormData(); // 创建form对象
    param.append("file", file.file); // 通过append向form对象添加数据

    param.append("chunk", "别的数据"); // 添加form表单中其他数据
    console.log(param.get("file")); // FormData私有类对象，访问不到，可以通过get判断值是否传进去

    let config = {
        headers: { "Content-Type": "multipart/form-data" }
    };

    axios.post("http://172.20.10.13:3000/file", param, config);
}




</script>

<style lang="less" scoped>
</style>
