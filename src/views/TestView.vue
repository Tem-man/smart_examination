<script setup>
import { useExamStore } from '@/store/examStore';
import { useRouter } from 'vue-router';
import { getTime } from '@/utils/getTime'

const router = useRouter();
const dataExam = useExamStore();
const createTest = () => {
  // dataExam.qustData = [];
  // dataExam.totalOrder = 0;
  // dataExam.clearTotalScore(0);
  dataExam.$reset();
  router.push('/ExamCpnent');
  dataExam.testTitle = "试卷" + getTime();

}
</script>
<template>
  <div class="exam-nav">
    <div class="nav-button">
      <div class="btn" @click="createTest">
        <i class="ri-add-line"></i>
        <div class="link">创建试卷</div>
      </div>

      <div class="btn-plain" @click="$router.push({ path: '/TestPaperLib' })">
        <span class="link">试卷库</span>
      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>
.exam-nav {
  width: 1200rem;
  height: 660rem;
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

  .btn {
    font-size: 14rem;
    width: 96rem;
    box-shadow: 0 3px 12px 0 rgba(39, 125, 255, 0.30);
    text-align: center;
    padding: 6rem 10rem;
    border-radius: 20rem;
    display: flex;
    align-items: center;
    background: linear-gradient(to right, rgb(139, 139, 243), rgb(113, 113, 246), rgb(66, 66, 239));

    .link {
      text-decoration: none;
      color: #FFFFFF;
    }

    i {
      margin-right: 2rem;
      color: #FFFFFF;
    }
  }

  .btn-plain {
    font-size: 14rem;
    width: 86rem;
    text-align: center;
    padding: 6rem 10rem;
    border-radius: 20rem;
    align-items: center;
    border: 1px solid #8CBCFF;
    margin-left: 30rem;

    .link {
      text-decoration: none;
      color: #3A8BFF;

    }
  }
}
</style>
