import { defineStore } from 'pinia'

export const useFlightStore = defineStore('flightStore', {
    state:()=> {
        return {
            searchFlights: [],

    }
    },

    actions: {
    },
})