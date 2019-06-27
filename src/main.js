import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './routes/routes';
import store from './store';
import * as fb from 'firebase';

Vue.use(VueRouter);
Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    store,
    router,
    beforeCreate() {
        fb.initializeApp({
            apiKey: "AIzaSyDaTgCYQWwmvx6yw3hrZQNCCZogmc1mjUE",
            authDomain: "vue-order-bf0b71.firebaseapp.com",
            databaseURL: "https://vue-order-bf0b71.firebaseio.com",
            projectId: "vue-order-bf0b71",
            storageBucket: "",
            messagingSenderId: "663875315480",
            appId: "1:663875315480:web:9fee2121087d7028"
        });

        fb.auth().onAuthStateChanged(user => {
            if (user) {
                this.$store.dispatch('autoLoginUser', {id: user.uid})
            }
        });

        this.$store.dispatch('loadOrders')

    }
}).$mount('#app');
