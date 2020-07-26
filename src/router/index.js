import Vue from 'vue'
import VueRouter from 'vue-router'
import { partyList } from "../assets/PartyList";
import { roomList } from "../assets/roomList";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/parties',
    name: 'Party',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Party.vue')
  }, {
    path: '/parties/:name',
    name: 'PartyView',
    component: () => import(/* webpackChunkName: "about" */ '../views/partyDetail.vue'),
    beforeEnter(to, from, next) {
      to.params.party = partyList.filter(element => {
        return (element.nameInEnglishAbb == to.params.name)
      });
      next();
    }
  }, {
    path: '/content',
    name: 'Content',
    component: () => import(/* webpackChunkName: "about" */ '../views/Content.vue')
  },
  {
    path: '/content/:roomid',
    name: 'ContentListView',
    component: () => import(/* webpackChunkName: "about" */ '../views/ContentListView.vue'),
    beforeEnter(to, from, next) {
      to.params.child = roomList.rooms.filter(element => {
        return (element.text == to.params.roomid)
      });
      next();
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
