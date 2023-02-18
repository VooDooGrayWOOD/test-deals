import { createPinia, setActivePinia, defineStore } from "pinia";
const pinia = createPinia();
setActivePinia(pinia);
export default pinia;
import axios from "axios";

export const useDealsStore = defineStore("dealsStore", {
    state: () => ({
        deals: [] as string[]
    }),
    getters: {
        getDeals(state) {
            return state.deals;
        },
    },
    actions: {
        async fetchDeals() {
            try {
                const data = await axios.get("http://localhost:3000/deals");
                this.deals = await data.data;
                console.log(this.deals);
            } catch (e) {
                alert(e);
            }
        },
    },
});

