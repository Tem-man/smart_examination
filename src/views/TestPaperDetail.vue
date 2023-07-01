
<script setup>
/* eslint-disable */

import QustType from '@/views/leftBar/QustType.vue';
import ListView from '@/views/correct/ListView.vue';

import { ref } from 'vue'

import { usePaperStore } from '@/store/paperStore';
import ShowAnswer from './testPaper/ShowAnswer.vue';
const dataPaper = usePaperStore();
const byOrder = ref(null);
const isShow = ref(false);
const focusHandler = (order) => {
    byOrder.value = order;
}
</script>

<template>
    <div class="correct-container">
        <div class="quest-content">
            <h1>{{ dataPaper.openTestPaperKey }}</h1>
            <div class="is-show">
                <input type="checkbox" name="" id="" v-model="isShow">
                <label for="">显示答案</label>
            </div>
            <QustType v-for="(item, index) in dataPaper.qusType" :keys="dataPaper.filterData(item.title)" :list="item"
                :obj="dataPaper.currentData" :titleIndex="index" fontSize="14rem">
                <template #qustDetail>
                    <ListView :listData="dataPaper.filterData(item.title)">
                        <template #showAnswer="{ answer }" v-if="isShow">
                            <ShowAnswer :answer="answer"></ShowAnswer>
                        </template>
                    </ListView>
                </template>
            </QustType>

        </div>


    </div>
</template>

<style lang="scss" scoped>
// .correct-container {}

.quest-content {
    width: 780rem;
    margin: 0 auto;
    box-sizing: content-box;
    padding: 30rem 30rem;
    border-radius: 8rem;
    // margin-left: 16rem;
    margin-bottom: 20rem;
    background-color: #fff;

    h1 {
        margin-left: 16rem;
        margin-bottom: 20rem;
        font-size: 18px;
        color: #181E33;
        line-height: 25px;
        font-weight: bold;
    }

    .is-show {
        margin-left: 16rem;
        margin-bottom: 20rem;
        font-size: 14rem;
        color: #181E33;
        font-weight: bold;
        line-height: 25px;
        display: flex;
        align-items: center;

        input {
            width: 14rem;
            height: 14rem;
            margin-right: 10rem;
        }
    }

    // .list-view {
    //     margin-bottom: 200rem;
    // }
}
</style>

