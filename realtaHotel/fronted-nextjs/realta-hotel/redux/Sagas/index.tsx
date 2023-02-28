import { all, takeEvery } from "redux-saga/effects";
import ActionTypes from "../Constant/Users/ActionType";
import ActionType from "../Constant/Resto/ActionType";
import { handleAddUsers, handleDelUsers, handleLoginUsers, handleRegisterUsers, handleUpdatePhotoUsers, handleUpdateUsers, handleUser, handleUsers } from "./Users/usersSaga";
import { handleCreateRestoMenus, handleDeleteRestomenus, handlePhotoMenus, handleRestoMenu, handleRestoMenus, handleRestoMenusCard, handleUpdateRestoMenus } from "./Resto/restoMenusSaga";

function* watchAll(): any {
  yield all([
    //Master Reducer nya dibawah Comman masing" module

    //Users
    takeEvery(ActionTypes.GET_USERS, handleUsers),
    takeEvery(ActionTypes.GET_USER, handleUser),
    takeEvery(ActionTypes.ADD_USERS, handleAddUsers),
    takeEvery(ActionTypes.UPDATE_USERS, handleUpdateUsers),
    takeEvery(ActionTypes.UPDATE_PHOTO_USERS, handleUpdatePhotoUsers),
    takeEvery(ActionTypes.DEL_USERS, handleDelUsers),
    takeEvery(ActionTypes.LOGIN, handleLoginUsers),
    takeEvery(ActionTypes.REGISTER, handleRegisterUsers),

    //HR

    //Hotels

    //Booking

    //Resto
    takeEvery(ActionType.GET_CARDRESTOMENUS, handleRestoMenusCard),
    takeEvery(ActionType.GET_RESTOMENUS, handleRestoMenus),
    takeEvery(ActionType.GET_RESTOMENU, handleRestoMenu),
    takeEvery(ActionType.ADD_RESTOMENUS, handleCreateRestoMenus),
    takeEvery(ActionType.UPDATE_RESTOMENUS, handleUpdateRestoMenus),
    takeEvery(ActionType.DEL_RESTOMENUS, handleDeleteRestomenus),
    takeEvery(ActionType.ADD_FOTO_RESTO_MENUS, handlePhotoMenus),

    //Payment

    //Purchase
  ]);
}

export default watchAll;
