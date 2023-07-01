<script setup>
/* eslint-disable */
import { useExamStore } from '@/store/examStore';

const dataExam = useExamStore();

const props = defineProps(['OpItem', 'radius', 'OpIndex']);
const radius = props.radius;
// const isHover = ref(true);
// const selected = (index) => {
//     for (const item of dataExam.answerData) {
//         item.isActive = false;
//     }
//     dataExam.answerData[index].isActive = true;
//     // isActive.value = dataExam.answerData[index].isActive;
//     isHover.value = false;
// }
</script>
<template>
    <div class="answer-option"
        :class="{ active: dataExam.lateQuest?.isAnswer[props.OpIndex] == props.OpItem.order, sus: dataExam.lateQuest?.isHover }"
        @click.self="dataExam.selected(props.OpItem, props.OpIndex)">
        <slot name="choice"></slot>

        <div class="remind"><i></i></div>
    </div>
</template>
<style lang="scss" scoped>
.answer-option {
    position: relative;
    display: inline-block;
    width: 30rem;
    height: 30rem;
    margin-right: 10rem;
    border-radius: v-bind(radius);
    border: 1px solid #E1EAF4;
    text-align: center;
    line-height: 30rem;
    font-size: 14rem;
    color: #646873;
    margin-top: 2.5rem;

}


.active {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
}


.sus {
    &:hover {
        color: #409eff;
        border-color: #c6e2ff;
        background-color: #ecf5ff;
    }
}
</style>