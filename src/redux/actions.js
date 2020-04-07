import { ACTION_SET_ACTIVITY, ACTION_SET_NAME } from './reducers/types';

export const setActivity = (activity) => ({
  type: ACTION_SET_ACTIVITY,
  payload: {
    activity,
  },
});

export const setName = (name) => ({
  type: ACTION_SET_NAME,
  payload: {
    name,
  },
});
