import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "../Sagas";
import usersReducers from "../Reducers/Users/usersReducer";
import restoMenusReducers from "../Reducers/Resto/restoMenusReducer";
import restoCardClientReducers from "../Reducers/Resto/restoCardClientReducer";
import restoPhotosReducers from "../Reducers/Resto/restoPhotos";

const saga = createSagaMiddleware();
const reducer = combineReducers({
  //Master Reducer nya dibawah Comman masing" module

  //Users
  usersReducers: usersReducers,

  //HR

  //Hotels

  //Booking

  //Resto
  restoMenusReducers: restoMenusReducers,
  restoCardClientReducers: restoCardClientReducers,
  restoPhotosReducers: restoPhotosReducers,
  //Payment

  //Purchase
});
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(saga),
});
saga.run(rootSaga);

export default store;
