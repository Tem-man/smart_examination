<script setup>
/* eslint-disable */
import { useExamStore } from '@/store/examStore';
const dataExam = useExamStore();
const props = defineProps(['long'])

</script>
<template>
    <!-- <input type="text" class="option-input"> -->
    <div class="option-input" :class="props.long">
        <slot name="inputVal"></slot>

    </div>
</template>
<style lang="scss" scoped>
.option-input {
    width: 700rem;
    height: 36rem;
    outline: none;
    border-radius: 4rem;
    border: 1px solid#E1EAF4;
    caret-color: transparent;
    text-align: left;
    line-height: 36rem;
    padding-left: 14rem;

    // text-overflow: ellipsis;
    &:hover {
        border-color: #c6e2ff;
    }

}

.long {
    width: 800rem;
}
</style>