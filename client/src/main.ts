import { useDealsStore } from "./stores/deals";
import pinia from "./stores/deals";
import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App).use(pinia);
app.config.globalProperties.mainStore = useDealsStore();
app.mount("#app");
