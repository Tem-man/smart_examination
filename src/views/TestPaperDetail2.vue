<script setup>
/* eslint-disable */
import { ref } from 'vue';
import { useCorrectStore } from '@/store/correctStore';
const dataCorrect = useCorrectStore();
let testPaperLists = ref(JSON.parse(localStorage.getItem("qustGroup")));
// let currenttestPaperList = testPaperLists[dataCorrect.currentOpenPaperTest];
</script>
<template>
    <div class="container">
        <h1>{{ dataCorrect.openTestPaperKey }}</h1>
        <h1>单选题</h1>
        <div class="item" v-for=" item in testPaperLists[dataCorrect.openTestPaperKey]">
            <p>{{ item.questVal.inText }}</p>
            <p v-for="answer in item.answerData">
                {{ answer.inText }}
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
h1 {
    margin-bottom: 20rem;
}

.item {
    margin-bottom: 20rem;
}
</style>