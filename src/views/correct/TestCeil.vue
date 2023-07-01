<script setup>
/* eslint-disable */
const props = defineProps(['title'])
</script>
<template>
    <div class="list-li">
        <p class="list-title">{{ props.title }}</p>
        <p class="list-class">
            <i class="ri-group-line"></i>
            <span>默认班级</span>
        </p>
        <p class="list-li-time">
            <i class="ri-time-line"></i>
            <span>考试时间：04-29 23:20 至 12-30 00:20 </span>
        </p>
    </div>
</template>
<style lang="scss" scoped>
.list-li {
    margin-bottom: 20rem;
    border-bottom: 1px solid #F2F2F2;

    .list-title {
        font-size: 13rem;
        color: #070707;
    }

    .list-class {
        margin-top: 10rem;
        display: flex;
        align-items: center;
        color: #8A8B99;

        span {
            margin-left: 4rem;
        }
    }

    .list-li-time {
        margin-top: 10rem;
        display: flex;
        align-items: center;
        color: #8A8B99;
        margin-bottom: 14rem;

        span {
            margin-left: 4rem;
        }
    }


}
</style>