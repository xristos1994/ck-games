import { Action, Actions } from './';

describe('utils/actionCreators/Action', () => {
  it('should create an action with the right type and action creator', () => {
    const testActionWithoutPayload = Action('TEST', 'ACTION');

    expect(testActionWithoutPayload.type).toBe('TEST//ACTION');
    expect(testActionWithoutPayload()).toMatchObject({ type: 'TEST//ACTION', payload: undefined });

    const testActionWithPayload = Action<unknown>('TEST', 'ACTION');

    expect(testActionWithPayload('')).toMatchObject({ type: 'TEST//ACTION', payload: '' });
    expect(testActionWithPayload('payload')).toMatchObject({ type: 'TEST//ACTION', payload: 'payload' });
    expect(testActionWithPayload(10)).toMatchObject({ type: 'TEST//ACTION', payload: 10 });
    expect(testActionWithPayload(null)).toMatchObject({ type: 'TEST//ACTION', payload: null });
    expect(testActionWithPayload(undefined)).toMatchObject({ type: 'TEST//ACTION', payload: undefined });
    expect(testActionWithPayload({ key1: 'value1', key2: 2 })).toMatchObject({
      type: 'TEST//ACTION',
      payload: { key1: 'value1', key2: 2 }
    });
  });
});

describe('utils/actionCreators/Actions', () => {
  it('should create an action with the right type and succedded and failed action creators', () => {
    const testActionsWithoutPayload = Actions<void, unknown, unknown>('TEST', 'ACTION');

    expect(testActionsWithoutPayload.type).toBe('TEST//ACTION');
    expect(testActionsWithoutPayload()).toMatchObject({ type: 'TEST//ACTION', payload: undefined });

    const testActionsWithPayload = Actions<unknown, unknown, unknown>('TEST', 'ACTION');

    expect(testActionsWithPayload.type).toBe('TEST//ACTION');
    expect(testActionsWithPayload('')).toMatchObject({ type: 'TEST//ACTION', payload: '' });
    expect(testActionsWithPayload('payload')).toMatchObject({ type: 'TEST//ACTION', payload: 'payload' });
    expect(testActionsWithPayload(10)).toMatchObject({ type: 'TEST//ACTION', payload: 10 });
    expect(testActionsWithPayload(null)).toMatchObject({ type: 'TEST//ACTION', payload: null });
    expect(testActionsWithPayload(undefined)).toMatchObject({ type: 'TEST//ACTION', payload: undefined });
    expect(testActionsWithPayload({ key1: 'value1', key2: 2 })).toMatchObject({
      type: 'TEST//ACTION',
      payload: { key1: 'value1', key2: 2 }
    });

    expect(testActionsWithPayload.succeeded.type).toBe('TEST//ACTION_SUCCEEDED');
    expect(testActionsWithPayload.succeeded('')).toMatchObject({ type: 'TEST//ACTION_SUCCEEDED', payload: '' });
    expect(testActionsWithPayload.succeeded('payload')).toMatchObject({
      type: 'TEST//ACTION_SUCCEEDED',
      payload: 'payload'
    });
    expect(testActionsWithPayload.succeeded(10)).toMatchObject({ type: 'TEST//ACTION_SUCCEEDED', payload: 10 });
    expect(testActionsWithPayload.succeeded(null)).toMatchObject({ type: 'TEST//ACTION_SUCCEEDED', payload: null });
    expect(testActionsWithPayload.succeeded(undefined)).toMatchObject({
      type: 'TEST//ACTION_SUCCEEDED',
      payload: undefined
    });
    expect(testActionsWithPayload.succeeded({ key1: 'value1', key2: 2 })).toMatchObject({
      type: 'TEST//ACTION_SUCCEEDED',
      payload: { key1: 'value1', key2: 2 }
    });

    expect(testActionsWithPayload.failed.type).toBe('TEST//ACTION_FAILED');
    expect(testActionsWithPayload.failed('')).toMatchObject({ type: 'TEST//ACTION_FAILED', payload: '' });
    expect(testActionsWithPayload.failed('payload')).toMatchObject({ type: 'TEST//ACTION_FAILED', payload: 'payload' });
    expect(testActionsWithPayload.failed(10)).toMatchObject({ type: 'TEST//ACTION_FAILED', payload: 10 });
    expect(testActionsWithPayload.failed(null)).toMatchObject({ type: 'TEST//ACTION_FAILED', payload: null });
    expect(testActionsWithPayload.failed(undefined)).toMatchObject({ type: 'TEST//ACTION_FAILED', payload: undefined });
    expect(testActionsWithPayload.failed({ key1: 'value1', key2: 2 })).toMatchObject({
      type: 'TEST//ACTION_FAILED',
      payload: { key1: 'value1', key2: 2 }
    });
  });
});
