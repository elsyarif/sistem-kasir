import "primevue/resources/themes/tailwind-light/theme.css";
import "primevue/resources/primevue.min.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "./assets/styles/layout.scss";

import { createApp } from "vue";
import PrimeVue from "primevue/config";
import App from "./App.vue";
import router from "./router";
import Avatar from 'primevue/avatar';
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import StyleClass from 'primevue/styleclass';
import Ripple from 'primevue/ripple'

router.beforeEach(function (to, from, next) {
    window.scrollTo(0, 0);
    next();
});

const app = createApp(App);

//
app.use(PrimeVue, { ripple: true, inputStyle: "Outlined" });
app.use(router);

//directive
app.directive('Ripple', Ripple);
app.directive('styleclass', StyleClass);

// components
app.component("Avatar", Avatar);
app.component("Dialog", Dialog);
app.component("Button", Button);

app.mount("#app");
