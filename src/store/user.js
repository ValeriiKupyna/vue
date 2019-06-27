import * as fb from 'firebase';

const user = {
    state: {
        user: null
    },
    getters: {
        user(state) {
            return state.user;
        },
        isUserLogIn(state) {
            return !!state.user
        }
    },
    actions: {
        async registerUser({commit}, {email, password}) {
            commit('clearError');
            commit('setLoading', true);

            try {
                const {user} = await fb.auth().createUserWithEmailAndPassword(email, password);

                commit('setUser', {id: user.uid});
                commit('setLoading', false);
            } catch (error) {
                commit('setError', error.message);
                commit('setLoading', false);
                throw error;
            }

            commit('setLoading', false);
        },
        async loginUser({commit}, {email, password}) {
            commit('clearError');
            commit('setLoading', true);

            try {
                const {user} = await fb.auth().signInWithEmailAndPassword(email, password);

                commit('setUser', {id: user.uid});
                commit('setLoading', false);
            } catch (error) {
                commit('setError', error.message);
                commit('setLoading', false);
                throw error;
            }
        },
        autoLoginUser({commit}, payload) {
            commit('setUser', payload)
        },
        logOut({commit}) {
            fb.auth().signOut();
            commit('setUser', null);
        },
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload;
        },
    },
};

export default user;