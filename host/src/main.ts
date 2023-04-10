import { createApp, defineAsyncComponent } from "vue";
import "./style.css";
import App from "./App.vue";
const ToggleButton = defineAsyncComponent(() => import("remote/ToggleButton"));

const app = createApp(App);
app.component("ToggleButton", ToggleButton);
app.mount("#app");
