import { api } from "./api";
import { internalServerError, successStatus } from "../utils/format.response";

export const uploadSingle = (data) => api.post('/upload/single',data).then(successStatus).catch(internalServerError);
