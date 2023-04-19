/* 全局路由钩子 - 权限拦截 */
import router from "@/router/index";
import { getLocalStorage, getTreePath } from "@/utils/util";
import { STORAGE_KEY } from "@/config/config";
import { usePermissionStore } from "@/stores/permission";
import { notFoundRouter, rootRouter } from "@/config/router.config";

/*无需登录即可访问页面列表*/
const noPermissionPageList = ["Login", "Register", "404", "ForgetPassword"];

/*动态路由处理*/
router.beforeEach(async (to, from, next) => {
  const token = getLocalStorage(STORAGE_KEY.token);

  if (token) {
    const permissionStore = usePermissionStore();
    if (to.name === "Login" || to.name === "Register") {
      next("/dashboard");
    } else {
      if (!permissionStore.userRole) {
        const permissionStore = usePermissionStore();
        await permissionStore.setPermissionRoutes();

        let temp = { ...rootRouter, children: permissionStore.addRouters };
        router.addRoute(temp);

        notFoundRouter.forEach((item) => {
          router.addRoute(item);
        });

        next({ ...to, replace: true });
      } else {
        let treePathList = getTreePath(router.getRoutes(), to.name);

        permissionStore.setMenuSelectStatus([to.name], treePathList);

        next();
      }
    }
  } else {
    if (!noPermissionPageList.includes(to.name)) {
      next({ name: "Login", replace: true });
    } else {
      next();
    }
  }
});
