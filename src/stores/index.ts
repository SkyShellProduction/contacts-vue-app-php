import { defineStore } from 'pinia'
import {type ContactsType, type AuthUserInterface, filterEnum} from '@/types/contacts';
import { useAuthStore } from './auth';
import { connect } from './connect';
export const useMainStore = defineStore('main', {
    state: () => {
      return {
        contacts: null as ContactsType[] | null,
        searchFilter: filterEnum.name,
        search: '',
        formData: {
          contacts_name: '',
          contacts_email: '',
          contacts_id: '',
          contacts_phone: '',
          contacts_tags: ''
        } as ContactsType
      }
    },
    actions: {
      setFormData(obj: ContactsType | null){
        this.formData.contacts_name = obj?.contacts_name || '';
        this.formData.contacts_email = obj?.contacts_email || '';
        this.formData.contacts_phone = obj?.contacts_phone || '';
        this.formData.contacts_tags = obj?.contacts_tags || '';
        this.formData.contacts_id = obj?.contacts_id || '';
      },
      setContacts(){
        const authStore = useAuthStore();
        const data = new FormData();
        data.append('users_id', authStore.token as string);
        const url = `${location.origin}/server/getContacts.php`;
        connect(url, 'POST', data)
        .then((res: ContactsType[] | []) => {
           this.contacts = res;
        })
        .catch(e => console.log(e));
      },
      addOrEditContact(obj: ContactsType){
        const authStore = useAuthStore();
        const dataSend = new FormData();
        dataSend.append(filterEnum.email, obj.contacts_email);
        dataSend.append(filterEnum.name, obj.contacts_name);
        dataSend.append(filterEnum.phone, obj.contacts_phone);
        dataSend.append(filterEnum.tags, obj.contacts_tags);
        dataSend.append('users_id', authStore.token as string);
        // edit contact
        if(obj.contacts_id) {
            dataSend.append(filterEnum.id, obj.contacts_id);
            const url = `${location.origin}/server/editContact.php`;
            connect(url, 'POST', dataSend).then((res: AuthUserInterface) => {
              if(res.success) {
                const idx = this.contacts?.findIndex(c => c.contacts_id === obj.contacts_id);
                if(idx !== -1 && idx !== undefined && this.contacts) {
                  this.contacts[idx] = obj;
                }
              }
            })
            .catch(e => console.log(e));
        }
        else {
          //add contact
            const url = `${location.origin}/server/addContact.php`;
            connect(url, 'POST', dataSend).then((res: AuthUserInterface) => {
              if(res.success && res.contacts_id) {
                this.contacts?.push({...obj, contacts_id: res.contacts_id});
              }
            })
            .catch(e => console.log(e));
        }
      },
      deleteContact(id: string){
        const dataSend = new FormData();
        dataSend.append(filterEnum.id, id);
        const url = `${location.origin}/server/deleteContact.php`;
        connect(url, 'POST', dataSend).then((res: AuthUserInterface) => {
          if(res.success) {
            const idx = this.contacts?.findIndex(c => c.contacts_id === id);
            if(idx !== -1) this.contacts?.splice(Number(idx), 1);
          }
        })
      } 
    },
    getters: {
      getOneContact: state => (id: string) => {
          const idx = state.contacts?.find(c => c.contacts_id === id);
          return idx;
      },
      getContacts: state => {
        if(!state.search) return state.contacts;
        return state.contacts?.filter((c) => {
          if(c[state.searchFilter as filterEnum].toLowerCase().includes(state.search.toLowerCase())) return c;
        })
      }
    }
})
