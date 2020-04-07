import { ACTION_SET_NAME, ACTION_SET_ACTIVITY } from './types';

const initialState = {
  activity: 'napping',
  name: 'Garfield',
};

const activityReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_SET_ACTIVITY: {
      const { activity } = action.payload;
      return {
        ...state,
        activity,
      };
    }
    case ACTION_SET_NAME: {
      const { name } = action.payload;
      return {
        ...state,
        name,
      };
    }
    default:
      return state;
  }
};

export default activityReducer;
