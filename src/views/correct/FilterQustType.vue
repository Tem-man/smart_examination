<script setup>
/* eslint-disable */
import { ref, watch } from 'vue';
import { usePaperStore } from '@/store/paperStore';
const dataPaper = usePaperStore();
const isCheckSub = ref(true);
// // const isCheckObj = ref(false);
watch(isCheckSub, () => {

    dataPaper.checkQustType(isCheckSub.value);
    console.log('djksdkdkm');

})
let list = [{ label: '显示客观题', title: 'obj' }]
</script>
<template>
    <div class="filter">
        <div class="filter-box" v-for="(item, index) in list" :key="index">
            <input type="checkbox" class="checkbox" v-model="isCheckSub">
            <label>{{ item.label }}</label>
        </div>

        <!-- <div class="filter-box">
                                        <input type="checkbox" class="checkbox" v-model="isCheckSub">
                                        <label>显示主观题</label>
                                    </div> -->

    </div>
</template>
<style lang="scss" scoped>
.filter {
    margin-top: 20rem;
    border-bottom: solid #F2F2F2 1px;

    .filter-box {
        padding-left: 18rem;
        margin-bottom: 8rem;
        height: 24rem;
        // background-color: bisque;

        // line-height: 20rem;
        .checkbox,
        label {
            line-height: 24rem;
            vertical-align: middle;
        }

        .checkbox {
            width: 15rem;
            height: 15rem;
        }

        label {
            margin-left: 10rem;
            font-size: 14rem;
            color: #131b26;
        }


    }
}
</style>
