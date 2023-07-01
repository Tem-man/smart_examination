<script setup>
/* eslint-disable */

import { useExamStore } from '@/store/examStore';
import { ref } from 'vue';
import AnswerInput from './answer/AnswerInput.vue';
import UiEditor from './UiEditor.vue';
const dataExam = useExamStore();
const props = defineProps(['referData']);
const isInput = ref(true);
const dotoEdite = () => {
    isInput.value = !isInput.value;

}
</script>
<template>
    <div class="refer" @click.self="dotoEdite">
        <AnswerInput @click.stop="dotoEdite" v-show="isInput" long="long">
            <template #inputVal>{{ props.referData?.inText || "输入答案解析" }}</template>
        </AnswerInput>
        <UiEditor v-show="!isInput" :qust="props.referData" @get-text="dataExam.getData"></UiEditor>
        <!-- <p>{{ dataExam.referData }}</p> -->
    </div>
</template>
<style lang="scss" scoped>
.refer {
    display: flex;
    margin-top: 24px;
    justify-content: center;


}
</style>