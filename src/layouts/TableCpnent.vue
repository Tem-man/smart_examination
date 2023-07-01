<script setup>
/* eslint-disable */
import DataSearch from '@/views/table/DataSearch.vue';
import MyTable from '@/views/table/MyTable.vue';
// import TableColumn from '@/views/table/TableColumn.vue';

import { ref } from 'vue';

const columns = ref([
    {
        label: '姓名',
        key: 'userName'
    },
    {
        label: '学号',
        key: 'stuNo'
    },
    {
        label: '科目',
        key: 'course'
    },
    {
        label: '成绩',
        key: 'score'
    }
])
const tableData = ref([
    {
        userName: '向远方',
        stuNo: '2030140044',
        course: '中国式现代化研究',
        score: '87'
    },
    {
        userName: '李明化',
        stuNo: '2030140045',
        course: '中国式现代化研究',
        score: '66'
    },
    {
        userName: '赵子睿',
        stuNo: '1730140046',
        course: '中国式现代化研究',
        score: '88'
    },
    {
        userName: '徐赛文',
        stuNo: '2030140047',
        course: '中国式现代化研究',
        score: '75'
    },
])

</script>
<template>
    <div class="box">
        <div class="box-table">
            <DataSearch></DataSearch>
            <MyTable :data="tableData" :columns="columns">
            </MyTable>
        </div>

    </div>


    <!-- <MyTable :data="tableData" v-slot="{ userName, stuNo, course, score }">
                                                                                                                                                                                                <TableColumn :prop="userName" label="Date" />
                                                                                                                                                                                                <TableColumn :prop="stuNo" label="Name" />
                                                                                                                                                                                                <TableColumn :prop="course" label="Address" />
                                                                                                                                                                                                <TableColumn :prop="score" label="score" />
                                                                                                                                                                                            </MyTable> -->
</template>

<style lang="scss" scoped>
.box {

    width: 1200rem;
    height: 660rem;
    margin-top: 20rem;
    margin-left: 30rem;
    overflow: hidden;
    box-shadow: 0 2px 10px 0 rgba(237, 238, 240, 0.50);
    border-radius: 8px;
    // padding: 30rem;
    background-color: #FFFFFF;

    .box-table {
        width: 680rem;
        margin: 60rem auto;
        // background-color: #ab6464;
    }
}
</style>

