
import { defineStore } from 'pinia';
/* eslint-disable */
export const useExamStore = defineStore('exam', {
    state: () => ({
        currentItem: null,
        itemIndex: null,
        typeFlag:null,
        currentOrder: 1,
        totalOrder:0,
        globalData: {
            singQuestData: [],
            moreChoice: [],
            fillQuest: [],
            judgeQuest: [],
            solveQuest:[]
        },
        scores:0,
        isKey: null,
        selectVal:"easy",
        orderNum: 0,
        allScore: 0,

        singQuestData: 0,
        moreChoice: 0,
        fillQuest: 0,
        judgeQuest: 0,
        solveQuest: 0,
        flag:true,

        isDelete: false,
        rightBarIsActive: null,
        changeArr: [],
        qustData: [],
        testTitle:'',
        qustGroup:JSON.parse(localStorage.getItem("qustGroup"))||{}
    }),
    getters: {
        lateQuest(state) {
            const { globalData, currentItem, itemIndex, qustData } = state;
            console.log("lateQuest:", state.currentItem);
            if (state.isDelete) {
                state.isDelete = false;
                return globalData.singQuestData[0];
            }
            return globalData[currentItem]?.[itemIndex];
            // if (state.isDelete) {
            //     state.isDelete = false;
            //     return qustData[0];
            // }
            // if (itemIndex != null){
            //      return qustData[itemIndex];
            // }
           
                
            
        },
        groupBy(state) {
            const { globalData, qustData, typeFlag } = state;
            if (typeFlag != null) {
                 return globalData[typeFlag]=qustData.filter((element) => {
                   return element.id == typeFlag;
             })
            }
        },
        // orderSort(state) {
            
        //    return state.qustData.forEach((item, index) => {
        //      return item.order = index + 1;
        //     // console.log("执行加加");
        //      });
        // },
        getTotalScore(state) {
            let totalScore = 0;
            const { globalData } = state;
            for (const key in globalData) {
                for (const item of globalData[key]) {
                    totalScore += item.score*1;
                }
                 
            }

            return totalScore;
       }
        
    },
    
    actions: { 
        getData(val, content) {
            /* eslint-disable */
            
            val.inText = content;
            // console.log("val:",val);
            
        },
        addChoice() {
            this.lateQuest.num++;
            console.log("^&&"+this.lateQuest.num);
            let newNum = this.lateQuest.num;
            this.lateQuest.answerData.push({id:Date.now(), order: newNum,isActive:false})
            
        },
        deleteItem(itemIndex,startVal) {
            
            this.lateQuest.answerData.splice(itemIndex, 1);
            this.lateQuest.answerData.forEach((item,index) => {
                    if (index >=itemIndex) {
                        item.order--;
                        // console.log("减掉：",item.order);
                     }
            });
            if (!this.lateQuest.answerData[0]) {
                this.lateQuest.num = startVal;
            } else {
                 this.lateQuest.num = this.lateQuest.answerData.at(-1).order;
            }
           
        },
        doEdite (key){
            this.isKey = key
        },
        selected(item,index) {
             console.log(item);
            if (this.lateQuest.id == 'singQuestData') {
                console.log("等于singQuestData");
                this.lateQuest.isAnswer[0]=item.order;
                this.lateQuest.isHover = false;
            } 

            if (this.lateQuest.id == 'moreChoice') {
               
                if (item.isActive) {
                    this.lateQuest.isAnswer[index]=item.order;
                    this.lateQuest.isHover = false;
                    item.isActive = false;
                } else {
                    this.lateQuest.isAnswer[index]='ddd';
                    this.lateQuest.isHover = false;
                    item.isActive = true;
                }
               
            }

            if (this.lateQuest.id == 'judgeQuest') {
                this.lateQuest.isAnswer[0]=item.order;
                this.lateQuest.isAnswer[1]=item.inText;
                this.lateQuest.isHover = false;
            }
                
        },
            
    
        
      
        scoreTotal() {
            if (this.lateQuest) {
            
              return  this.allScore+= this.lateQuest.score*1;
                
            }
        },

         questTotal() {
            if (this.lateQuest) {
                 return this.totalOrder++;
                
            }
        },
   
        deleStore(typeID){
             // console.log(dataExam.globalData[dataExam.lateQuest.id]);
            let globalData = this.globalData;
            // let id = this.lateQuest.id;
            console.log("gd",typeID);
            // let deleIndex = globalData[typeID].indexOf(this.lateQuest);
            let deleIndex = this.qustData.indexOf(this.lateQuest);
            // let count = globalData[id].order;
            console.log("删除索引",deleIndex);
            // globalData[typeID].splice(deleIndex, 1);
            this.qustData.splice(deleIndex, 1);
            this.isDelete = true; 
            this.rightBarIsActive = 'singQuestData' + 0;
            //  this.globalData[item.id]= this.qustData.filter((element) => {
            //          return element.id == item.id;
            // })
            this.qustData.forEach((item, index) => {
                item.order = index + 1;
            });
            let qusType = this.qusType;
            for (const key in globalData) {
                globalData[key] = typeID.filter((element) => {
                    return element.id == key;
                });

            }
        },

    }
})