export const Action = (groupName, name) => {
  const action = payload => ({
    type: `${groupName}//${name}`,
    payload,
  });
  action.type = `${groupName}//${name}`;
  return action;
};

export const Actions = (
  groupName,
  name,
  hasSucceeded = true,
  hasFailed = true
) => {
  const action = Action(groupName, name);

  if (hasSucceeded) {
    action.succeeded = Action(groupName, `${name}_SUCCEEDED`);
  }

  if (hasFailed) {
    action.failed = Action(groupName, `${name}_FAILED`);
  }

  return action;
};
