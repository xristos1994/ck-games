export const post = ({ url, headers = {}, body = {} }) => ({
  method: "POST",
  url,
  headers,
  body,
});
