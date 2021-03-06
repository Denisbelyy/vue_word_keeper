import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "Home" */ "../views/Home.vue")
  },
  {
    path: "/Favorites",
    name: "Favorites",
    component: () =>
      import(/* webpackChunkName: "Favorites" */ "../views/Favorites.vue")
  },
  {
    path: "/:word",
    name: "DetailWord",
    component: () =>
      import(/* webpackChunkName: "DetailWord" */ "../views/Details.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
