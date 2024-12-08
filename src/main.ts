import { createApp } from "vue";
import App from "./App.vue";
import { PrimeVue } from "@primevue/core";
import Aura from "@primevue/themes/aura";
import { Button, Card, Panel } from "primevue";
import "./main.css";
const app = createApp(App);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
app.component("Button", Button);
app.component("Card", Card);
app.component("Panel", Panel);
app.mount("#app");
