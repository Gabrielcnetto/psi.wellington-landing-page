import { createRouter, createWebHistory } from 'vue-router'
const Home = ()=>import("@/screens/main.vue")
const routes = [
    {
    path: "/",
    name: "Home",
    component: Home,
    meta: { requiresAuth: false, title: "Psi.Wellington" },
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach(async (to, from, next) => {
  document.title = to.meta?.title || "Psi.Wellington";
 next();
});

export default router;
