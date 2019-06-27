import store from '../../store';

export const isLogged = async (to, from, next) => {
    if(await store.getters.isUserLogIn) {
        next();
    } else {
        next('/login')
    }
}