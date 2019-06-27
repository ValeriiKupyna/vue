import * as fb from 'firebase';

const orders = {
    state: {
        orders: []
    },
    getters: {
        orders(state) {
            return state.orders;
        },
        promoOrders(state) {
            return state.orders.filter((order) => order.promo);
        },
        userOrders(state) {
            return state.orders;
        },
        orderById(state) {
            return (id) => {
                return state.orders.find(order => order.id === id);
            }
        }
    },
    actions: {
        async createOrder({commit, getters}, payload) {
            try {

                console.log(getters.user);

                const order = await fb.database().ref('orders').push({
                    ...payload,
                    ownerId: getters.user.id
                });

                commit('createOrder', {
                    ...payload,
                    id: order.id
                });
            } catch (e) {
                commit('setError', e.message);
                throw e;
            } finally {
                commit('setLoading', false);
            }
        },
        async loadOrders({commit}) {
            commit('clearError');
            commit('setLoading', true);

            try {
                const fireBaseRes = await fb.database().ref('orders').once('value');
                const fireBaseValue = fireBaseRes.val();

                const orders = [];

                Object.keys(fireBaseValue).forEach((key) => {
                    orders.push({
                        ...fireBaseValue[key],
                        id: key,

                    })
                });

                commit('loadOrders', orders);
                commit('setLoading', false);
            } catch (error) {
                commit('setError', error.message);
                commit('setLoading', false);
                throw error;
            }
        },
    },
    mutations: {
        createOrder(state, payload) {
            state.orders.push(payload);
        },
        loadOrders(state, payload) {
            state.orders = payload;
        },
    }
};

export default orders;