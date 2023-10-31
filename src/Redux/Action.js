import {Authentication} from './constants';

export function Auth(Auth) {
  console.log('REDUX', Auth);
  return {
    type: Authentication,
    payload: Auth,
  };
}
