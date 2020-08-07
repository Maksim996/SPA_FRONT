import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/auth/Login.vue'
import Register from '@/views/Register.vue'
import MyProfile from '@/views/pages/MyProfile.vue';
import CreateDirector from '@/views/pages/Director/CreateDirector.vue';
import ListDirectors from '@/views/pages/Director/ListDirectors.vue';
import NotFound from '@/views/pages/NotFound.vue';
import {ROLES} from '@/utils/constants';
import store from '@/store';

Vue.use(VueRouter);

const ifAuth = async (to, from, next) => {
  if (store.getters['auth/isLogged']) {
    const accessIsAllowed = to.meta.accessIsAllowed;
    const userRoleId = await getUserRoleId();

    if (accessIsAllowed !== undefined) {
      if (accessIsAllowed.includes(userRoleId)) {
        next();
      } else {
        next('/notFound');
      }
    } else {
      next();
    }
  } else {
    next('/login');
  }
};

const ifNotAuth = (to, from, next) => {
  if (!store.getters['auth/isLogged']) {
    next();
  } else {
    next('/');
  }
};

const getUserRoleId = async () => {
  let userRoleId = store.getters['auth/currentUser'];

  if (userRoleId === null) {
    await store.dispatch('auth/getUserCurrent');
    userRoleId = store.getters['auth/currentUser'];
  }

  return userRoleId.role_id;
};

const allRoles = () => Object.values(ROLES.ID);
const allRolesExcept = (...exceptRoles) => Object.values(ROLES.ID).filter(role => exceptRoles.indexOf(role) === -1);

const routes = [
  {
    path: '/login',
    name: 'Login',
    beforeEnter: ifNotAuth,
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    beforeEnter: ifNotAuth,
    component: Register
  },
  {
    path: '/',
    name: 'Home',
    beforeEnter: ifAuth,
    component: Home,
    meta: {
      accessIsAllowed: allRoles(),
    },
  },
  {
    path: '/my_profile',
    name: 'MyProfile',
    component: MyProfile,
    beforeEnter: ifAuth,
    meta: {
      accessIsAllowed: allRoles(),
    },
  },
  {
    path: '/create_director',
    name: 'CreateDirector',
    component: CreateDirector,
    beforeEnter: ifAuth,
    meta: {
      accessIsAllowed: [ROLES.ID.Root],
    },
  },
  {
    path: '/list_directors',
    name: 'ListDirectors',
    component: ListDirectors,
    beforeEnter: ifAuth,
    meta: {
      accessIsAllowed: allRoles(),
    },
  },
  {
    path: '*',
    name: 'notFound',
    component: NotFound,
    beforeEnter: ifAuth,
    meta: {
      accessIsAllowed: allRoles(),
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
