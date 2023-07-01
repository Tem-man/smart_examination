// import { useExamStore } from '@/store/examStore';
// const dataExam = useExamStore();
// let count = 0;
/* eslint-disable */
import { computed, reactive,ref } from 'vue';

let currentData = ref(111);

export function addQuestion(dataExam, item) {
    // item => tabLists
    
    // count++;
    // item.order++;
    // console.log(item.order);
  dataExam.orderNum++;
  item.order+=dataExam.orderNum;
  dataExam.globalData[item.id].push(item);
    
}

// export function filterHandle() {
//     return {filterData};
// }

// export const filterHandle =computed(()=>filterData);
export const filterData =currentData;