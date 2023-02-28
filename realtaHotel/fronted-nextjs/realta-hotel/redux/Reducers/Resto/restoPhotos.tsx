import ActionType from "@/redux/Constant/Resto/ActionType";
import { stat } from "fs";

const initialState = {
  restoPhotos: [],
};

function restoPhotosReducers(state = initialState, action: any) {
  switch (action.type) {
    case ActionType.GET_FOTO_RESTO_MENUS:
      return { ...state };
    case ActionType.GET_FOTO_RESTO_MENUS_SUCCEED:
      return { ...state, restoPhotos: action.payload };
    case ActionType.GET_FOTO_RESTO_MENUS_FAILED:
      return { ...state, restoPhotos: action.payload };

    case ActionType.ADD_FOTO_RESTO_MENUS:
      return { ...state };
    case ActionType.ADD_FOTO_RESTO_MENUS_SUCCEED:
      return { ...state, restoPhotos: [...state.restoPhotos, action.payload] };
    case ActionType.ADD_FOTO_RESTO_MENUS_FAILED:
      return { ...state, restoPhotos: action.payload };

      case ActionType.DEL_RESTOMENUS_PHOTOS:
        return {...state}
        case ActionType.DEL_RESTOMENUS_PHOTOS_SUCCEED:
            return {...state, restoPhotos : state.restoPhotos.filter((restoPhotos: any)=> restoPhotos.id !== action.payload.id)}

    default: 
    return {...state, restoPhotos: action.payload}
  }
}

export default restoPhotosReducers