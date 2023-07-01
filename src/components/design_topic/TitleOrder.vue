<script setup>
/* eslint-disable */
import { useExamStore } from '@/store/examStore';
import { ref, watch } from 'vue';
const dataExam = useExamStore();
// const scoreVal = ref(5);

// watch(scoreVal, () => {
//     dataExam.lateQuest.score = scoreVal;
// })
</script>

<template>
    <div class="title-order">
        <span class="order">
            <slot name="orderNum"></slot>

        </span>
        <span class="type">
            <slot name="questType"> </slot>
        </span>
        <label for="">
            <input type="text" v-model="dataExam.lateQuest.score"> <span class="score">分</span>
        </label>
    </div>
</template>
<style lang="scss" scoped>
.title-order {
    display: flex;
    padding: 20rem;
    height: 64rem;

    // background-color: rgb(180, 175, 175);

    .order,
    .type,
    label {
        padding: 0 10rem;
        line-height: 32rem;
    }

    .order {
        font-size: 18rem;
        font-weight: bold;
        color: #181E33;
    }

    .type {
        font-size: 18rem;
        color: #646873;
    }

    label {
        input {
            outline: none;
            width: 60rem;
            height: 26rem;
            text-align: center;
            font-weight: bold;
            font-size: 15rem;
            color: #47484d;
            border: 1px solid#E1EAF4;
            border-radius: 5rem;
            margin-right: 10rem;

        }

        .score {
            font-size: 18rem;
            color: #646873;
        }
    }
}
</style>