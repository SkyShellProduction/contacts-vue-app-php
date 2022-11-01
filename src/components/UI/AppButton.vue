<script setup lang="ts">
    interface Props {
        mode?: string,
        path?: string,
        filled?: boolean,
        text: string 
    }
    const props = withDefaults(defineProps<Props>(), {
        mode: 'link',
        path: '/',
        filled: false,
        text: ''
    });
</script>
<template>
    <RouterLink :to="path" class="app__btn" :class="{active: filled}" v-if="mode === 'link'">
        <span>{{text}}</span>
    </RouterLink>
    <button class="app__btn" :class="{active: filled}" v-else-if="mode === 'btn'">
        <span>{{text}}</span>
    </button>
</template>
<style lang="scss">
    .app__btn{
        display: block;
        cursor: pointer;
        width: fit-content;
        padding: 12px 20px;
        font-size: 18px;
        color: var(--blackColor);
        border-radius: 25px;
        border: 1px solid var(--blueColor);
        background: transparent;
        transition: 250ms linear;
        &:hover, &.active{
            background: var(--blueColor);
            color: var(--whiteColor);
        }
    }
</style>