import {Authentication} from './constants';
const initialState = {
  stack: 'Onbording',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Authentication:
      return {...state, stack: action.payload};
    default:
      return state;
  }
};
