import { defineStore } from "pinia";
import {
  asyncRouter,
  notFoundRouter,
  userRouter,
} from "@/config/router.config";
import { generatorRouter } from "@/router/generatorRouter";
import { loginOutFunction } from "@/utils/util";

export const usePermissionStore = defineStore("permission", {
  state: () => ({
    routers: userRouter,
    addRouters: [],
    userRole: "",
    selectedKeys: [],
    openKeys: [],
  }),

  getters: {},

  actions: {
    /*获取动态权限*/
    setPermissionRoutes() {
      const userRole = "admin";
      this.userRole = userRole;
      let asyncRouterList = generatorRouter(asyncRouter);
      this.addRouters = asyncRouterList;
      this.routers = [...this.routers, ...asyncRouterList, ...notFoundRouter];
    },

    /*修改菜单选中状态*/
    setMenuSelectStatus(selectedKeys, openKeys) {
      this.selectedKeys = selectedKeys;
      this.openKeys = openKeys;
    },

    /*退出登录*/
    setLoginOut() {
      loginOutFunction();
      this.routers = userRouter;
      this.addRouters = [];
      this.userRole = "";
    },
  },
});
