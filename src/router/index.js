import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/frontend/Home.vue";

const routes = [
  {
    path: "/",
    name: "FrontPage",
    component: () => import("../views/frontend/FrontPage.vue"),
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
      {
        path: "/about",
        name: "About",
        component: () => import("../views/frontend/About.vue"),
      },
      {
        path: "/Products",
        name: "ProductList",
        component: () => import("../views/frontend/ProductList.vue"),
      },
      {
        path: "/Products/:id",
        name: "ProductCategory",
        component: () => import("../views/frontend/ProductList.vue"),
      },
      {
        path: "/Product/:id",
        name: "Product",
        component: () => import("../views/frontend/Product.vue"),
      },
      {
        path: "/Blogs",
        name: "Blogs",
        component: () => import("../views/frontend/BlogList.vue"),
      },
      {
        path: "/Blog/:id",
        name: "Blog",
        component: () => import("../views/frontend/Blog.vue"),
      },
      {
        path: "/Carts",
        name: "CartStep1",
        component: () => import("../views/frontend/CartStep1.vue"),
      },
      {
        path: "/Carts/step2",
        name: "CartStep2",
        component: () => import("../views/frontend/CartStep2.vue"),
      },
      {
        path: "/Carts/step3",
        name: "CartStep3",
        component: () => import("../views/frontend/CartStep3.vue"),
      },
      {
        path: "/Carts/success",
        name: "OrderSuccess",
        component: () => import("../views/frontend/OrderSuccess.vue"),
      },

      {
        path: "/:pathMatch(.*)*",
        redirect: {
          name: "Home",
        },
      },
    ],
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../views/beckend/Dashboard.vue"),
    children: [
      {
        path: "/dashboard/Products",
        name: "AdminProducts",
        component: () => import("../views/beckend/AdminProducts"),
      },
      {
        path: "/dashboard/Orders",
        name: "AdminOrders",
        component: () => import("../views/beckend/AdminOrders"),
      },
      {
        path: "/dashboard/Blogs",
        name: "AdminBlogs",
        component: () => import("../views/beckend/AdminBlogs"),
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
