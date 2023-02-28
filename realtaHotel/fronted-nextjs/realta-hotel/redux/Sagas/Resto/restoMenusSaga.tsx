import { call, put } from "redux-saga/effects";
import ReduceMenusRestoService from "@/redux/Services/Resto/reduceService";
import {
  // doAddPhotosRequestFailed,
  // doAddPhotosRequestSucced,
  doCardClientRequestFailed,
  doCardClientRequestSucceed,
  doCreateRestoMenusFailed,
  doCreateRestoMenusSucceed,
  doDeleteRestoMenusFailed,
  doDeleteRestoMenusSucceed,
  doPhotosRequestFailed,
  doPhotosRequestSucceed,
  doRestoMenuRequestFailled,
  doRestoMenuRequestSucceed,
  doRestoMenusRequestFailed,
  doRestoMenusRequestSucceed,
  doUpdatePhotosRequestFailed,
  doUpdatePhotosRequestSucced,
  doUpdateRestoMenusFailed,
  doUpdateRestoMenusSucceed,
} from "@/redux/Actions/Resto/reduceActions";
import { result } from "lodash";

//GET ALL PHOTO
function* handlePhotoMenus(): any {
  try {
    const result = yield call(ReduceMenusRestoService.getRestoPhoto);
    yield put(doPhotosRequestSucceed(result.data));
  } catch (error: any) {
    yield put(doPhotosRequestFailed(error));
  }
}

// CREATE PHOTO
function* handleCreatePhotoMenus(): any {
  try {
    const result = yield call(ReduceMenusRestoService.createPhoto.action.payload);
    yield put(doPhotosRequestSucceed(result.data));
  } catch (error: any) {
    yield put(doPhotosRequestFailed(error));
  }
}

// UPDATE PHOTO
function* handleUpdatePhotoMenus(): any {
  try {
    const result = yield call(ReduceMenusRestoService.updatePhotos.action.payload);
    yield put(doUpdatePhotosRequestSucced(result.data));
  } catch (error: any) {
    yield put(doUpdatePhotosRequestFailed(error));
  }
}

//GET ALL CLIENT

function* handleRestoMenusCard(): any {
  try {
    const result = yield call(ReduceMenusRestoService.getCardClient);
    yield put(doCardClientRequestSucceed(result.data));
    // console.log(result);
  } catch (error: any) {
    yield put(doCardClientRequestFailed(error));
  }
}

// GET ALL
function* handleRestoMenus(): any {
  try {
    const result: any = yield call(ReduceMenusRestoService.getAll);
    yield put(doRestoMenusRequestSucceed(result.data));
    // console.log(result.data);
  } catch (error: any) {
    yield put(doRestoMenusRequestFailed(error));
  }
}

// GET ONE
function* handleRestoMenu(action: any): any {
  try {
    const result = yield call(ReduceMenusRestoService.getId, action.payload);
    yield put(doRestoMenuRequestSucceed(result.data));
  } catch (error: any) {
    yield put(doRestoMenuRequestFailled(error));
  }
}

// CREATE
function* handleCreateRestoMenus(action: any): any {
  try {
    const result = yield call(ReduceMenusRestoService.create, action.payload);
    yield put(doCreateRestoMenusSucceed(result.data));
  } catch (error: any) {
    yield put(doCreateRestoMenusFailed(error));
  }
}

// UPDATE

function* handleUpdateRestoMenus(action: any): any {
  try {
    const result = yield call(ReduceMenusRestoService.update, action.payload);
    yield put(doUpdateRestoMenusSucceed(result));
  } catch (error: any) {
    yield put(doUpdateRestoMenusFailed(error));
  }
}

// DELETE

function* handleDeleteRestomenus(action: any): any {
  try {
    const result = yield call(ReduceMenusRestoService.remove, action.payload);
    yield put(doDeleteRestoMenusSucceed(action.payload));
  } catch (error: any) {
    yield put(doDeleteRestoMenusFailed(error));
  }
}

export { handlePhotoMenus, handleUpdatePhotoMenus, handleCreatePhotoMenus, handleRestoMenusCard, handleRestoMenus, handleRestoMenu, handleUpdateRestoMenus, handleCreateRestoMenus, handleDeleteRestomenus };
