import servie from "@utils/request";
import { axiosPreUrl } from "..";
/**
 * @description: test api
 */
// const routes = {
//   testApi: () => {
//     return servie.get(axiosPreUrl + "/user");
//   },
// };
// export default routes;
export function testApi() {
  return servie.get(axiosPreUrl + "/user");
}
