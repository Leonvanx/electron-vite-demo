<template>
    <div class="mt-[10px] ml-[10px]">
        <div class="w-1/2">
            <el-input v-model="searchInput" placeholder="Type something">
                <template #prefix>
                    <el-icon class="el-input__icon">
                        <search />
                    </el-icon>
                </template>
            </el-input>
        </div>
        <div class="max-h-[600px] overflow-auto">
            <h1 class="text-left mt-[10px]">API列表</h1>
            <div
                class="scrollbar-demo-item border border-black-100 w-[580px] hover:shadow-md mt-[10px] mb-[10px]"
                v-for="item in 20"
                :key="item"
            >{{ `API:${item},Method:${Math.random() < 0.5 ? 'GET' : 'POST'}` }}</div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import { Search } from '@element-plus/icons-vue'
const searchInput = ref('')
</script>

<style lang='less' scoped>
.scrollbar-demo-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    text-align: center;
    border-radius: 10px;
}
</style>