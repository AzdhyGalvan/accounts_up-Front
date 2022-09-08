import { api } from "./api";
import { internalServerError, successStatus } from "../utils/format.response";

export const newCostWs = (data) => api.post('/cost/create-cost',data).then(successStatus).catch(internalServerError);

export const editCostWs = (data) => api.post('/cost/edit-cost/:id',data).then(successStatus).catch(internalServerError); 

export const deleteCostWs = (data) => api.post('/cost/delete-cost/:id',data).then(successStatus).catch(internalServerError); 

