<script setup>
/* eslint-disable */


</script>
<template>
    <div class="footer">
        <div class="reset" @click="$emit('hide')">
            <i class="ri-restart-line"></i>
            <p>重置</p>
        </div>
        <div class="final" @click="$emit('hide')">完成</div>

    </div>
</template>
<style lang="scss" scoped>
.footer {
    padding: 30rem 24rem;
    padding-left: 666rem;
    display: flex;
    font-size: 14rem;
    margin-top: 8rem;
    // text-align: right;


    .reset {
        margin-right: 30rem;
        border-radius: 20rem;
        // width: 90rem;
        text-align: center;
        height: 34rem;
        line-height: 34rem;
        color: #91A0B5;
        display: flex;

        .ri-restart-line {
            margin-right: 8rem;
            color: #CAD5E6;

        }
    }

    .final {
        color: #FFFFFF;
        text-align: center;
        height: 34rem;
        line-height: 34rem;
        border-radius: 20rem;
        background: #3B90FF;
        box-shadow: 0 2px 6px 0 #7AB7E0;
        width: 90rem
    }
}
</style>