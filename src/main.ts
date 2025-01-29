import { createApp } from "vue";
import App from "./App.vue";
import { PrimeVue } from "@primevue/core";
import Aura from "@primevue/themes/aura";
import { Button, Card, Column, DataTable, Panel, SelectButton } from "primevue";
import "./main.css";
const app = createApp(App);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
app.component("PrimeButton", Button);
app.component("PrimeCard", Card);
app.component("PrimePanel", Panel);
app.component("PrimeDataTable", DataTable);
app.component("PrimeColumn", Column);
app.component("PrimeSelectButton", SelectButton);
app.mount("#app");
