import http from "./httpRequest";

export function getAllComments() {
  return http.get("/comments");
}
