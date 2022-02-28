import servie from "@utils/request";
import { axiosPreUrl } from "../index";
/**
 * @description: test api
 */
export function testApi() {
  return servie.get(axiosPreUrl + "/user");
}
