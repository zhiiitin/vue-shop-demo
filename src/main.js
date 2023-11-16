import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;
axios.defaults.withCredentials = true;
Vue.use(VueAxios, axios);

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    const api = `${process.env.VUE_APP_API_PATH}/api/user/check`;
    axios.post(api).then(function (response) {
      if (response.data.success) {       
        next();
      }else{
        next({
          path: '/login',
        });
      }
    });
  } else {
    next();
  }
});
