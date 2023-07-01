<script setup>
/* eslint-disable */
// import AnswerCompare from '@/views/correct/AnswerCompare.vue';
// import LiTitle from '@/views/correct/LiTitle.vue';
// import OptionItem from '@/views/correct/OptionItem.vue';
import QustType from '@/views/leftBar/QustType.vue';
import ListView from '@/views/correct/ListView.vue';

import { ref } from 'vue'
import RightNav from '@/views/correct/RightNav.vue';
import NavButton from '@/views/correct/NavButton.vue';
import UserInfo from '@/views/correct/UserInfo.vue';
import FilterQustType from '@/views/correct/FilterQustType.vue';

import { useCorrectStore } from '@/store/correctStore';
const dataCorrect = useCorrectStore();
const byOrder = ref(null);

const focusHandler = (order) => {
    byOrder.value = order;
}
</script>

<template>
    <div class="correct-container">
        <div class="quest-content">
            <QustType v-for="(item, index) in dataCorrect.qusType" :key="index" :list="item" :obj="dataCorrect.data"
                :titleIndex="index" class="qust-type" fontSize="14rem" v-show="item.objtve">
                <template #qustDetail>
                    <ListView :listData="dataCorrect.filterData(item.title)">
                    </ListView>
                </template>
            </QustType>

        </div>

        <div class="right-nav-bar">
            <UserInfo></UserInfo>

            <div class="scroll-bar">
                <FilterQustType></FilterQustType>
                <RightNav v-for="(item, index) in dataCorrect.qusType" :list="item" :titleIndex="index"
                    v-show="item.objtve">
                    <template #navBtn>
                        <NavButton v-for="list in dataCorrect.filterData(item.title)" :listData="list"
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
}

.qust-type {
    width: 780rem;
    box-sizing: content-box;
    padding: 30rem 30rem;
    border-radius: 8rem;
    margin-left: -16rem;
    margin-bottom: 20rem;
    background-color: #fff;

}
</style>
