import {
  legacy_createStore as createStore,
  compose,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import RootReducer from './RootReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const config = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(config, RootReducer);
let middlewares = [thunk];
const store = createStore(
  persistedReducer,
  undefined,
  compose(applyMiddleware(...middlewares)),
);

export const persistor = persistStore(store); // making a store that persist the data into redux.
export default store;
