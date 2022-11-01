<script setup lang="ts">
    import AppButton from '@/components/UI/AppButton.vue';
    import AppInput from '@/components/UI/AppInput.vue';
    import { useAuthStore } from '@/stores/auth';
    import { ref } from 'vue';
    const type = ref('login');
    const store = useAuthStore();
    function sendData(e: Event){
        const data = new FormData(e.target as HTMLFormElement);
        if(type.value === 'login') {
            store.authUser(data);
        }
        else if(type.value === 'register') {
            store.registerUser(data);
        }
    }
</script>
<template>
    <div class="auth">
        <div class="container">
            <form class="auth__form" @submit.prevent="sendData($event)">
                <h3 class="contact__title">{{type === 'register' ? 'Зарегистрироваться' : 'Войти'}}</h3>
                <AppInput label-text="Логин" 
                    placeholder="Логин" 
                    class="auth__item" name="users_login"
                    required/>
                <AppInput label-text="Пароль" 
                    type="password"
                    placeholder="Пароль" 
                    class="auth__item" name="users_password"
                    required />
                <p class="auth__answer">{{store.$state.answer}}</p>
                <AppButton text="Отправить" filled class="auth__btn" mode="btn"/>
                <p class="auth__excerpt" v-if="type === 'login'" >
                    Ещё нет аккаунта? <a href="#!" @click.prevent="type = 'register'">Зарегистрироваться</a>
                </p>
                <p class="auth__excerpt" v-else>
                    Уже есть аккаунт? <a href="#!" @click.prevent="type = 'login'">Войти</a>
                </p>
           </form>
        </div>
    </div>
</template>