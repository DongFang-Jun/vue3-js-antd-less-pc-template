import instance from "@/utils/axios";
import { INTERFACE_URL } from "@/config/interface";
import qs from "qs";

/*测试接口*/
export const testApi = (params) => {
  return instance.get(INTERFACE_URL.testApi + `?${qs.stringify(params)}`);
};
