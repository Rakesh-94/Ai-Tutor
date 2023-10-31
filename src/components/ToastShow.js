import {Platform} from 'react-native';
// import { responsiveHeight } from 'react-native-responsive-dimensions';/
// import { colorConstants } from './constants';
import Toast from 'react-native-root-toast';

const ToastShow = (message, type, time) => {
  Toast.show(message, {
    duration: time ?? 2000,
    position: Platform.OS == 'ios' ? 10 : 10,
    // shadow: true,
    animation: true,
    hideOnPress: true,
    textColor: 'white',
    delay: 0,
    backgroundColor: type ? type : 'red',
    onShow: () => {
      // calls on toast\`s appear animation start
    },
    onShown: () => {
      // calls on toast\`s appear animation end.
    },
    onHide: () => {
      // calls on toast\`s hide animation start.
    },
    onHidden: () => {
      // calls on toast\`s hide animation end.
    },
  });
};

export default ToastShow;
