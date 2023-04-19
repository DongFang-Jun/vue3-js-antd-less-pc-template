export const routerComponents = {
  UserLayout: () => import("@/layouts/UserLayout.vue"),
  BlankLayout: () => import("@/layouts/BlankLayout.vue"),
  BasicLayout: () => import("@/layouts/BasicLayout.vue"),

  Dashboard: () => import("@/views/dashboard/dashboard.vue"),
  Login: () => import("@/views/login/login.vue"),
  ForgetPassword: () => import("@/views/login/forgetPassword.vue"),
  Register: () => import("@/views/login/register.vue"),
  TestList: () => import("@/views/test/list.vue"),
  TestDetail: () => import("@/views/test/detail.vue"),

  404: () => import("@/views/404.vue"),
};

export const asyncRouter = [
  {
    isMenu: true,
    menuName: "首页",
    path: "dashboard",
    name: "Dashboard",
    meta: {
      title: "首页",
      icon: "DashboardOutlined",
    },
    component: "Dashboard",
  },
  {
    isMenu: true,
    menuName: "测试",
    path: "test",
    name: "Test",
    meta: {
      title: "测试",
      icon: "RocketOutlined",
    },
    component: "BlankLayout",
    children: [
      {
        isMenu: true,
        menuName: "列表",
        path: "list",
        name: "TestList",
        meta: {
          title: "测试列表",
        },
        component: "TestList",
      },
      {
        path: "detail",
        name: "TestDetail",
        meta: {
          title: "测试详情",
        },
        component: "TestDetail",
      },
    ],
  },
];

export const rootRouter = {
  path: "",
  name: "Index",
  component: routerComponents.BasicLayout,
  redirect: "/dashboard",
  meta: {
    title: "首页",
  },
  children: [],
};

export const userRouter = [
  {
    path: "/user",
    name: "User",
    meta: {
      title: "登录",
    },
    component: routerComponents.UserLayout,
    children: [
      {
        path: "login",
        name: "Login",
        meta: {
          title: "登录",
        },
        component: routerComponents.Login,
      },
      {
        path: "register",
        name: "Register",
        meta: {
          title: "注册",
        },
        component: routerComponents.Register,
      },
      {
        path: "forgetPassword",
        name: "ForgetPassword",
        meta: {
          title: "忘记密码",
        },
        component: routerComponents.ForgetPassword,
      },
    ],
  },
];

export const notFoundRouter = [
  {
    path: "/404",
    name: "404",
    meta: {
      title: "404",
    },
    component: routerComponents["404"],
  },
  {
    path: "/:pathMatch(.*)",
    redirect: { name: "404" },
  },
];
