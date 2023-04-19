import { routerComponents } from "@/config/router.config";

/*初始化路由*/
export const generatorRouter = (routerMap) => {
  return routerMap.map((item) => {
    let currentRouter = {
      path: item.path || "",
      name: item.name || "",
      meta: { ...item.meta },
      component: routerComponents[item.component],
      isMenu: item.isMenu || false,
      menuName: item.menuName || "",
    };

    if (item.redirect) {
      currentRouter.redirect = item.redirect;
    }

    if (item.children && item.children.length) {
      currentRouter.children = generatorRouter(item.children);
    }

    return currentRouter;
  });
};
