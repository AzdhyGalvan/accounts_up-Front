import { api } from "./api";
import { internalServerError, successStatus } from "../utils/format.response";

export const newPurchaseWs = (data) => api.post('/pursache/create-pursache',data).then(successStatus).catch(internalServerError);

export const editPurchaseWs = (id) => api.post(`/pursache/edit-pursache/${id}`).then(successStatus).catch(internalServerError); 

export const deletePurchaseWs = (id) => api.post(`/pursache/delete-pursache/${id}`).then(successStatus).catch(internalServerError); 
