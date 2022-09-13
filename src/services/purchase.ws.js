import { api } from "./api";
import { internalServerError, successStatus } from "../utils/format.response";

export const newPurchaseWs = (data) => api.post('/pursache/create-pursache',data).then(successStatus).catch(internalServerError);

export const editPurchaseWs = (id,data) => api.patch(`/pursache/edit-pursache/${id}`,data).then(successStatus).catch(internalServerError); 

export const deletePurchaseWs = (id) => api.delete(`/pursache/delete-pursache/${id}`).then(successStatus).catch(internalServerError); 
