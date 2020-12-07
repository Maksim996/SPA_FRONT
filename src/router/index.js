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
import Layout from '@/views/Layout';
import EditDirector from '@/views/pages/Director/EditDirector'
import EditPassword from '@/views/pages/Director/EditPassword';
import EditAvatar from '@/views/pages/EditAvatar';
import EditMyProfile from '@/views/pages/Director/EditMyProfile';
import SettingMyProfile from '@/views/layout/SettingMyProfile';
import Area from '@/views/pages/Root/Area';

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
    path: '/setting-my-profile',
    component: Layout,
    beforeEnter: ifAuth,
    meta: {
      accessIsAllowed: allRoles(),
    },
    children: [
      {
        path: '/',
        name: 'SettingMyProfile',
        component: SettingMyProfile,
        beforeEnter: ifAuth,
        meta: {
          accessIsAllowed: allRoles(),
        },
      },
      {
        path: 'edit/password',
        name: 'EditPassword',
        component: EditPassword,
        beforeEnter: ifAuth,
        meta: {
          accessIsAllowed: allRoles(),
          breadcrumb: [
            { text:'SettingMyProfile', exact:true, to: '/setting-my-profile'},
            { text:'ChangePassword'},
          ]
        },
      },
      {
        path: 'edit/profile',
        name: 'EditProfile',
        component: EditMyProfile,
        beforeEnter: ifAuth,
        meta: {
          accessIsAllowed: allRoles(),
          breadcrumb: [
            { text:'SettingMyProfile', exact:true, to: '/setting-my-profile'},
            // { text:'MyProfile', exact:true, to: '/my-profile'},
            { text:'EditMyProfile'},
          ]
        },
      },
      {
        path: 'edit/avatar',
        name: 'EditAvatar',
        component: EditAvatar,
        beforeEnter: ifAuth,
        meta: {
          accessIsAllowed: allRoles(),
          breadcrumb: [

            { text:'SettingMyProfile', exact:true, to: '/setting-my-profile'},
            // { text:'MyProfile', exact:true, to: '/my-profile'},
            { text:'ChangeAvatar'},
          ]
        },
      },
    ]

  },
  {
    path: '/my-profile',
    component: Layout,
    beforeEnter: ifAuth,
    meta: {
      accessIsAllowed: allRoles(),
    },
    children: [
      // this is also a route record
      {
        path: '/',
        name: 'MyProfile',
        component: MyProfile,
        beforeEnter: ifAuth,
        meta: {
          accessIsAllowed: allRoles(),
        },
      },
      {
        path: '/area',
        component: Area,
        beforeEnter: ifAuth,
        meta: {
          accessIsAllowed: [ ROLES.ID.Root ],
          breadcrumb: [
            { text: 'Area', exact: true, to: '/area' },
            { text: 'Area' },
          ]
        }
      },
      // {
      //   path: 'edit/password',
      //   name: 'EditPassword',
      //   component: EditPassword,
      //   beforeEnter: ifAuth,
      //   meta: {
      //     accessIsAllowed: allRoles(),
      //     breadcrumb: [
      //       { text:'MyProfile', exact:true, to: '/my-profile'},
      //       { text:'ChangePassword'},
      //     ]
      //   },
      // },
      // {
      //   path: 'edit/profile',
      //   name: 'EditProfile',
      //   component: EditMyProfile,
      //   beforeEnter: ifAuth,
      //   meta: {
      //     accessIsAllowed: allRoles(),
      //     breadcrumb: [
      //       { text:'MyProfile', exact:true, to: '/my-profile'},
      //       { text:'EditMyProfile'},
      //     ]
      //   },
      // },
      // {
      //   path: 'edit/avatar',
      //   name: 'EditAvatar',
      //   component: EditAvatar,
      //   beforeEnter: ifAuth,
      //   meta: {
      //     accessIsAllowed: allRoles(),
      //     breadcrumb: [
      //       { text:'MyProfile', exact:true, to: '/my-profile'},
      //       { text:'ChangeAvatar'},
      //     ]
      //   },
      // },
    ]
  },
  {
    path: '/create-director',
    name: 'CreateDirector',
    component: CreateDirector,
    beforeEnter: ifAuth,
    meta: {
      accessIsAllowed: [ROLES.ID.Root],
    },
  },
  {
    path: '/director',
    component: Layout,
    beforeEnter: ifAuth,
    children: [
      // this is also a route record
      {
        path: 'list',
        name: 'ListDirectors',
        component: ListDirectors,
        beforeEnter: ifAuth,
        meta: {
          accessIsAllowed: allRoles(),
        },
      },
      {
        path: 'edit/:id',
        name: 'EditDirector',
        component: EditDirector,
        beforeEnter: ifAuth,
        meta: {
          accessIsAllowed: allRoles(),
        }
      },
    ]
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
