import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../layouts/MainLayout"),
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("../views/site/home"),
      },
      {
        path: "/about-us",
        name: "about-us",
        component: () => import("../views/site/about-us"),
      },
      {
        path: "/acceptance",
        name: "acceptance",
        component: () => import("../views/site/acceptance"),
      },
      {
        path: "/teachers",
        name: "teachers",
        component: () => import("../views/site/teacher"),
      },
      {
        path: "/media",
        name: "media",
        component: () => import("../views/site/gallery"),
      },
      {
        path: "/news",
        name: "news",
        component: () => import("../views/site/news/news.vue"),
      },
      {
        path: "/news/:newsId",
        name: "detailed-news",
        component: () => import("../views/site/news/detailed-news.vue"),
      },
      {
        path: "/study-program",
        name: "study-program",
        component: () => import("../views/site/study-program"),
      },
      {
        path: "/contact",
        name: "contact",
        component: () => import("../views/site/contact"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});
export default router;
