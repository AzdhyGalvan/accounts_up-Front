import { api } from "./api";
import { internalServerError, successStatus } from "../utils/format.response";

export const salesResults = (data) => api.post('/results/results-sales',data).then(successStatus).catch(internalServerError);
export const costsResults = (data) => api.post('/results/results-costs',data).then(successStatus).catch(internalServerError);
export const purchasesResults = (data) => api.post('/results/results-pursaches',data).then(successStatus).catch(internalServerError);
