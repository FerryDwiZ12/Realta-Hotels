import ActionType from "@/redux/Constant/Resto/ActionType";

//Get All resto foto

export const doPhotosRequest: any = (): any => {
  return {
    type: ActionType.GET_FOTO_RESTO_MENUS,
  };
};

export const doPhotosRequestSucceed: any = (): any => {
  return {
    type: ActionType.GET_FOTO_RESTO_MENUS_SUCCEED,
  };
};

export const doPhotosRequestFailed: any = (): any => {
  return {
    type: ActionType.GET_FOTO_RESTO_MENUS_FAILED,
  };
};

// CREATE FOTO RESTO

export const doAddPhotosRequest: any = (): any => {
  return {
    type: ActionType.ADD_FOTO_RESTO_MENUS,
  };
};
export const doAddPhotosRequestSucced: any = (): any => {
  return {
    type: ActionType.ADD_FOTO_RESTO_MENUS_SUCCEED,
  };
};

export const doAddPhotosRequestFailed: any = (): any => {
  return {
    type: ActionType.ADD_FOTO_RESTO_MENUS_FAILED,
  };
};

// UPDATE FOTO RESTO

export const doUpdatePhotosRequest: any = () => {
  return {
    type: ActionType.UPDATE_FOTO_RESTO_MENUS,
  };
};

export const doUpdatePhotosRequestSucced: any = () => {
  return {
    type: ActionType.UPDATE_FOTO_RESTO_MENUS_SUCCEED,
  };
};
export const doUpdatePhotosRequestFailed: any = () => {
  return {
    type: ActionType.UPDATE_FOTO_RESTO_MENUS_FAILED,
  };
};

//Get All tabel card client
export const doCardClientRequest: any = (): any => {
  return {
    type: ActionType.GET_CARDRESTOMENUS,
  };
};
export const doCardClientRequestSucceed: any = (payload: any): any => {
  return {
    type: ActionType.GET_CARDRESTOMENUS_SUCCEED,
    payload,
  };
};
export const doCardClientRequestFailed: any = (payload: any): any => {
  return {
    type: ActionType.GET_CARDRESTOMENUS_FAILED,
    payload,
  };
};

//all tabel menus resto
export const doRestoMenusRequest: any = (): any => {
  return {
    type: ActionType.GET_RESTOMENUS,
  };
};

export const doRestoMenusRequestSucceed: any = (payload: any): any => {
  return {
    type: ActionType.GET_RESTOMENUS_SUCCEED,
    payload,
  };
};

export const doRestoMenusRequestFailed: any = (payload: any): any => {
  return {
    type: ActionType.GET_RESTOMENUS_SUCCEED,
    payload,
  };
};

//Get One tabel  resto menus

export const doRestoMenuRequest: any = (payload: any): any => {
  return {
    type: ActionType.GET_RESTOMENU,
    payload,
  };
};

export const doRestoMenuRequestSucceed: any = (remeId: number): any => {
  return {
    type: ActionType.GET_RESTOMENU_SUCCEED,
    payload: remeId,
  };
};

export const doRestoMenuRequestFailled: any = (payload: any): any => {
  return {
    type: ActionType.GET_RESTOMENUS_SUCCEED,
  };
};

// Create Tabel Resto Menus

export const doCreateRestoMenus: any = (payload: any): any => {
  return {
    type: ActionType.ADD_RESTOMENUS,
    payload,
  };
};

export const doCreateRestoMenusSucceed: any = (payload: any): any => {
  return {
    type: ActionType.ADD_RESTOMENUS_SUCCEED,
    payload,
  };
};

export const doCreateRestoMenusFailed: any = (payload: any): any => {
  return {
    type: ActionType.ADD_RESTOMENUS_FAILED,
    payload,
  };
};

// Update Resto Menus
export const doUpdateRestoMenus: any = (id: number, payload: any): any => {
  return {
    type: ActionType.UPDATE_RESTOMENUS,
    id,
    payload,
  };
};

export const doUpdateRestoMenusSucceed: any = (id: number, payload: any): any => {
  return {
    type: ActionType.UPDATE_RESTOMENUS_SUCCEED,
    id,
    payload,
  };
};

export const doUpdateRestoMenusFailed: any = (id: number, payload: any): any => {
  return {
    type: ActionType.UPDATE_RESTOMENUS_FAILED,
    id,
    payload,
  };
};

//Delete Resto Menus

export const doDeleteRestoMenus: any = (payload: any): any => {
  return {
    type: ActionType.DEL_RESTOMENUS,
    payload,
  };
};

export const doDeleteRestoMenusSucceed: any = (payload: any): any => {
  return {
    type: ActionType.DEL_RESTOMENUS_SUCCEED,

    payload,
  };
};

export const doDeleteRestoMenusFailed: any = (payload: any): any => {
  return {
    type: ActionType.DEL_RESTOMENUS_FAILED,
    payload,
  };
};
