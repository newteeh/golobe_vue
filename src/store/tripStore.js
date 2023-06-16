import { defineStore } from 'pinia';

export const useTripStore = defineStore('trip', {
    state: () => ({
        selectedOption:null
    }),
    actions: {
        setSelectedOption(trip) {
            this.selectedOption = trip;
        },
    },
});