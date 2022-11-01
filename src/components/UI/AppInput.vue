<script setup lang="ts">
    import { computed } from '@vue/reactivity';
    interface Props {
        modelValue?: string | number,
        showLabel?: boolean,
        labelText?: string
    }
    const props = withDefaults(defineProps<Props>(), {
        modelValue: '',
        showLabel: true,
        labelText: ''
    });
    const emits = defineEmits(['update:modelValue']);
    const message = computed({
        get: () => props.modelValue,
        set: value => emits('update:modelValue', value)
    });
</script>
<template>
    <label class="app__label">
        <span v-if="showLabel">{{labelText}}</span>
        <input v-bind="$attrs"  
            class="app__input" 
            v-model="message">
    </label>
</template>
<style lang="scss">
    .app__label{
        display: block;
        font-size: 18px;
        span{
            display: block;
            margin-bottom: 10px;
        }
    }
    .app__input{
        display: block;
        width: 100%;
        padding: 10px 15px;
        border: 1px solid var(--blackColor);
        font-size: 18px;
        &:focus{
            border-color: var(--blueColor);
        }
    }
</style>