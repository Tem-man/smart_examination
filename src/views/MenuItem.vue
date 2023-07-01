<script setup>

</script>
<template>
    <div class="content">
        <nav class="menu-nav">

            <div class="li" @click="$router.push('/TestView')">
                <i class="ri-file-list-3-fill"></i>
                <span class="link">考试</span>
            </div>

            <div class="li" @click="$router.push({ path: '/CorrectCatalog' })">
                <i class="ri-draft-fill"></i>
                <span class="link">批改</span>
            </div>

            <div class="li" @click="$router.push({ path: '/TestPaperLib' })">
                <i class="ri-file-word-2-fill"></i>
                <span class="link">题库</span>
            </div>

            <div class="li" @click="$router.push({ path: '/TableCpnent' })">
                <i class="ri-numbers-fill"></i>
                <span class="link">成绩</span>
            </div>


        </nav>
        <div class="router-view">
            <router-view></router-view>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.content {
    display: flex;
    background-color: #f2f4f7;
    width: 100vw;
    height: 100vh;
}

.menu-nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 180rem;
    background-color: #fff;


    .li {
        font-size: 20rem;
        padding: 12rem 46rem;
        margin-bottom: 50rem;
        // padding-left: 50rem;
        display: flex;
        align-items: center;


        // background-color: #656ddf;
        &:hover {
            background-color: #f0f6ffa4;

        }

        i {
            font-size: 28rem;
            // color: #8A8B99;
            color: #3A8BFF;
            padding-right: 8rem;
        }

        .link {
            text-decoration: none;
            color: #474C59;


        }
    }
}

.active {
    color: #3A8BFF;
    background-color: #F0F6FF;

}
</style>