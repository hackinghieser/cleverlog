import { createApp } from "vue";
import App from "./App.vue";
import { PrimeVue } from "@primevue/core";
import Aura from "@primevue/themes/aura";
import { Button } from "primevue";
const app = createApp(App);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
app.component("Button", Button);
app.mount("#app");
