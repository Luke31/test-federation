import { createApp, defineAsyncComponent } from "vue";
import "./style.css";
import App from "./App.vue";
const MyButton = defineAsyncComponent(() => import("remote/MyButton"));

const app = createApp(App);
app.component("MyButton", MyButton);
app.mount("#app");
