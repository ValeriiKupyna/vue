import Vue from 'vue';
import Vuex from 'vuex'
import orders from "./orders";
import user from "./user";
import common from "./common";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        orders,
        common,
        user,
    }
});