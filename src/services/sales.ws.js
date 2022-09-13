import { api } from "./api";
import { internalServerError, successStatus } from "../utils/format.response";

export const newSaleWs = (data) => api.post('/sale/create-sale',data).then(successStatus).catch(internalServerError);

export const editSaleWs = (data) => api.post('/sale/edit-sale/:id',data).then(successStatus).catch(internalServerError); 

export const deleteSaleWs = (data) => api.post('/sale/delete-sale/:id',data).then(successStatus).catch(internalServerError); 
