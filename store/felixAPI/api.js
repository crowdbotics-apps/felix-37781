import axios from "axios"
const felixAPI = axios.create({
  baseURL: "https://felix-37781-prod.herokuapp.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function rest_auth_login_create(payload) {
  return felixAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_password_change_create(payload) {
  return felixAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_logout_create(payload) {
  return felixAPI.post(`/rest-auth/logout/`)
}
function rest_auth_logout_list(payload) {
  return felixAPI.get(`/rest-auth/logout/`)
}
function rest_auth_password_reset_confirm_create(payload) {
  return felixAPI.post(`/rest-auth/password/reset/confirm/`, payload.data)
}
function api_v1_login_create(payload) {
  return felixAPI.post(`/api/v1/login/`)
}
function api_v1_signup_create(payload) {
  return felixAPI.post(`/api/v1/signup/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return felixAPI.patch(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_read(payload) {
  return felixAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return felixAPI.put(`/rest-auth/user/`, payload.data)
}
function api_v1_review_partial_update(payload) {
  return felixAPI.patch(`/api/v1/review/${payload.id}/`, payload.data)
}
function api_v1_review_read(payload) {
  return felixAPI.get(`/api/v1/review/${payload.id}/`)
}
function api_v1_review_delete(payload) {
  return felixAPI.delete(`/api/v1/review/${payload.id}/`)
}
function api_v1_review_update(payload) {
  return felixAPI.put(`/api/v1/review/${payload.id}/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return felixAPI.post(`/rest-auth/registration/verify-email/`, payload.data)
}
function api_v1_review_create(payload) {
  return felixAPI.post(`/api/v1/review/`, payload.data)
}
function api_v1_review_list(payload) {
  return felixAPI.get(`/api/v1/review/`)
}
function rest_auth_password_reset_create(payload) {
  return felixAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_registration_create(payload) {
  return felixAPI.post(`/rest-auth/registration/`, payload.data)
}
export const apiService = {
  rest_auth_login_create,
  rest_auth_password_change_create,
  rest_auth_logout_create,
  rest_auth_logout_list,
  rest_auth_password_reset_confirm_create,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_user_partial_update,
  rest_auth_user_read,
  rest_auth_user_update,
  api_v1_review_partial_update,
  api_v1_review_read,
  api_v1_review_delete,
  api_v1_review_update,
  rest_auth_registration_verify_email_create,
  api_v1_review_create,
  api_v1_review_list,
  rest_auth_password_reset_create,
  rest_auth_registration_create
}
