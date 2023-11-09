import {Authentication, SET_TOKEN, SET_USER_ONBOARD} from './constants';

// constants

//initialState
const initialState = {
  isUserOnboard: false,
  access_token: null,
};

//reducer
export const auth = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_ONBOARD:
      return {...state, isUserOnboard: action.payload};
    case SET_TOKEN:
      return {...state, access_token: action.payload};
    default:
      return state;
  }
};

//actions
