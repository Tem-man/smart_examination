<script setup>
/* eslint-disable */
import { computed, ref } from 'vue';
import { inputVal } from './store';
let props = defineProps(['data', 'columns', 'prop']);

// const userName = computed(() =>
//     data.map((item) => item.userName)
// );
// const keyword = ref('');
const sortKey = ref(false);
const sortOrder = ref(1);
const isActive = ref(false);
const sortBy = () => {
    sortKey.value = true;
    sortOrder.value *= -1;
    isActive.value = true;
}

const filterData = computed(() => {
    let { data } = props;
    if (inputVal.value) {
        data = data.filter((item) => {

            return item.userName.includes(inputVal.value) || item.stuNo.includes(inputVal.value);
        })
    }

    if (sortKey.value) {
        data = data.sort((a, b) => {

            return (a.score - b.score) * sortOrder.value;
        })
    }
    return data;
})

const editing = ref(false);
const todoEdit = () => {
    editing.value = false;
}

const edite = (key) => {
    editing.value = key;
}
</script>
<template>
    <table class="table">
        <!-- <slot :userName="userName" :stuNo="stuNo" :course="course" :score="score"></slot> -->
        <thead class="thead">
            <tr>
                <th v-for="(col, index) in props.columns" :key="index">
                    {{ col.label }}
                    <span class="arrow" :class="[sortOrder > 0 ? 'asc' : 'dsc', { active: isActive }]"
                        v-show="col.key == 'score'" @click="sortBy">
                    </span>
                </th>
            </tr>
        </thead>

        <tbody class="tbody">
            <tr v-for="(item, Index) in filterData" :key="Index">
                <td v-for="(col, index) in props.columns" :key="index">
                    <div @click="edite(col.key + Index)" v-if="col.key == 'score'">
                        <input type="text" v-if="(col.key + Index) == editing" v-model="item[col.key]" @blur="todoEdit"
                            @keyup.enter="todoEdit">
                        <span v-else> {{ item[col.key] }}</span>
                    </div>
                    <div v-else>{{ item[col.key] }}</div>
                </td>

            </tr>
        </tbody>

    </table>
</template>

<style lang="scss" scoped>
.thead {

    tr {
        th {
            height: 40rem;
            line-height: 40rem;
            padding: 0 20rem;
            font-size: 16rem;
            color: #f9f9f9;
            background-color: #42b983;
            background-color: #3A8BFF;
            // background-color: #548ee0;
            // border: 1px solid black;

            .arrow {
                display: inline-block;
                vertical-align: middle;
                width: 0;
                height: 0;
                margin-left: 5px;
                opacity: 0.66;
                cursor: pointer;
            }

            .active {
                opacity: 1;

            }

            .arrow.asc {
                border-left: 4px solid transparent;
                border-right: 4px solid transparent;
                border-bottom: 4px solid #fff;
            }

            .arrow.dsc {
                border-left: 4px solid transparent;
                border-right: 4px solid transparent;
                border-top: 4px solid #fff;
            }
        }
    }
}

.tbody {
    tr {


        td {
            font-size: 16rem;
            height: 40rem;
            line-height: 40rem;
            padding: 0 20rem;
            text-align: center;
            // color: #000;
            // color: #474C59;
            // border-top: 1px solid #ebeef5;
            background-color: #f9f9f9;

            // padding-left: 4rem;
            input {
                width: 50rem;
                height: 16rem;
                line-height: 16rem;
                padding: 0 14rem;
                text-align: center;
                outline: none;
                border: 1px solid #ACB4BF;

                &:focus {
                    border: 1px solid #3A8BFF;
                }
            }

        }
    }
}
</style>