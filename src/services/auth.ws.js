import { api } from "./api";

export const loginWs = (data) => api.post('/auth/login',data) ;

export const signupWs = (data) =>api.post('/auth/signup',data)

export const logoutWs =() => api.post('/auth/logout')
