export interface ILoggingPayload {
  application: string;
  env: string;
  origin: string;
  pathname: string;
  language: string;
  sessionId: string;
  date: string;
  isFirstTime: boolean;
  action: string;
  message: string;
}
