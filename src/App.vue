<script setup lang="ts">
  import { useMainStore } from './stores';
  import { useAuthStore } from './stores/auth';
  import { useRouter } from 'vue-router';
  import { storeToRefs } from 'pinia';
  import { watch } from 'vue';
  import TheHeader from '@/components/TheHeader.vue';
  const router = useRouter();
  const store = useMainStore();
  const authStore = useAuthStore();
  const {token} = storeToRefs(authStore);
  router.beforeEach((to) => {
    if(to.meta.requireAuth && !token.value) {
        router.push('/auth');
    }
  });
  function redirect(){
    router.push('/');
    authStore.checkAuth();
    if(token.value) {
      store.setContacts();
    }
  }
  redirect();
  watch(token, redirect);
</script>
<template>
  <div class="app">
    <TheHeader />
    <main class="main">
      <RouterView v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <Component :is="Component" />
        </Transition>
      </RouterView>
    </main>
  </div>
</template>
<style lang="scss">
    .fade{
      &-enter-active, &-leave-active{
        transition: 250ms linear;
      }
      &-enter-from, &-leave-to{
        opacity: 0;
        transform: scale(0.9);
        filter: blur(20px) brightness(0%);
      }
    }
</style>
