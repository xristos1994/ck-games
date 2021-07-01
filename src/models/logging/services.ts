import { post } from '@core/services';

const LOGGING_BASE_URL = 'https://apis.stackprint.io/ck-logging';

export const createLog = (body: Record<string, unknown>): unknown => {
  console.log(body);
  return post({
    url: `${LOGGING_BASE_URL}/logs`,
    headers: { 'Content-Type': 'application/json' },
    body: { ...body }
  });
};