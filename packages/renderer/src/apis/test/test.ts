import servie from "@utils/request";

/**
 * @description: test api
 */
export function testApi() {
  return servie.get("ajaxurl/user");
}
