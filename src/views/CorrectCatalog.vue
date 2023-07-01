<script setup>
/* eslint-disable */
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { usePaperStore } from '@/store/paperStore';
import TestCeil from './correct/TestCeil.vue';
const router = useRouter();
const dataPaper = usePaperStore();
let testPaperLists = ref(JSON.parse(localStorage.getItem("qustGroup")));

const OpenTestDetail = (key) => {
  router.push('/CorrectTestPaper');
  dataPaper.openTestPaperKey = key;
}
</script>
<template>
  <div class="exam-nav">
    <div class="nav-button">
      <!-- <i class="ri-arrow-go-back-fill"></i>
                        <span>返回</span> -->
      <h1 class="correct">待批阅</h1>
    </div>
    <div class="all-paper-test">

      <TestCeil v-for="(value, key) in testPaperLists" @click="OpenTestDetail(key)" :title="key"></TestCeil>

    </div>
  </div>
</template>

<style lang="scss" scoped>
.exam-nav {
  width: 1200rem;
  min-height: 660rem;
  margin-top: 20rem;
  margin-left: 30rem;
  overflow: hidden;
  box-shadow: 0 2px 10px 0 rgba(237, 238, 240, 0.50);
  border-radius: 8px;
  background-color: #FFFFFF;
}

.nav-button {
  width: 100%;
  padding: 20rem 30rem;
  display: flex;
  border-bottom: 1px solid #F2F2F2;
  display: flex;
  align-items: center;
  color: #6B89B3;
  font-size: 13rem;

  .correct {
    font-size: 18rem;
    // margin-bottom: 14rem;
    color: #29292e;
  }


  i {
    color: #6B89B3;
    margin-right: 6rem;
    font-size: 14rem;
  }

}

.all-paper-test {
  padding: 20rem 30rem;


  .btn {
    font-size: 14rem;
    width: 86rem;
    text-decoration: none;
    color: #FFFFFF;
    box-shadow: 0 3px 12px 0 rgba(39, 125, 255, 0.30);
    text-align: center;
    padding: 6rem 0rem;
    border-radius: 20rem;

    background: linear-gradient(to right, rgb(139, 139, 243), rgb(113, 113, 246), rgb(66, 66, 239));
  }
}
</style>
