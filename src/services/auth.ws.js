import { api } from "./api";
import { internalServerError, successStatus } from "../utils/format.response";

export const loginWs = (data) => api.post('/auth/login',data).then(successStatus).catch(internalServerError); ;

export const signupWs = (data) =>api.post('/auth/signup',data).then(successStatus).catch(internalServerError);

export const logoutWs =() => api.post('/auth/logout').then(successStatus).catch(internalServerError);
