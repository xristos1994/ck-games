export interface IAction<IPayload = null> {
  type: string;
  (payload: IPayload): { type: string; payload: IPayload };
}

export interface IActions<IPayload = null, ISucceededPayload = null, IFailedPayload = null> {
  succeeded: IAction<ISucceededPayload>;
  failed: IAction<IFailedPayload>;
  type: string;
  (payload: IPayload): { type: string; payload: IPayload };
}

export interface IActionWithPayload<IPayload = null> {
  type: string;
  payload: IPayload;
}
