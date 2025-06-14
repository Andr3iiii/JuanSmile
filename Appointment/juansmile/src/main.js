/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from "@/plugins";

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";
import router from "./router";

// Styles
import "unfonts.css";

const app = createApp(App);

app.use(router);

registerPlugins(app);

app.mount("#app");
