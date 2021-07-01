import { IAction, IActions } from './interfaces';

export const Action = <IPayload = null>(groupName: string, name: string): IAction<IPayload> => {
  const action = (payload: IPayload): { type: string; payload: IPayload } => ({
    type: `${groupName}//${name}`,
    payload
  });
  action.type = `${groupName}//${name}`;

  return action;
};

export const Actions = <IPayload = null, ISucceededPayload = null, IFailedPayload = null>(
  groupName: string,
  name: string
): IActions<IPayload, ISucceededPayload, IFailedPayload> => {
  const action = (payload: IPayload): { type: string; payload: IPayload } => ({
    type: `${groupName}//${name}`,
    payload
  });
  action.type = `${groupName}//${name}`;

  action.succeeded = Action<ISucceededPayload>(groupName, `${name}_SUCCEEDED`);

  action.failed = Action<IFailedPayload>(groupName, `${name}_FAILED`);

  return action;
};
