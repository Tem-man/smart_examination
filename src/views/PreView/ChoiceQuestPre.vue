<script setup>
import AnswerOption from '@/components/design_topic/answer/AnswerOption.vue';
import { useExamStore } from '@/store/examStore';
import EdietButton from '@/views/PreView/childrenComp/EdietButton.vue'
const dataExam = useExamStore();
/* eslint-disable */
const { preIndex, radius } = defineProps(['preIndex', 'radius']);
</script>
<template>
    <div class="pre-view" v-if="dataExam.lateQuest">
        <EdietButton @goEdit="$emit('doEdit', preIndex)"></EdietButton>
        <div class="pre-edit">
            <b class="order">{{ dataExam.lateQuest.order }}</b>
            <span class="type">({{ dataExam.lateQuest.title }}, </span>
            <span class="score">{{ dataExam.lateQuest.score }}.0)</span>
            <span class="quest-main">{{ dataExam.lateQuest.questVal?.inText }}</span>
        </div>
        <div class="pre-answer">
            <div class="item" v-for="(item, index) in dataExam.lateQuest.answerData" :key="index">
                <span>
                    <AnswerOption :radius="radius" :OpItem="item" :OpIndex="(preIndex == 0 || preIndex == 3) ? 0 : index">
                        <template #choice>{{ String.fromCharCode(item.order)
                        }}</template>
                    </AnswerOption>

                </span>
                <span class="answer-text">{{ item?.inText }}</span>
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

    .item {
        margin-top: 20rem;

        .answer-text {
            margin-left: 10rem;
            color: #181E33;
            font-size: 14rem;
        }
    }
}

.pre-refer {
    margin-left: 30rem;
    color: #A8A8B3;
    font-size: 12rem;

    p {
        margin-top: 20rem;
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