import {
  ACTION_NAP,
  ACTION_EAT,
  ACTION_PLAY,
  ACTION_NAME,
} from './reducers/types';

export const nap = () => {
  return {
    type: ACTION_NAP,
  };
};
export const eat = () => {
  return {
    type: ACTION_EAT,
  };
};

export const play = () => {
  return {
    type: ACTION_PLAY,
  };
};

export const name = () => {
  return {
    type: ACTION_NAME,
    payload: {
      name: '',
    },
  };
};
