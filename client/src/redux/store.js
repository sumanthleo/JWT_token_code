import { compose, applyMiddleware, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import {
  getUserReducer,
  userRegisterReducer,
  userSigninReducer,
} from "./reducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const initialState = {
  users: {
    users: localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : null,
  },
};

const reducer = combineReducers({
  usersignup: userRegisterReducer,
  usersignin: userSigninReducer,
  getallusers: getUserReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore({
  reducer: persistedReducer,
  initialState,
  composeEnhancers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const Persistor = persistStore(store);

export { Persistor };
export default store;
