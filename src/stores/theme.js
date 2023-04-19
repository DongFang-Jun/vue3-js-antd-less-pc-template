import { defineStore } from "pinia";
import { ConfigProvider } from "ant-design-vue";

export const useThemeStore = defineStore("theme", {
  state: () => ({
    primaryColor: getComputedStyle(document.documentElement).getPropertyValue(
      "--primaryColor"
    ),
  }),

  getters: {},

  actions: {
    /*动态修改主题*/
    changeTheme(themeColor = "") {
      ConfigProvider.config({
        theme: {
          primaryColor: themeColor || this.primaryColor,
        },
      });
    },
  },
});
