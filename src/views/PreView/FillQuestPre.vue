<script setup>
/* eslint-disable */
import EdietButton from '@/views/PreView/childrenComp/EdietButton.vue'

import { useExamStore } from '@/store/examStore';
const dataExam = useExamStore();
const props = defineProps(['preIndex', 'isBracket']);


</script>
<template>
    <div class="pre-view">
        <EdietButton @goEdit="$emit('doEdit', props.preIndex)"></EdietButton>
        <div class="pre-edit">
            <b class="order">{{ dataExam.lateQuest.order }}</b>
            <span class="type">({{ dataExam.lateQuest.title }}, </span>
            <span class="score"> 5.0分)</span>
            <span class="quest-main">{{ dataExam.lateQuest.questVal.inText }}</span>
        </div>
        <div class="pre-answer">
            <div class="answer-title">答案：</div>
            <div>
                <div class="item" v-for="(item, index) in dataExam.lateQuest.answerData" :key="index">
                    <em class="fill-space">
                        <span v-show="props.isBracket">(</span>
                        {{ item.order }}
                        <span v-show="props.isBracket">)</span>
                    </em>
                    <span class="answer-text">{{ item?.inText }}</span>
                </div>
            </div>

        </div>
        <div class="pre-refer">
            <p>答案解析：</p>
            <div class="diffi">
                <p>难度：</p>
                <p class="easy">易</p>
            </div>

            <p>知识点</p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.pre-view {
    padding: 30rem;
    position: relative;
    min-height: 460rem;

    &:hover {
        border: 1px dashed #5b93e1;
        border-radius: 8rem;

    }

}

.pre-edit {
    display: flex;
    align-items: center;
    font-size: 14rem;
    line-height: 24px;

    .order {
        color: #181E33;
        padding-right: 20rem;
    }

    .type,
    .score {
        color: #8A8B99;
    }

    .quest-main {
        padding-left: 4rem;
    }

    .score {
        padding-left: 14rem;
    }

}

.pre-answer {
    margin-left: 30rem;
    font-size: 14rem;
    margin-top: 18rem;
    display: flex;
    // background-color: #7c7c89;

    .answer-title {
        margin-top: 5rem;
    }

    .item {
        margin-top: 4rem;

        .fill-space {
            color: #8A8B99;
        }

        .answer-text {
            margin-left: 6rem;
            color: #181E33;
            font-size: 14rem;
        }
    }
}

.pre-refer {
    margin-left: 30rem;
    color: #A8A8B3;
    font-size: 12rem;
    margin-top: 30rem;


    p {
        margin-top: 14rem;
    }

    .diffi {
        display: flex;
        align-items: center;

        .easy {
            padding-left: 20rem;
        }
    }
}
</style>