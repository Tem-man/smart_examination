<script setup>
/* eslint-disable */


</script>
<template>
    <div class="user">
        <div class="user-photo">
            <img src="../../assets/photo_80.jpg" alt="">
        </div>

        <div class="user-info">
            <p class="name">陈小天</p>
            <p>20301400xx</p>
            <p>默认班级</p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.user {
    display: flex;
    padding: 20rem 20rem;
    border-bottom: solid #F2F2F2 1px;

    .user-photo {
        width: 60rem;
        height: 60rem;
        border-radius: 50%;
        overflow: hidden;
    }

    .user-info {
        margin-left: 12rem;

        p {
            color: #8A8B99;
            margin-bottom: 4rem;
        }

        .name {
            font-size: 14rem;
            font-weight: bold;
            color: #131B26;
        }
    }
}
</style>
