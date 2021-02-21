export const put = ({ url, headers = {}, body = {} }) => ({
  method: "put",
  url,
  headers,
  body,
});
