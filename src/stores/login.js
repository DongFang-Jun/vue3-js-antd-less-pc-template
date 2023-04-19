import { defineStore } from "pinia";
import { createRandomString, loginFunction } from "@/utils/util";
import { message } from "ant-design-vue";
import { usePermissionStore } from "@/stores/permission";

export const useLoginStore = defineStore("login", {
  state: () => ({
    adminUserInfo: {
      email: "admin",
      password: "admin",
    },
    userInfo: {},
  }),

  getters: {},

  actions: {
    /*登录*/
    async login() {
      return new Promise((resolve) => {
        let userInfo = {
          email: "admin",
          token: createRandomString(),
        };

        this.userInfo = userInfo;

        loginFunction(userInfo);

        setTimeout(() => {
          message.success("登录成功");
          resolve();
        }, 800);
      });
    },
  },
});
