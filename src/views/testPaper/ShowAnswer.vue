<script setup>
/* eslint-disable */

import { ref, computed } from 'vue';
const { answer } = defineProps({
    answer: {
        type: Object
    },
    maxType: {
        type: Boolean,
        default: false
    }
})
const rightAnswer = computed(() => {
    if (!answer.isAnswer) {
        if (answer.title == "填空题") {
            return answer.answerData[0].inText;
        }
    };
    if (answer.title == "判断题") {
        return answer.isAnswer[1];
    }
    if (!answer.isAnswer) return;
    let newArr = answer.isAnswer.filter((item) => {
        return item != null;
    });
    let mapArr = newArr.map((item) => {
        return String.fromCharCode(item);
    });
    return mapArr.join(' ');
})
// const maxType = ref(false);
const isShow = ref(false);
const scoreInput = ref(5);
const selectIndex = ref(1);

const selecHandler = (index) => {
    selectIndex.value = index;
    isShow.value = false;
    index == 1 ? scoreInput.value = 5 : scoreInput.value = 0;

}
</script>
<template>
    <div class="answer_tit">
        <p class="head">
            <span class="answer">答案:</span>
            <span class="letter">{{ rightAnswer }}</span>
        </p>
        <p class="colorShallow">答案解析：</p>
        <p class="colorShallow">
            <span>难度：</span>
            <span class="easy">易</span>
        </p>
        <p class="colorShallow">知识点</p>
    </div>
</template>
<style lang="scss" scoped>
.answer_tit {
    font-size: 13rem;
    color: #181E33;

    p {
        margin-bottom: 8rem;
    }

    .head {
        font-weight: bold;

        .letter {
            margin-left: 4rem;
            font-family: 14rem;
        }

    }


    .colorShallow {
        font-weight: bold;
        color: #A8A8B3;

        // font-size: 13px;
        .easy {
            margin-left: 10rem;
        }
    }
}
</style>
