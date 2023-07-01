<script setup>
/* eslint-disable */
import AddTitle from '@/components/design_topic/AddTitle.vue';
import MoreChoice from '@/views/questionEdit/MoreChoice.vue';
import SingleChoice from '@/views/questionEdit/SingleChoice.vue';
import FillQuest from '@/views/questionEdit/FillQuest.vue';
import JudgeQuest from '@/views/questionEdit/JudgeQuest.vue';
import SolveQuest from '@/views/questionEdit/SolveQuest.vue';

import TitleTotal from '@/views/leftBar/TitleTotal.vue';
import QustType from '@/views/leftBar/QustType.vue';
import QustDetail from '@/views/leftBar/QustDetail.vue';

import { useExamStore } from '@/store/examStore';
import { ref, watchEffect, computed } from 'vue';

import { addQuestion } from '@/utils/addData'

import { useRouter } from 'vue-router';
import ChoiceQuestPre from '@/views/PreView/ChoiceQuestPre.vue';
import FillQuestPre from '@/views/PreView/FillQuestPre.vue';
import DescType from '@/views/leftBar/DescType.vue';

const dataExam = useExamStore();

let qusType = [
  {
    time: Date.now(), id: 'singQuestData', title: '单选题', order: 0, num: 68, score: dataExam.lateQuest?.score ?? 5, isAnswer: [], isHover: true, questVal: {}, referVal: {},
    answerData: [
      { id: Date.now(), order: 65, isActive: false },
      { id: Date.now(), order: 66, isActive: false },
      { id: Date.now(), order: 67, isActive: false },
      { id: Date.now(), order: 68, isActive: false },
    ]
  },
  {
    time: Date.now(), id: 'moreChoice', title: '多选题', order: 0, num: 68, score: dataExam.lateQuest?.score ?? 5, isAnswer: [], isHover: true, questVal: {}, referVal: {},
    answerData: [
      { id: Date.now(), order: 65, isActive: true },
      { id: Date.now(), order: 66, isActive: true },
      { id: Date.now(), order: 67, isActive: true },
      { id: Date.now(), order: 68, isActive: true },
    ]
  },
  { time: Date.now(), id: 'fillQuest', title: '填空题', order: 0, num: 0, score: dataExam.lateQuest?.score ?? 5, isActive: null, isHover: true, questVal: {}, referVal: {}, answerData: [] },
  {
    time: Date.now(), id: 'judgeQuest', title: '判断题', order: 0, score: dataExam.lateQuest?.score ?? 5, isAnswer: [], isHover: true, questVal: {}, referVal: {}, answerData: [{ inText: '对', order: 65 }, { inText: '错', order: 66 }]
  },
  {
    time: Date.now(), id: 'solveQuest', title: '解答题', order: 0, score: dataExam.lateQuest?.score ?? 5, isActive: null, isHover: true, questVal: {}, referVal: {}, answerData: [{}]
  },
];

const keyVal = ref(null);
const isPre = ref(false);
let lists = [];

const addTitle = (index, item) => {
  keyVal.value = index;
  isPre.value = null;
  addQuestion(dataExam, item);
  console.log("keyVal:", keyVal.value);
  limitAmount(item);
  dataExam.questTotal();
  // currIndex.value = index;
}

function showPre(index) {
  keyVal.value = null;
  isPre.value = index;
  dataExam.scoreTotal();
}
function editHandle(preIndex) {
  keyVal.value = preIndex;
  isPre.value = null;
}


function preview(item, index) {
  dataExam.currentItem = item.id;
  dataExam.itemIndex = index;
  keyVal.value = null;
  isPre.value = item.id;
  dataExam.rightBarIsActive = item.id + index;
  console.log(item.id + index);
}

function limitAmount(item) {
  if (lists.includes(item)) return;
  lists.push(item);
}



let count = 0;
const router = useRouter();
const saveFinish = () => {

  // let time = getTime();
  router.push('/TestView');
  // dataExam.qustGroup.push(dataExam.qustData);
  dataExam.qustGroup[dataExam.testTitle] = dataExam.qustData;
  count++
  localStorage.setItem('qustGroup', JSON.stringify(dataExam.qustGroup));
  console.log(dataExam.qustGroup);
  console.log(localStorage.getItem(dataExam.qustGroup));
}


</script>


