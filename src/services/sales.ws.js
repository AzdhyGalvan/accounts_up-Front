import { api } from "./api";
import { internalServerError, successStatus } from "../utils/format.response";

export const newSaleWs = (data) => api.post('/sale/create-sale',data).then(successStatus).catch(internalServerError);

export const editSaleWs = (id,data) => api.patch(`/sale/edit-sale/${id}`,data).then(successStatus).catch(internalServerError); 

export const deleteSaleWs = (id) => api.delete(`/sale/delete-sale/${id}`).then(successStatus).catch(internalServerError); 
