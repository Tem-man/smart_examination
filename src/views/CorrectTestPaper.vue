
<script setup>
/* eslint-disable */

import QustType from '@/views/leftBar/QustType.vue';
import ListView from '@/views/correct/ListView.vue';

import AnswerCompare from '@/views/correct/AnswerCompare.vue';
import RightNav from '@/views/correct/RightNav.vue';
import NavButton from '@/views/correct/NavButton.vue';
import UserInfo from '@/views/correct/UserInfo.vue';
import FilterQustType from '@/views/correct/FilterQustType.vue';

import { ref } from 'vue';

import { usePaperStore } from '@/store/paperStore';
// import ShowAnswer from './testPaper/ShowAnswer.vue';
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

            <QustType v-for="(item, index) in dataPaper.qusType" :keys="dataPaper.filterData(item.title)" :list="item"
                :obj="dataPaper.currentData" :titleIndex="index" fontSize="14rem" v-show="item.objtve">
                <template #qustDetail>
                    <ListView :listData="dataPaper.filterData(item.title)">
                        <template #showAnswer="{ answer }">
                            <AnswerCompare :answer="answer" :maxType="!answer.isAnswer"></AnswerCompare>
                        </template>
                    </ListView>
                </template>
            </QustType>
        </div>

        <div class="right-nav-bar">
            <UserInfo></UserInfo>
            <div class="scroll-bar">
                <FilterQustType></FilterQustType>
                <RightNav v-for="(item, index) in dataPaper.qusType" :list="item" :titleIndex="index" v-show="item.objtve">
                    <template #navBtn>
                        <NavButton v-for="list in dataPaper.filterData(item.title)" :listData="list"
                            :isFouce="byOrder == list.order" @click="focusHandler(list.order)">
                        </NavButton>
                    </template>
                </RightNav>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.correct-container {
    margin-left: 140rem;
    display: flex;

}

.right-nav-bar {
    position: fixed;
    top: 30rem;
    right: 130rem;
    width: 280rem;
    height: calc(100vh - 100rem);
    border-radius: 8rem;
    background-color: #fff;

    .scroll-bar {
        height: calc(100vh - 200rem);
        overflow: auto;

        &::-webkit-scrollbar {
            width: 10px;
            height: 10px;
        }

        &::-webkit-scrollbar-track {
            background: rgb(239, 239, 239);
            border-radius: 2px;
        }

        &::-webkit-scrollbar-thumb {

            background-color: rgb(230, 236, 245);
            border-radius: 10px;

        }

        &::-webkit-scrollbar-corner {
            background: #179a16;
        }

    }

}

.quest-content {
    width: 780rem;

    box-sizing: content-box;
    padding: 30rem 30rem;
    border-radius: 8rem;
    margin-left: -16rem;
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

}
</style>

