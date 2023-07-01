<script setup>
// import MaskBox from './MaskBox.vue';

/* eslint-disable */

</script>
<template>
    <div class="dialog-box">
        <div class="header">
            <p class="reative">关联知识点</p>
            <i class="ri-close-line" @click="$emit('hide')"></i>
        </div>

        <div class="main-box">

        </div>

        <div class="footer">
            <div class="cancel" @click="$emit('hide')">取消</div>
            <div class="confirm" @click="$emit('hide')">确定</div>
        </div>

    </div>
</template>
<style lang="scss" scoped>
.dialog-box {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 800rem;
    height: 600rem;
    z-index: 1100;
    border-radius: 10px;
    background-color: #FFF;

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16rem 24rem;
        border-bottom: 1px solid #edf1f6;


        .reative {
            color: #131B26;
            font-size: 18rem;
        }

        .ri-close-line {
            font-size: 24rem;
            font-weight: bold;
            color: #CAD5E6;
        }
    }

    .footer {
        position: fixed;
        right: 0;
        bottom: 0;
        width: 100%;
        padding: 18rem 24rem;
        padding-left: 560rem;
        border-top: 1px solid #edf1f6;
        display: flex;
        font-size: 14rem;

        .cancel {
            margin-right: 30rem;
            border: 1px solid #94C1FF;
            border-radius: 20rem;
            width: 90rem;
            text-align: center;
            line-height: 34rem;
            color: #3A8BFF;
        }

        .confirm {
            color: #FFFFFF;
            text-align: center;
            line-height: 34rem;
            border-radius: 20rem;
            background: #3B90FF;
            box-shadow: 0 2px 6px 0 #7AB7E0;
            width: 90rem
        }


    }
}
</style>