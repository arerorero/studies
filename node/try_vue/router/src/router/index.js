import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import About from "../views/AboutView.vue";
import Jobs from "../views/jobs/JobsView.vue";
import Job from "../views/jobs/JobView.vue";
import NotFound from "../views/404view.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/jobs",
    name: "jobs",
    component: Jobs,
  },
  {
    path: "/jobs/:id",
    name: "job",
    component: Job,
    props: true,
  },
  // REDIRECT
  {
    path: "/home",
    redirect: "/",
  },

  // 404
  {
    path: "/:cactchAll(.*)",
    name: "not-found",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
