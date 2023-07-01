
/* eslint-disable */
import { computed, reactive,ref,watchEffect } from 'vue';

  function findPlace(target, qustArrX) {
        let count = 0;
        let startIndex = 0;
        let isExist = false;
        for (const item of qustArrX) {
          if (item.id == target.id) {
            isExist = true;
          }
        }
   
        if (isExist) {
          qustArrX.forEach((item, index) => {
            if (item.id == target.id) {
              count++;
              console.log("zhixing");
              startIndex = index;
            }
          });
        } else {
          startIndex = qustArrX.length - 1;
        }
        // console.log("数量：", count);
        // console.log("索引：", startIndex);
        return startIndex + 1;
      }
let currentItem = null;
let currentIndex = null;

let count = 0;

export function addQuestion(dataExam, item) {
  
    dataExam.orderNum++;
    // count++;
    // item.order++;
    
  
   dataExam[item.id]++;
  // item.order=count;
  let newItem = JSON.parse(JSON.stringify(item));
  
  // dataExam.globalData[item.id].push(newItem);
  let wantIndex = findPlace(newItem, dataExam.qustData);
  // 添加数据
  dataExam.qustData.splice(wantIndex, 0, newItem);
  dataExam.typeFlag = item.id;

  dataExam.qustData.forEach((item, index) => {
    item.order = index + 1;
    // console.log("执行加加");
  });
  dataExam.globalData[item.id] = dataExam.qustData.filter((element) => {
    return element.id == item.id;
  });
  
  
  
  // let index = dataExam[item.id];
    currentItem = item.id;
  currentIndex = dataExam.globalData[item.id].length - 1;
  console.log(currentIndex);
    dataExam.currentItem = currentItem;
   dataExam.itemIndex = currentIndex;
  //  dataExam.itemIndex = wantIndex;
    
//   watchEffect(() => {
//    localStorage.setItem("qustData", JSON.stringify(dataExam.qustData))
// })
    
}

// export function preview(dataExam,Item,index) {
//   dataExam.currentItem = Item.id;
//   dataExam.itemIndex = index;
// }
// export function filterHandle() {
//     return {filterData};
// }

// export const filterData = currentData;
// export const childrenData =computed(()=>addChildAn?.answerData);

// export function addChoice() {
//             addChild.num++;
//             console.log("^&&"+addChild.num);
//             let newNum = addChild.num;
//             addChild.answerData.push({id:Date.now(), order: newNum,isActive:false})
            
// };