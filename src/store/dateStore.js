import { defineStore } from 'pinia';

export const useDateStore = defineStore('date', {
    state: () => ({
        depart_date: null, // Выбранный город
        return_date:null,
    }),
    actions: {
        setDepartDate(date) {
            this.depart_date = date;
        },
        setReturnDate(date) {
            this.return_date = date;
        },
    },
});