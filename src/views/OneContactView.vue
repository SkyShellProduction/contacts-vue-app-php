<script setup lang="ts">
    import { useMainStore } from '@/stores';
    import { useRoute } from 'vue-router';
    import { computed } from '@vue/reactivity';
    import AppButton from '@/components/UI/AppButton.vue';
    const router = useRoute();
    const store = useMainStore();
    const getOneContact = computed(() => store.getOneContact(router.params.id as string));
</script>
<template>
    <div class="one__contact">
        <div class="container">
            <h2 class="contact__title">Контакт</h2>
            <div class="one__contact-info">
                <div class="one__contact-item">
                    <h3>Ф.И.О</h3>
                    <p>{{getOneContact?.contacts_name}}</p>
                </div>
                <div class="one__contact-item">
                    <h3>Электронная почта</h3>
                    <a :href="`mailto:${getOneContact?.contacts_email}`">{{getOneContact?.contacts_email}}</a>
                </div>
                <div class="one__contact-item">
                    <h3>Номер телефона</h3>
                    <a :href="`tel:${getOneContact?.contacts_phone}`">{{getOneContact?.contacts_phone}}</a>
                </div>
                <div class="one__contact-item">
                    <h3>Теги</h3>
                    <p>{{getOneContact?.contacts_tags}}</p>
                </div>
            </div>
            <AppButton text="Вернуться назад" filled path="/"/>
        </div>
    </div>
</template>