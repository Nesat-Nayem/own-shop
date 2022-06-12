import { configureStore, combineReducers, getDefaultMiddleware, } from "@reduxjs/toolkit";
import productReducer from './slice'
// import userSlice from "./userSlice";
import userSlice from "./userSlice";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";




const reducers = combineReducers({
  products:productReducer,
  user:userSlice,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage:storage,
  whitelist: ['user'],
  // blacklist: ['products'] 
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: getDefaultMiddleware({
    serializableCheck: {
      /* ignore persistance actions */
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  })

