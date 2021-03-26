import { IPutService, IRequestTypes } from "./interfaces";

export const put: IPutService = ({ url, headers = {}, body = {} }) => ({
  method: IRequestTypes.put,
  url,
  headers,
  body,
});
