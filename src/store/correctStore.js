

import { defineStore } from 'pinia';
/* eslint-disable */
export const useCorrectStore = defineStore('correct', {
    state: () => ({
        qusType: [{ title: '单选题', type: 'singQuestData',objtve:true },
            { title: '多选题', type: 'moreChoiceData',objtve:true },
            { title: '填空题', type: 'fillQuestData',objtve:true },
            { title: '判断题', type: 'judgeQuestData',objtve:true },
            { title: '解答题', type: 'solveQuestData' ,objtve:true}
        ],
        currentType: [],
        openTestPaperKey: null,
        // isCheckObj:true,
        // newArr:JSON.parse(JSON.stringify(this.qusType)),
        isBufferQusType: true,
        data: [
            {   
                title: '单选题',
                order: 1,
                score:5,
                questVal: '五一劳动节起源于那次工人罢工运动',
                optionAnswer: {
                    A: '法国里昂工人罢工',
                    B: '美国芝加哥工人罢工',
                    C: '中国上海工人罢工',
                    D: '德国汉堡工人罢工'
                },    
                stuAnswer: 'C',
                correctAnswer: 'B',
              
            },
             {   
                title: '单选题',
                order: 2,
                score:5,
                questVal: '中国什么时候把五一劳动节确定为法定节假日',
                optionAnswer: {
                    A: '1949年12月',
                    B: '1956年4月',
                    C: '1987年10月',
                    D: '1991年3月'
                },    
                stuAnswer: 'A',
                correctAnswer: 'A',
              
            },
            {   
                title: '多选题',
                order: 3,
                score:5,
                questVal: '五一假期你将选择什么交通工具出行',
                optionAnswer: {
                    A: '飞机',
                    B: '高铁',
                    C: '网约车',
                    D: '自驾车',
                    E: '电瓶车',
                    F: '共享自行车',
                    G: '火车',
                    H:'大巴'
                },    
                stuAnswer: 'G',
                correctAnswer: 'BFH',
            },
             {   
                title: '多选题',
                order: 4,
                score:5,
                questVal: '在中国，历年劳动节放假过几天',
                optionAnswer: {
                    A: '1天',
                    B: '2天',
                    C: '3天',
                    D: '4天',
                    E: '5天',
                    F: '7天',
                },    
                stuAnswer: 'A',
                correctAnswer: 'ACEF',
              
            },
             {   
                title: '填空题',
                order: 5,
                score:5,
                questVal: '五一假期你将去哪玩？',
                stuAnswer: '南昌',
                correctAnswer: '去我想去的地方',
              
            },
             {   
                title: '填空题',
                order: 6,
                score:5,
                questVal: '五一假期你将和谁去旅行？',
                stuAnswer: '朋友',
                correctAnswer: '和我想去的人',
              
            },

            {   
                title: '判断题',
                order: 7,
                score:5,
                questVal: '五一劳动节总是从5月1日开始放假',
                optionAnswer: {
                    A: '对',
                    B: '错',
                    
                },  
                stuAnswer: '错',
                correctAnswer: '错',
            },

            {   
                title: '判断题',
                order: 8,
                score:5,
                questVal: '五一劳动节的设立代表着社会从资本剥削进入资本雇佣制度',
                optionAnswer: {
                    A: '对',
                    B: '错',
                    
                },  
                stuAnswer: '错',
                correctAnswer: '错',
            },
            {   
                title: '解答题',
                order: 9,
                score:5,
                questVal: '你是否支持五一假期调休放假为五天，请表明你的观点，并从国家，经济层面论述你的观点',
                stuAnswer: '不想调休',
                correctAnswer: '就首科大厦寄快递',
            },
            {   
                title: '解答题',
                order: 10,
                score:5,
                questVal: `背景：某社交媒体平台产品旗下的信息流改版项目，优先级高，但在执

行过程中却遭遇阻碍。正当该项目按原计划开始进入由多个技术方参与的开

发联调阶段的时候，其中一个技术方一信息流开发组的若干工程师，即将

被公司安排支持项目B,迫使该项目被中止，无法按原计划如期上线。如果

你是项目经理小张，面对项目B的开发资源争用，如何运用“威·逼·利·诱”

等手段，和其展开博弈，竭尽全力地将其对信息流改版项目的延期影响降到

最低？（请把答案写在word 文件上，并上传）`,
                stuAnswer: `威：提醒信息流开发组工程师，信息流改版项目是公司重要战略，如果因为他们离开项目而导致项目延期，将会对公司产生非常严重的后果。
逼：明确告知信息流开发组工程师，如果他们离开项目，将要承担项目延期的责任和惩罚。我们可以考虑修改技术方的考核标准，对于不愿意配合的开发人员，我们可以对其进行降薪、调离等处罚，从而逼迫其配合信息流改版项目。我可以在他们的绩效考核中加入对该项目开发进展的评估，使得他们必须抽出时间来完成任务。
`,
                correctAnswer: '加勒比海',
            },
             {   
                title: '单选题',
                order: 11,
                score:5,
                questVal: '中国什么时候把五一劳动节确定为法定节假日',
                optionAnswer: {
                    A: '1949年12月',
                    B: '1956年4月',
                    C: '1987年10月',
                    D: '1991年3月'
                },    
                stuAnswer: 'A',
                correctAnswer: 'A',
              
            },
               {   
                title: '单选题',
                order: 12,
                score:5,
                questVal: '中国什么时候把五一劳动节确定为法定节假日',
                optionAnswer: {
                    A: '1949年12月',
                    B: '1956年4月',
                    C: '1987年10月',
                    D: '1991年3月'
                },    
                stuAnswer: 'A',
                correctAnswer: 'A',
              
            },
               
              {   
                title: '单选题',
                order: 13,
                score:5,
                questVal: '中国什么时候把五一劳动节确定为法定节假日',
                optionAnswer: {
                    A: '1949年12月',
                    B: '1956年4月',
                    C: '1987年10月',
                    D: '1991年3月'
                },    
                stuAnswer: 'A',
                correctAnswer: 'A',
              
            },
              
               {   
                title: '单选题',
                order: 14,
                score:5,
                questVal: '中国什么时候把五一劳动节确定为法定节假日',
                optionAnswer: {
                    A: '1949年12月',
                    B: '1956年4月',
                    C: '1987年10月',
                    D: '1991年3月'
                },    
                stuAnswer: 'A',
                correctAnswer: 'A',
              
            },
               
             {   
                title: '单选题',
                order: 15,
                score:5,
                questVal: '中国什么时候把五一劳动节确定为法定节假日',
                optionAnswer: {
                    A: '1949年12月',
                    B: '1956年4月',
                    C: '1987年10月',
                    D: '1991年3月'
                },    
                stuAnswer: 'A',
                correctAnswer: 'A',
              
            },
        ]
    }),
         
    getters: {
        filterData(state) {
            const { data, currentType } = state;
            // return function (type) {
            //     return data.filter((item) => {
            //         return item.title == type;
            //     })
            // }
           
            return (type) => data.filter((item) => item.id == type);
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