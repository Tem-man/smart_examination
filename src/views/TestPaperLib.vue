<script setup>
/* eslint-disable */
import TestPaperFile from '@/views/TestPaperFile.vue'
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { usePaperStore } from '@/store/paperStore';
const router = useRouter();
const dataPaper = usePaperStore();
let testPaperLists = ref(JSON.parse(localStorage.getItem("qustGroup")));

const OpenTestDetail = (key) => {
    router.push('/TestPaperDetail');
    dataPaper.openTestPaperKey = key;
}
</script>
<template>
    <div class="exam-nav">
        <div class="nav-button" @click="$router.back()">
            <i class="ri-arrow-go-back-fill"></i>
            <span>返回</span>
        </div>
        <div class="all-paper-test">
            <p class="all-title">全部试卷</p>
            <div class="folder">
                <input type="checkbox" name="" id="">
                <div class="folder-title">文件夹/试卷</div>
            </div>
            <TestPaperFile v-for="(value, key) in testPaperLists" @click="OpenTestDetail(key)" :title="key"></TestPaperFile>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.exam-nav {
    width: 1200rem;
    height: 660rem;
    margin-top: 20rem;
    margin-left: 30rem;
    overflow: hidden;
    box-shadow: 0 2px 10px 0 rgba(237, 238, 240, 0.50);
    border-radius: 8px;
    background-color: #FFFFFF;
}

.nav-button {
    width: 100%;
    padding: 20rem 30rem;
    display: flex;
    border-bottom: 1px solid #F2F2F2;
    display: flex;
    align-items: center;
    color: #6B89B3;
    font-size: 13rem;

    i {
        color: #6B89B3;
        margin-right: 6rem;
        font-size: 14rem;
    }

}

.all-paper-test {
    padding: 10rem 20rem;

    .all-title {
        color: #6B89B3;

    }

    .folder {
        margin-top: 10rem;
        padding: 10rem 20rem;
        display: flex;
        align-items: center;
        background-color: rgba(138, 139, 153, 0.116);

        input {
            height: 14rem;
            width: 14rem;
        }

        .folder-title {
            color: #777881;
            font-size: 14rem;
            margin-left: 8rem;
        }
    }



}
</style>
