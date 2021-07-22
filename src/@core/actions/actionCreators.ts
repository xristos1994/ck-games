import { IActionCreator, IActionsCreator } from './interfaces';

export const Action = <IPayload = void>(groupName: string, name: string): IActionCreator<IPayload> => {
  const action = (payload: IPayload): { type: string; payload: IPayload } => ({
    type: `${groupName}//${name}`,
    payload
  });
  action.type = `${groupName}//${name}`;

  return action;
};

export const Actions = <IPayload, ISucceededPayload, IFailedPayload>(
  groupName: string,
  name: string
): IActionsCreator<IPayload, ISucceededPayload, IFailedPayload> => {
  const action = (payload: IPayload): { type: string; payload: IPayload } => ({
    type: `${groupName}//${name}`,
    payload
  });
  action.type = `${groupName}//${name}`;

  action.succeeded = Action<ISucceededPayload>(groupName, `${name}_SUCCEEDED`);

  action.failed = Action<IFailedPayload>(groupName, `${name}_FAILED`);

  return action;
};
