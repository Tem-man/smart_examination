<script setup>
/* eslint-disable */
import { computed, ref } from 'vue';

// const props = defineProps(['list', 'obj', 'titleIndex','fontSize']);
const props = defineProps({
    list: {
        type: Object,
    },
    obj: {
        type: Array,
    },
    titleIndex: {
        type: Number,
        default: 0
    },
    fontSize: {
        type: String,
        default: '12rem'
    },
    keys: {
        type: Array,
        default: []
    }
});
// let every =Object.assign({});
// dataCorrect.currentType = props.list.title;

let listScore = computed(() => {
    let allScore = 0;
    for (const item of props.obj) {
        allScore += item.score * 1;
    }
    return allScore;
})

const fontSize = ref(props.fontSize);
let cnNum = ref('');
// let id = 4;
switch (props.titleIndex) {
    case 0:
        cnNum.value = "一";
        break;
    case 1:
        cnNum.value = "二";
        break;
    case 2:
        cnNum.value = "三";
        break;
    case 3:
        cnNum.value = "四";
        break;
    case 4:
        cnNum.value = "五";
        break;
}


</script>
<template>
    <div class="type-block" v-if="props.keys[0]">
        <div class="catalog-title">
            <span class="qust-index">{{ cnNum }}.</span>
            <span class="content-title">{{ props.list.title }}</span>
            <span>(</span>
            <span>共{{ props.obj.length }}题，</span>
            <span>{{ listScore }}.0 </span>
            <span>分)</span>
        </div>
        <slot name="descType"></slot>
        <slot name="qustDetail"></slot>
    </div>
</template>
<style lang="scss" scoped>
.type-block {
    text-align: left;
    padding-left: 16rem;
    cursor: pointer;
    overflow: hidden;

    .catalog-title {
        font-size: v-bind(fontSize);
        font-weight: bold;
        color: #181E33;
        margin-bottom: 12rem;

        .qust-index {
            padding-right: 3rem;
        }

        .content-title {
            margin-right: 4rem;
        }
    }


}
</style>