<script setup>
/* eslint-disable */
const props = defineProps(['showDia'])
</script>
<template>
    <Teleport to="body">
        <div class="mask" v-if="props.showDia">
            <slot></slot>
        </div>
    </Teleport>
</template>
<style lang="scss" scoped>
.mask {
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(16, 26, 41, 0.76);


}
</style>