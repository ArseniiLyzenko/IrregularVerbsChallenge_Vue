import Vue from 'vue'
import Router from 'vue-router'
import Welcome from "./views/Welcome";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/game-field',
      name: 'gameField',
      // route level code-splitting
      // this generates a separate chunk (gameField.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "gameField" */ './views/GameFieldView.vue')
    },
    {
      path: '/score-view',
      name: 'ScoreView',
      component: () => import('./views/ScoreView.vue')
    },
    {
      path: '/learning-mode',
      name: 'learningMode',
      component: () => import('./views/LearningModeView.vue')
    }
  ]
})
