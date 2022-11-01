<script setup lang="ts">
    import { useMainStore } from '@/stores';
    import { filtersData } from '@/types/contacts';
    import AppInput from '@/components/UI/AppInput.vue';
    const store = useMainStore();
</script>

<template>
    <div class="search">
        <div class="container">
            <div class="search__content">
                <select class="search__select" v-model="store.$state.searchFilter">
                    <option :value="one.type" 
                        v-for="one in filtersData" 
                        :key="one.type">
                        {{one.name}}
                    </option>
                </select>
                <AppInput 
                    placeholder="Поиск в контактах" 
                    class="search__input"
                    :show-label="false"
                    v-model="store.$state.search"/>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.search{
    margin-bottom: 30px;
    &__content{
        display: flex;
        @media(max-width: 600px){
            flex-direction: column-reverse;
        }
    }
    &__input{
        display: block;
        flex-grow: 1;
        width: 100%;
        
    }
    &__select{
        padding: 10px 15px;
        font-size: 17px;
        border-radius: 25px;
        background: var(--blueColor);
        color: var(--whiteColor);
        margin-right: 25px;
        @media(max-width: 600px){
            margin-right: 0;
            margin-top: 15px;
        }
    }
}
</style>