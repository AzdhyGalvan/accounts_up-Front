import { api } from "./api";
import { internalServerError, successStatus } from "../utils/format.response";

export const newCostWs = (data) => api.post('/cost/create-cost',data).then(successStatus).catch(internalServerError);

export const editCostWs = (id,data) => api.patch(`/cost/edit-cost/${id}`,data).then(successStatus).catch(internalServerError); 

export const deleteCostWs = (id) => api.delete( `/cost/delete-cost/${id}`).then(successStatus).catch(internalServerError); 
