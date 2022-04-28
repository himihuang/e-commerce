import { createApp } from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

//vue-loading
import VueLoading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

//sweet-alert
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

//icons
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "bootstrap-icons/font/bootstrap-icons.css";

//validator
import { Form, Field, ErrorMessage, defineRule, configure } from "vee-validate";
import AllRules from "@vee-validate/rules";
import { localize, setLocale } from "@vee-validate/i18n";
import zhTW from "@vee-validate/i18n/dist/locale/zh_TW.json";

//ckeditor
import CKEditor from "@ckeditor/ckeditor5-vue";

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: false, // 當輸入任何內容直接進行驗證
});
// 設定預設語系
setLocale("zh_TW");

//WOW.js
import "animate.css";
import WOW from "wow.js";

new WOW({
  boxClass: "wow",
  animateClass: "animate__animated",
  offset: 0,
  mobile: true,
  live: true,
}).init();

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.component("loading", VueLoading);

app.component("Form", Form);
app.component("Field", Field);
app.component("ErrorMessage", ErrorMessage);

app.use(VueAxios, axios);
app.use(VueSweetalert2);
app.use(CKEditor);

app.use(router);
app.mount("#app");
