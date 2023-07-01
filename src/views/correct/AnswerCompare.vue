<script setup>
/* eslint-disable */
import { ref, computed } from 'vue';

const { answer, maxType } = defineProps({
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
    <div class="bar-box">

        <div :class="{ leftInfo: !maxType, maxLeftInfo: maxType }">
            <div class="stu-answer" :class="{ maxStuAnswer: maxType }">
                <span class="mark-title">学生答案：</span>
                <!-- <span class="mark-letter">{{ answer.stuAnswer }}</span> -->
            </div>

            <div class="correct-answer" :class="{ maxCorrectAnswer: maxType }">
                <span class="mark-title">正确答案：</span>
                <span class="mark-letter">{{ rightAnswer }}</span>
            </div>
        </div>
        <div class="right-info">
            <div class="get-score">
                <span class="mark-text">得分：</span>
                <input type="text" class="score-input" v-model="scoreInput">
                <label class="score">分</label>
            </div>
            <div class="font-icon" @click="isShow = true">
                <i class="ri-check-line" v-show="1 == selectIndex"></i>
                <i class="ri-close-line" v-show="2 == selectIndex"></i>
                <div class="select-box" v-show="isShow">
                    <i class="ri-check-line check" @click.stop="selecHandler(1)"></i>
                    <i class="ri-close-line close" @click.stop="selecHandler(2)"></i>
                </div>
            </div>

        </div>
    </div>
</template>
<style lang="scss" scoped>
.bar-box {
    margin-top: 10rem;
    margin-bottom: 16rem;
    // margin-left: -10rem;
    width: 780rem;
    padding: 8rem 20rem;
    background: #F8F9FA;
    border: solid #F0F3F7 1px;
    border-radius: 3px;
    display: flex;
    justify-content: space-between;
    font-size: 13rem;

    .mark-title {
        font-weight: bold;
    }

}



.leftInfo {
    display: flex;
    // min-width: 160px;
    // width: 200rem;
    // justify-content: space-between;
    align-items: center;
    // background-color: blanchedalmond;
    // .stu-answer {

    // }

    .correct-answer {
        margin-left: 60rem;
    }
}

.maxLeftInfo {

    min-width: 160px;
    width: 560rem;
    justify-content: space-between;
    align-items: center;
    // background-color: bisque;
}

.maxStuAnswer {
    display: flex;
    flex-direction: column;
    margin-bottom: 10rem;
}

.correct-answer {
    span {
        color: #00B86E;
    }

}

.maxCorrectAnswer {
    display: flex;
    flex-direction: column;

    span {
        color: #00B86E;
    }

}


.right-info {
    display: flex;
    align-items: center;


    .score-input {
        width: 50rem;
        height: 20rem;
        border: none;
        border: solid #E1E1E5 1rem;
        border-radius: 3rem;
        outline: none;
        text-align: center;
        line-height: 20rem;
        color: #3A8BFF;
    }

    .get-score {
        .score {
            padding: 0 4rem;
        }
    }


    .font-icon {
        position: relative;

        .ri-check-line,
        .ri-close-line {
            margin-left: 12rem;
            font-size: 30rem;
            font-weight: bold;
            color: #00B86E;
        }

        .ri-close-line {
            color: #f71f31df;
        }

        .select-box {
            position: absolute;
            z-index: 10;
            width: 50rem;
            border-radius: 6rem;
            background-color: #fff;
            box-shadow: 0px 2px 12px 0px rgba(175, 187, 204, 0.75);

            .check,
            .close {
                display: inline-block;
                // text-align: center;
                // margin: 0, auto;
            }
        }
    }


}
</style>
