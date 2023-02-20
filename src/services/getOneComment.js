import http from "./httpRequest";

export function getOneComment(id) {
  return http.get(`/comments/${id}`);
}
