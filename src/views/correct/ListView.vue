<script setup>
/* eslint-disable */
// import AnswerCompare from '@/views/correct/AnswerCompare.vue';
import LiTitle from '@/views/correct/LiTitle.vue';
import OptionItem from '@/views/correct/OptionItem.vue';

const props = defineProps(['listData']);
</script>

<template>
    <div class="list" v-for="(list, index) in props.listData" :key="index">

        <LiTitle :li="list">
        </LiTitle>
        <div v-if="list.isAnswer" class="Option-content">
            <OptionItem v-for="(item, index) in list.answerData" :isJudge="list.title == '判断题'" :item="item"
                :letter="item.order">
            </OptionItem>
        </div>
        <!-- <AnswerCompare :answer="list" :maxType="!list.isAnswer"></AnswerCompare> -->
        <slot name="showAnswer" :answer="list"></slot>
        <div class="line"></div>


    </div>
</template>

<style lang="scss" scoped>
.line {
    width: 840rem;
    margin-left: -30rem;
    margin-top: 30rem;
    margin-bottom: 20rem;
    border-bottom: 1px dashed #e6e6e6;
    // border-bottom: 1px #e6e6e6 solid;

}

// .Option-content {

//     margin-bottom: 8rem;
// }
</style>
