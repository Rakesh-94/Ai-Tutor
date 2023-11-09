import {Authentication, SET_USER_ONBOARD} from './constants';

export function Auth(value) {
  return {
    type: SET_USER_ONBOARD,
    payload: value,
  };
}
