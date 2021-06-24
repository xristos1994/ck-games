import { IGetService, IRequestTypes } from './interfaces';

export const get: IGetService = ({ url, headers }) => ({
  method: IRequestTypes.get,
  url,
  headers: headers || {}
});
