<script setup>
/* eslint-disable */
import DialogBox from './DialogBox.vue';
import MaskBox from './MaskBox.vue';
import { ref } from 'vue';
/* eslint-disable */
const isDialog = ref(false);

</script>
<template>
    <div class="know-box" @click="isDialog = true">
        <p class="knowledge">知识点</p>
        <div class="relate-point"><i class="ri-add-line"></i>
            关联知识点
        </div>
    </div>
    <!-- <DialogBox v-show="isDialog"></DialogBox> -->
    <MaskBox v-if="isDialog" :showDia="isDialog">
        <DialogBox @hide="isDialog = false"></DialogBox>
    </MaskBox>
</template>
<style lang="scss" scoped>
.know-box {
    display: flex;
    align-items: center;
    margin-left: 32rem;
    margin-top: 24rem;

    .knowledge {
        font-size: 12rem;
    }

    .relate-point {
        margin-left: 17rem;
        display: flex;
        height: 26rem;
        justify-content: center;
        font-size: 10rem;
        padding: 0 10rem;
        line-height: 26rem;
        vertical-align: top;
        color: #95a1b3;
        border: 1px dashed #E1E1E5;
        outline: none;
        border-radius: 4rem;
        cursor: pointer;

        .ri-add-line {
            font-size: 16rem;
            font-weight: bold;
            line-height: 26rem;
            color: #CAD5E6;
        }
    }
}
</style>