<template>
    <el-container>
        <el-header v-if="false">
            <MyHeader></MyHeader>
        </el-header>
        <el-container>
            <el-aside width="600px">
                <MyAside></MyAside>
            </el-aside>
            <el-main>
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</template>
<script setup lang="ts">
import MyAside from './comps/MyAside.vue';
import MyHeader from './comps/MyHeader.vue';
</script>
