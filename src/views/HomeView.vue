<script setup lang="ts">
    import AllContacts from '@/components/AllContacts.vue';
    import AppSearchForm from '@/components/AppSearchForm.vue';
</script>

<template>
    <div class="home__page">
        <AppSearchForm />
        <AllContacts />
        <RouterLink to="/contact-setting" class="home__page-link">+</RouterLink>
    </div>
</template>
