export interface IActionCreator<IPayload> {
  type: string;
  (payload: IPayload): { type: string; payload: IPayload };
}

export interface IActionsCreator<IPayload, ISucceededPayload, IFailedPayload> {
  succeeded: IActionCreator<ISucceededPayload>;
  failed: IActionCreator<IFailedPayload>;
  type: string;
  (payload: IPayload): { type: string; payload: IPayload };
}

export interface IAction<IPayload = void> {
  type: string;
  payload: IPayload;
}
