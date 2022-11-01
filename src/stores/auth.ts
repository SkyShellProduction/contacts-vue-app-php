import { defineStore } from 'pinia';
import type {AuthUserInterface} from '@/types/contacts';
import { connect } from './connect';
export const useAuthStore = defineStore('auth', {
    state: () => {
        return {
            token: null as string | null,
            answer: '',
        }
    },
    actions: {
        authUser(data: FormData){
            const url = `${location.origin}/server/auth.php`;
            connect(url, 'POST', data)
            .then((res: AuthUserInterface) => {
                this.answer = res.answer;
                if(res.token) {
                    this.token = res.token;
                }
            })
            .catch(e => console.log(e));
        },
        registerUser(data: FormData) {
            const url = `${location.origin}/server/register.php`;
            connect(url, 'POST', data)
            .then((res: AuthUserInterface) => {
                this.answer = res.answer;
                if(res.token){
                    this.token = res.token;
                }
            })
            .catch(e => console.log(e));
        },
        checkAuth(){
            const url = `${location.origin}/server/checkAuth.php`;
            connect(url, 'GET', null).then((res: AuthUserInterface) => {
                if(res.token) this.token = res.token;
            })
            .catch(e => console.log(e));
        }
    },
    getters: {

    }
});