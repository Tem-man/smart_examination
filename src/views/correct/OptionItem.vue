<script setup>
/* eslint-disable */

const props = defineProps({
    letter: {
        type: Number
    },
    item: {
        type: Object,
        required: true
    },
    isJudge: {
        type: Boolean,
        default: false
    }
});

</script>
<template>
    <div class="option" :class="{ judge: props.isJudge }">
        <div class="mark-letter">{{ String.fromCharCode(props.letter) }}.</div>
        <p class="op-text">{{ props.item.inText }}</p>
    </div>
</template>
<style lang="scss" scoped>
.option {
    padding: 10rem 0;
    // background-color: bisque;


    .mark-letter {
        color: #131B26;
        font-weight: bold;
    }

    .op-text {
        color: #131B26;
    }
}

.judge {
    display: flex;
    align-items: center;

    .op-text {
        margin-left: 4rem;
    }
}
</style>
