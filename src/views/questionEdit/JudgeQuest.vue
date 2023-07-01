<script setup>
/* eslint-disable */
import TitleOrder from '@/components/design_topic/TitleOrder.vue';
import UiEditor from '@/components/design_topic/UiEditor.vue';
import AnswerOption from '@/components/design_topic/answer/AnswerOption.vue';
import ReferAnswer from '@/components/design_topic/ReferAnswer.vue';
import SelectBox from '@/components/design_topic/SelectBox.vue';
import KnowPoint from '@/components/design_topic/KnowPoint.vue';
import ResetFinal from '@/components/design_topic/ResetFinal.vue';

import { useExamStore } from '@/store/examStore';
const dataExam = useExamStore();

</script>
<template>
    <div class="judge-edit">
        <TitleOrder>
            <template #orderNum>{{ dataExam.lateQuest.order }}</template>
            <template #questType>{{ dataExam.lateQuest.title }}</template>
        </TitleOrder>
        <UiEditor :qust="dataExam.lateQuest.questVal"></UiEditor>

        <div class="op-btn" v-for="(item, index) in dataExam.lateQuest?.answerData" :key="index">
            <AnswerOption :OpItem="item" :OpIndex="0" radius="50%">
                <template #choice>{{ String.fromCharCode(item.order) }}</template>
            </AnswerOption>
            <div class="op-text">{{ item.inText }}</div>
        </div>
        <div class="divider"></div>

        <ReferAnswer :referData="dataExam.lateQuest?.referVal">
        </ReferAnswer>
        <SelectBox></SelectBox>
        <KnowPoint></KnowPoint>
        <ResetFinal @click="$emit('final', 'judgeQuest')"></ResetFinal>
    </div>
</template>
<style lang="scss" scoped>
.judge-edit {
    .op-btn {
        display: flex;
        align-items: center;
        // background-color: aqua;
        margin-left: 32rem;
        margin-top: 22rem;
        margin-bottom: 26rem;
    }

    .op-text {
        font-size: 14rem;

    }

    .divider {
        width: 800rem;
        margin: 14rem auto;
        border: 1px solid#edf1f6;

    }


}
</style>