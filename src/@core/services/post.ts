import { IPostService, IRequestTypes } from "./interfaces";

export const post: IPostService = ({ url, headers = {}, body = {} }) => ({
  method: IRequestTypes.post,
  url,
  headers,
  body,
});
