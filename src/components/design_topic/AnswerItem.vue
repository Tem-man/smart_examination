<script setup>
/* eslint-disable */
import AnswerInput from './answer/AnswerInput.vue';
import AnswerOption from './answer/AnswerOption.vue'
import UiEditor from './UiEditor.vue';
import { useExamStore } from '@/store/examStore';

const dataExam = useExamStore();

const props = defineProps(['size', 'long', 'itemKey', 'inpVal', 'itemId', 'startVal', 'closeBtn']);

// watch(props.doneEdite, () => {
//     isEditing.value = props.doneEdite;
//     console.log("*", props.doneEdite);
// }, { deep: true })
// const count = ref(0);
// watchEffect(() => {
//     isEditing.value = props.doneEdite;

//     // count.value++;
//     console.log("执行了*", props.doneEdite);
// })
</script>
<template>
    <div class="answer">
        <!-- <AnswerOption :OpIndex="props.itemKey" v-if="dataExam.lateQuest.answerData[props.itemKey].order">
                                                                                                        <template #choice> {{ String.fromCharCode(dataExam.lateQuest?.answerData[props.itemKey].order) }}</template>
                                                                                                    </AnswerOption> -->

        <slot name="sigOption"></slot>
        <AnswerInput @click.stop="dataExam.doEdite(props.itemKey)" v-show="!(props.itemKey == dataExam.isKey)"
            class="input-box" :long="props.long">
            <template #inputVal>{{ props.inpVal }}</template>
        </AnswerInput>

        <UiEditor :size="props.size" remind="请输入答案" v-show="props.itemKey == dataExam.isKey"
            @keyup.escape="dataExam.doEdite(null)" :qust="props.itemId" @get-text="dataExam.getData">
        </UiEditor>


        <div v-if="!closeBtn" class="btn-close" @click="dataExam.deleteItem(props.itemKey, props.startVal)">
            <i class="ri-close-line"></i>
        </div>


    </div>
</template>
<style lang="scss" scoped>
.answer {
    display: flex;
    margin-top: 24px;
    margin-left: 32rem;
    // background-color: aqua;

    .btn-close {
        height: 30rem;
        display: none;
        font-size: 24rem;
        font-weight: bold;
        color: rgb(202, 213, 230);
        line-height: 42rem;
        margin-left: 32rem;

        .ri-close-line {
            line-height: 30rem;
            // vertical-align: top;
        }
    }

    &:hover .btn-close {
        display: block;
    }
}
</style>