<script setup>
/* eslint-disable */
import TitleOrder from '@/components/design_topic/TitleOrder.vue';
import UiEditor from '@/components/design_topic/UiEditor.vue';
import AnswerItem from '@/components/design_topic/AnswerItem.vue';
import AddMore from '@/components/design_topic/AddMore.vue';
import ReferAnswer from '@/components/design_topic/ReferAnswer.vue';
import SelectBox from '@/components/design_topic/SelectBox.vue';
import KnowPoint from '@/components/design_topic/KnowPoint.vue';
import ResetFinal from '@/components/design_topic/ResetFinal.vue';

import { useExamStore } from '@/store/examStore';
const dataExam = useExamStore();
</script>
<template>
    <div class="fillQuest-edit">
        <TitleOrder>
            <template #orderNum>{{ dataExam.lateQuest.order }}</template>
            <template #questType>{{ dataExam.lateQuest.title }}</template>
        </TitleOrder>

        <UiEditor :qust="dataExam.lateQuest.questVal"></UiEditor>

        <AnswerItem size="min" class="input-item" v-for="(item, index) in dataExam.lateQuest.answerData" :key="index"
            :itemKey="index" :inpVal="item?.inText" :itemId="item" startVal="0" @click.self="dataExam.doEdite(null)">
            <template #sigOption>
                <span class="fill-Space">第 {{ item.order }} 空</span>
            </template>
        </AnswerItem>
        <AddMore @click="dataExam.addChoice"></AddMore>
        <ReferAnswer :referData="dataExam.lateQuest?.referVal">
        </ReferAnswer>
        <SelectBox></SelectBox>
        <KnowPoint></KnowPoint>
        <ResetFinal @click="$emit('final', 'fillQuest')"></ResetFinal>
    </div>
</template>
<style lang="scss" scoped>
.fillQuest-edit {
    .input-item {
        margin-left: 34rem;
        display: flex;
        align-items: center;
        // background-color: aqua;

        span {
            font-size: 14rem;
            color: #646873;
            margin-right: 10rem;
        }
    }

    .fill-Space {
        font-size: 14rem;
        color: #646873;
        margin-right: 10rem;
        // margin-top: -20rem;
        // background-color: aqua;
        line-height: 36rem;
    }

}
</style>