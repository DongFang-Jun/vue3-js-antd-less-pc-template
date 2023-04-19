/*生成随机字符串*/
import { STORAGE_KEY } from "@/config/config";

export const createRandomString = (len = 32) => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const maxPos = chars.length;
  let randomStr = "";
  for (let i = 0; i < len; i++) {
    randomStr += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return randomStr;
};

/*本地存储设置*/
export const setLocalStorage = (key, value) => {
  window.localStorage.setItem(key, value);
};

/*获取本地存储*/
export const getLocalStorage = (key) => {
  return window.localStorage.getItem(key) || "";
};

/*移除本地存储*/
export const removeLocalStorage = (key) => {
  window.localStorage.removeItem(key);
};

/*登录*/
export const loginFunction = (userInfo) => {
  setLocalStorage(STORAGE_KEY.userInfo, JSON.stringify(userInfo));

  setLocalStorage(STORAGE_KEY.token, userInfo.token);
};

/*退出登录*/
export const loginOutFunction = () => {
  removeLocalStorage(STORAGE_KEY.token);
  removeLocalStorage(STORAGE_KEY.userInfo);
};

// 根据name获取树路径
export const getTreePath = (tree, name, path = []) => {
  tree = Array.isArray(tree) ? tree : [tree];

  for (let i = 0, len = tree.length; i < len; i++) {
    let tempPath = [...path];
    tempPath.push(tree[i].name);
    if (tree[i].name === name) {
      return tempPath;
    }
    if (tree[i].children) {
      return getTreePath(tree[i].children, name, tempPath);
    }
  }
};
