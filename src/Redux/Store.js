// import {configureStore} from '@reduxjs/toolkit';
// // import {createStore} from 'redux';
// import RootReducer from './RootReducer';
// import persistReducer from 'redux-persist/es/persistReducer';
// import storage from 'redux-persist/lib/storage';

// let persistConfig = {
//   key: 'root',
//   storage,
// };
// let persistedReducer = persistReducer(persistConfig, RootReducer);

// const store = configureStore({
//   reducer: persistedReducer,
// });
// // const store = createStore({
// //   persistedReducer,
// // });

// export default store;

import {
  legacy_createStore as createStore,
  compose,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import RootReducer from './RootReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import rootreducers from './reducers/rootReducers';

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
