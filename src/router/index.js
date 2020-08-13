import Vue from 'vue'
import VueRouter from 'vue-router'
import { partyList } from "../assets/PartyList";
import { roomList } from "../assets/roomList";
import { contentList } from "../assets/ContentList";
import { electionList } from "../assets/electionList";

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
        return (element.nameInEnglish == to.params.name)
      });
      next();
    }
  }, {
    path: '/content',
    name: 'Content',
    component: () => import(/* webpackChunkName: "about" */ '../views/Content.vue')
  },
  {
    path: '/intention',
    name: 'Intention',
    component: () => import(/* webpackChunkName: "about" */ '../views/Intention.vue')
  },
  {
    path: '/survey',
    name: 'Survey',
    component: () => import(/* webpackChunkName: "about" */ '../views/Survey.vue')
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
  },
  {
    path: '/electionResultLists',
    name: 'ElectionResultLists',
    component: () => import(/* webpackChunkName: "about" */ '../views/ElectionResultsLists.vue')
  },
  {
    path: '/electionResultLists/:year',
    name: 'ElectionResultListChild',
    component: () => import(/* webpackChunkName: "about" */ '../views/ElectionResultsChildList.vue'),
    beforeEnter(to,from,next){
      to.params.year = electionList.filter(element => {
        return (element.electionYear == to.params.year)
      })
      next();
    }

  },
  {
    path: '/electionResultLists/:year/:content',
    name: 'ElectionResultListView',
    component: () => import(/* webpackChunkName: "about" */ '../views/electionResultsView.vue'),
  },
  {
    path: '/content/:roomid/:childroomid',
    name: 'ContentView',
    component: () => import(/* webpackChunkName: "about" */ '../views/ContentView.vue'),
    beforeEnter(to, from, next) {
      to.params.content = contentList.filter(element => {
        return (element.roomTitle == to.params.childroomid)
      });
      next();
    }
  },
  {
  path: "*",
  component: () => import(/* webpackChunkName: "about" */ '../views/NotFound.vue')
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  mode: 'history',
  routes
})

export default router
