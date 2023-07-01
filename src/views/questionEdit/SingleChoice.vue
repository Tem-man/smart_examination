<script setup>
import TitleOrder from '@/components/design_topic/TitleOrder.vue';
import UiEditor from '@/components/design_topic/UiEditor.vue';
import AnswerItem from '@/components/design_topic/AnswerItem.vue';
import ReferAnswer from '@/components/design_topic/ReferAnswer.vue';
import SelectBox from '@/components/design_topic/SelectBox.vue';
import KnowPoint from '@/components/design_topic/KnowPoint.vue';
import ResetFinal from '@/components/design_topic/ResetFinal.vue';
import AddMore from '@/components/design_topic/AddMore.vue';
import AnswerOption from '@/components/design_topic/answer/AnswerOption.vue';
import { useExamStore } from '@/store/examStore';
const dataExam = useExamStore();

</script>
<template>
    <div class="single-edit">

        <TitleOrder>
            <template #orderNum>{{ dataExam.lateQuest.order }}</template>
            <template #questType>{{ dataExam.lateQuest.title }}</template>
        </TitleOrder>

        <UiEditor :qust="dataExam.lateQuest?.questVal"></UiEditor>

        <AnswerItem size="min" v-for="(item, index) in dataExam.lateQuest?.answerData" :key="index" :itemKey="index"
            :inpVal="item?.inText" :itemId="item" startVal="64" @click.self="dataExam.doEdite(null)">
            <template #sigOption>
                <AnswerOption :OpItem="item" :OpIndex="0" radius="50%" v-if="item.order">
                    <template #choice> {{ String.fromCharCode(item.order)
                    }}
                    </template>
                </AnswerOption>
            </template>
        </AnswerItem>

        <AddMore @click="dataExam.addChoice"></AddMore>
        <div class="divider"></div>

        <ReferAnswer :referData="dataExam.lateQuest?.referVal">
        </ReferAnswer>
        <SelectBox></SelectBox>
        <KnowPoint></KnowPoint>
        <ResetFinal @click="$emit('final', 'singQuestData')"></ResetFinal>

    </div>
</template>
<style lang="scss" scoped>
// $border-radius: 8px;

.single-edit {

    // margin-top: 20rem;
    // background-color: #fff;
    // box-shadow: 0px 2px 10px 0px rgba(237, 238, 240, 0.5);
    // border-radius: $border-radius;

    .divider {
        width: 800rem;
        margin: 14rem auto;
        border: 1px solid#edf1f6;

    }



}
</style>