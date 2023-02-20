import http from "./httpRequest";

export function deleteComment(id) {
  return http.delete(`/comments/${id}`);
}
