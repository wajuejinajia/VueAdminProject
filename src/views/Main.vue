<template>
    <div class="common-layout">
        <el-container class="lay-container">
            <!-- 自定义左侧的组件 -->
             <common-aside />
             <el-container>
                <el-header class="el-header">
                    <common-header />
                </el-header>
                <common-tab />
                <el-main class="right-main">
                    <router-view></router-view>
                </el-main>
             </el-container>
        </el-container>
    </div>
</template>

<script setup>
import commonAside from '../components/commonAside.vue';
import commonHeader from '../components/commonHeader.vue';
import commonTab from '../components/commonTab.vue';
</script>

<style scoped lang="less">

    .common-layout, .lay-container {
        height: 100%;
    }

    .el-header {
        background-color: #333;
    }

</style>