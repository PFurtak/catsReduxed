import { ACTION_NAP, ACTION_EAT, ACTION_PLAY, ACTION_NAME } from './types';

const initialState = {
  activity: 'napping',
  name: '',
};

const activityReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_NAP: {
      return {
        ...state,
        activity: 'napping',
      };
    }

    case ACTION_EAT: {
      return {
        ...state,
        activity: 'eating',
      };
    }
    case ACTION_PLAY: {
      return {
        ...state,
        activity: 'playing',
      };
    }
    case ACTION_NAME: {
      return {
        ...state,
        name: 'name',
      };
    }
    default:
      return state;
  }
};

export default activityReducer;
