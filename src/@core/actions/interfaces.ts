export type IAction<IPayload = undefined> = IPayload extends undefined
  ? {
      type: string;
      (): { type: string };
    }
  : {
      type: string;
      (payload: IPayload): { type: string; payload: IPayload };
    };

export interface IActions<
  IPayload = undefined,
  ISucceededPayload = undefined,
  IFailedPayload = undefined
> {
  succeeded?: IAction<ISucceededPayload>;
  failed?: IAction<IFailedPayload>;
  type: string;
  (payload: IPayload): { type: string; payload?: IPayload };
}

export interface IActionWithPayload<IPayload> {
  type: string;
  payload: IPayload;
}

export interface IActionWithoutPayload {
  type: string;
}
