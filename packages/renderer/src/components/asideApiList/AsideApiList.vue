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
            <h1>{{ msg }}</h1>
            <h1 class="text-left mt-[10px]">API列表</h1>
            <div
                class="scrollbar-demo-item border border-black-100 w-[580px] hover:shadow-md mt-[10px] mb-[10px]"
                v-for="item in props.testNumber.sec.number"
                :key="item"
            >{{ `API:${item}` }}</div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref, toRefs } from 'vue';
import { Search } from '@element-plus/icons-vue';
const searchInput = ref('');
const props = defineProps<{
    testNumber: {
        sec: {
            number: number,
        },
        msg: string,
    }
}>()
const { msg } = toRefs(props.testNumber)
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