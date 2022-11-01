<script setup lang="ts">
    import { useMainStore } from '@/stores';
    import { useRouter } from 'vue-router';
    import { storeToRefs } from 'pinia';
    import AppInput from '@/components/UI/AppInput.vue';
    import AppButton from '@/components/UI/AppButton.vue';
    const router = useRouter();
    const store = useMainStore();
    const {formData} = storeToRefs(store);
    function sendData(){
        const data = {...formData.value};
        store.addOrEditContact(data);
        store.setFormData(null);
        router.push('/');
    }
</script>
<template>
    <div class="contact__setting-page">
        <div class="container">
            <h2 class="contact__title">{{formData.contacts_id ? 'Изменить' : 'Добавить'}} контакт</h2>
            <form action="" class="contact__form" @submit.prevent="sendData">
                <AppInput label-text="Ф.И.О" 
                    placeholder="Ваше Ф.И.О" 
                    class="contact__item" required v-model="store.$state.formData.contacts_name"/>
                <AppInput label-text="Номер" 
                    placeholder="Ваш Номер"
                    type="tel" 
                    class="contact__item" required v-model="store.$state.formData.contacts_phone"/>
                <AppInput label-text="Почта" 
                    placeholder="Ваш адрес электронной почты" 
                    type="email"
                    class="contact__item" v-model="store.$state.formData.contacts_email"/>
                <AppInput label-text="Теги" 
                    placeholder="Введите какие-нибудь теги для контакта" 
                    class="contact__item" v-model="store.$state.formData.contacts_tags"/>
                <div class="contact__control">
                    <AppButton text="Отправить" mode="btn" filled/>
                    <AppButton text="Отмена" path="/" @click="store.setFormData(null)"/>
                </div>
            </form>
        </div>
    </div>
</template>