<template>
  <div class="container">
    <div class="top-bar">
      <span class="new-paper">新建试卷</span>
      <div @click="saveFinish" class="save-finish">完成</div>
    </div>

    <div class="marker-top">
      <p class="create-paper">
        <input type="text" v-model="dataExam.testTitle">
      </p>
    </div>

    <div class="main">
      <div class="left-bar">
        <div v-if="dataExam.lateQuest">
          <TitleTotal></TitleTotal>

          <QustType v-for="(itemBig, index) in lists" :list="itemBig" :keys="dataExam.globalData[itemBig.id]"
            :obj="dataExam.globalData[itemBig.id]" :titleIndex="index">
            <template #descType>
              <DescType></DescType>
            </template>
            <template #qustDetail>
              <QustDetail :isActive="dataExam.rightBarIsActive" v-for="(item, index) in dataExam.globalData[itemBig.id]"
                :storage="item" :index="index" @click="preview(item, index)">
              </QustDetail>
            </template>
          </QustType>
        </div>

      </div>

      <div class="edit_main">
        <AddTitle @isView="addTitle" :qusType="qusType"></AddTitle>
        <div class="edit_detail">
          <SingleChoice v-if="0 === keyVal" @final="showPre"></SingleChoice>
          <MoreChoice v-if="1 === keyVal" @final="showPre"></MoreChoice>
          <FillQuest v-if="2 === keyVal" @final="showPre"></FillQuest>
          <JudgeQuest v-if="3 === keyVal" @final="showPre"></JudgeQuest>
          <SolveQuest v-if="4 === keyVal" @final="showPre"></SolveQuest>

          <ChoiceQuestPre radius="50%" v-if="'singQuestData' === isPre" :preIndex="0" @doEdit="editHandle">
          </ChoiceQuestPre>

          <ChoiceQuestPre radius="5rem" v-if="'moreChoice' === isPre" :preIndex="1" @doEdit="editHandle">
          </ChoiceQuestPre>

          <FillQuestPre v-if="'fillQuest' === isPre" :preIndex="2" @doEdit="editHandle" isBracket="true"></FillQuestPre>

          <ChoiceQuestPre radius="50%" v-if="'judgeQuest' === isPre" :preIndex="3" @doEdit="editHandle">
          </ChoiceQuestPre>

          <FillQuestPre v-if="'solveQuest' === isPre" :preIndex="4" @doEdit="editHandle"></FillQuestPre>
        </div>
      </div>

    </div>


  </div>
</template>


<style scoped lang="scss">
.container {
  position: relative;
  width: 1100rem;
  // overflow: scroll;
  margin: 0 auto;
  $width-mTop: 100rem;
  $border-radius: 8rem;

  .top-bar {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 90;
    width: 100vw;
    height: 40rem;
    background: #384B66;
    box-shadow: 0 2px 17px 0 rgba(211, 211, 211, 0.50);

    .new-paper {
      color: #aaaeb3;
      font-size: 14rem;
      line-height: 40rem;
      margin-left: 48%;

    }

    .save-finish {
      position: absolute;
      top: 0;
      right: 4rem;
      margin-left: 20rem;
      display: inline-block;
      width: 100rem;
      height: 40rem;
      line-height: 40rem;
      text-align: center;
      border-left: 1px solid #313A4C;
      font-size: 14rem;
      color: #FFFFFF;
      background: #3A8BFF;
    }

  }

  .marker-top {
    margin-top: 60rem;
    height: $width-mTop;
    background-color: #fff;
    box-shadow: 0px 2px 10px 0px rgba(237, 238, 240, 0.5);
    border-radius: $border-radius;
    font-size: 16rem;
    font-weight: bold;

    .create-paper {
      padding: 15rem 15rem;

      input {
        width: 1132px;
        height: 38px;
        border: 1px solid #fff;
        border-radius: 4px;
        font-size: 16px;
        color: #181E33;
        padding: 0 10px;
        line-height: 38px;
        font-weight: bold;
        outline: none;

        &:focus {
          box-shadow: 0 3px 12px 0 rgba(39, 125, 255, 0.30);
        }

        &:hover {
          border: 1px solid #DADAE8;

        }
      }
    }
  }

  .main {
    margin-top: 20rem;
    display: flex;

    .left-bar {
      flex: 1;
      width: 300rem;
      height: 540rem;
      overflow: auto;
      background-color: #fff;
      box-shadow: 0px 2px 10px 0px rgba(237, 238, 240, 0.5);
      border-radius: $border-radius;
    }

    .edit_main {
      flex: 4;
      margin-left: 20rem;
      // background-color: #fff;
      box-shadow: 0px 2px 10px 0px rgba(237, 238, 240, 0.5);
      border-radius: $border-radius;

      .edit_detail {
        margin-top: 20rem;
        box-shadow: 0px 2px 10px 0px rgba(237, 238, 240, 0.5);
        border-radius: $border-radius;
        background-color: #fff;
        min-height: 460rem;


      }
    }
  }


}
</style>
