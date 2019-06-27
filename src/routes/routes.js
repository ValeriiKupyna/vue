import VueRouter from 'vue-router';
import Home from '../pages/Home/Home';
import Login from '../pages/auth/Login/Login';
import Registration from '../pages/auth/Registration/Registration';
import NewAdd from '../pages/NewAdd/NewAdd';
import Orders from '../pages/Orders/Orders';
import UserOrders from '../pages/UserOrders/UserOrders';
import UserOrderDetail from '../pages/UserOrderDetail/UserOrderDetail';
import { isLogged } from './guards';

export default new VueRouter({
  routes: [
    {
      path: '',
      name: 'home',
      component: Home,
      beforeEnter: isLogged,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/registration',
      name: 'Registration',
      component: Registration,
    },
    {
      path: '/new',
      name: 'new',
      component: NewAdd,
      beforeEnter: isLogged,
    },
    {
      path: '/orders',
      name: 'Orders',
      component: Orders,
      beforeEnter: isLogged,
    },
    {
      path: '/user-orders',
      name: 'userOrders',
      component: UserOrders,
      beforeEnter: isLogged,
    },
    {
      path: '/user-orders/:id',
      props: true,
      name: 'userOrders',
      component: UserOrderDetail,
      beforeEnter: isLogged,
    }
  ],
  mode: 'history',
  scrollBehavior () {
    return {
      x: 0,
      y: 0,
    }
  }
})
