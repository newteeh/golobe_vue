import { defineStore } from 'pinia';

export const useCityStore = defineStore('city', {
    state: () => ({
        selectedFrom: null, // Выбранный город
        selectedTo:null,
    }),
    actions: {
        setSelectedFrom(city) {
            this.selectedFrom = city;
        },
        setSelectedTo(city) {
            this.selectedTo = city;
        },
    },
});