<script setup>
/* eslint-disable */

const props = defineProps(['li'])
// const { storage, isActive, index } = defineProps(['storage', 'isActive', 'index']);

</script>
<template>
    <div class="detail">
        <div class="list-type">
            <div :id="props.li.order"></div>
            <span class="qust-index"> {{ props.li.order }} <span>.</span> </span>
            <span class="title">({{ props.li.title }},</span>
            <span class="qust-score"> {{ props.li.score }}.0分)</span>

        </div>
        <div class="content-title"> {{ li.questVal.inText }}</div>
    </div>
</template>
<style lang="scss" scoped>
.list-type {
    display: flex;
    // align-items: center;
    text-align: left;
    margin-left: -15rem;
    padding-left: 16rem;
    margin-right: 2rem;
    height: 24rem;
    // font-size: 14rem;
    color: #131B26;

    .qust-index {
        margin-right: 4rem;
        font-size: 13rem;
    }

    .title,
    .qust-score {
        color: #8A8B99;

    }

    span {

        line-height: 30rem;
    }

    .qust-score {
        padding: 0 3rem;
    }

}

.content-title {
    width: 780rem;
    padding-top: 10rem;
    padding-bottom: 10rem;
    // white-space: wrap;
    // overflow: hidden;
    // text-overflow: ellipsis;
}
</style>
