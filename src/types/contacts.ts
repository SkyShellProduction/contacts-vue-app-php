export interface ContactsType {
    contacts_name: string;
    contacts_email: string;
    contacts_phone: string;
    contacts_tags: string;
    contacts_id: string;
}
export enum filterEnum {
    name = 'contacts_name',
    email = 'contacts_email',
    phone = 'contacts_phone',
    tags = 'contacts_tags',
    id = 'contacts_id',
};
export const filtersData =  [
    {type: filterEnum.name, name: 'По имени'},
    {type: filterEnum.email, name: 'По почте'},
    {type: filterEnum.phone, name: 'По номеру'},
    {type: filterEnum.tags, name: 'По тегам'},
]
export interface AuthUserInterface{
    answer: string,
    token?: string,
    success?: boolean;
    contacts_id?: string
}