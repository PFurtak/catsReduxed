import { ACTION_NAP, ACTION_EAT, ACTION_PLAY } from './reducers/types';

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
