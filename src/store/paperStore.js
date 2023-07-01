

import { defineStore } from 'pinia';
/* eslint-disable */
export const usePaperStore = defineStore('testPaper', {
    state: () => ({
        qusType: [{ title: '单选题', type: 'singQuestData',objtve:true },
            { title: '多选题', type: 'moreChoiceData',objtve:true },
            { title: '填空题', type: 'fillQuestData',objtve:true },
            { title: '判断题', type: 'judgeQuestData',objtve:true },
            { title: '解答题', type: 'solveQuestData' ,objtve:true}
        ],
        currentType: [],
        openTestPaperKey: null,
        data: JSON.parse(localStorage.getItem("qustGroup"))
    }),
         
    getters: {
        currentData(state) {
            const {openTestPaperKey } = state;
            return JSON.parse(localStorage.getItem("qustGroup"))[openTestPaperKey]
        },
        filterData(state) {
            const { data, currentType, openTestPaperKey } = state;
            let seletData= JSON.parse(localStorage.getItem("qustGroup"))[openTestPaperKey]
            return (type) => seletData.filter((item) => item.title == type);
        },
      
    },
    
    actions: { 
        checkQustType(type) {
          
        if (type) {
            console.log(type);
            this.qusType.forEach((item,index) => {
                if (index<4) {
                        item.objtve=true
                    }
            });
           
        } else {
              this.qusType.forEach((item,index) => {
                  if (index < 4) {
                      item.objtve = false;
                    }
            });
         }

         
    
        }
    }
})