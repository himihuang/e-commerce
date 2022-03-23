import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "FrontPage",
    component: () => import("../views/FrontPage.vue"),
    children: [
      {
        path: "/index",
        name: "Home",
        component: Home,
      },
      {
        path: "/about",
        name: "About",
        component: () => import("../views/About.vue"),
      },
      {
        path: "/Products",
        name: "ProductList",
        component: () => import("../views/ProductList.vue"),
      },
      {
        path: "/Products/:id",
        name: "ProductCategory",
        component: () => import("../views/ProductList.vue"),
      },
      {
        path: "/Product/:id",
        name: "Product",
        component: () => import("../views/Product.vue"),
      },
      {
        path: "/Carts",
        name: "CartStep1",
        component: () => import("../views/CartStep1.vue"),
      },
      {
        path: "/Carts/step2",
        name: "CartStep2",
        component: () => import("../views/CartStep2.vue"),
      },
      {
        path: "/Carts/step3",
        name: "CartStep3",
        component: () => import("../views/CartStep3.vue"),
      },
    ],
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../views/Dashboard.vue"),
    children: [
      {
        path: "/dashboard/Products",
        name: "AdminProducts",
        component: () => import("../views/AdminProducts"),
      },
      {
        path: "/dashboard/Orders",
        name: "AdminOrders",
        component: () => import("../views/AdminOrders"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LogIn"),
  },
];

const router = createRouter({
  linkActiveClass: "is--active",
  history: createWebHashHistory(),
  routes,
});

export default router;
