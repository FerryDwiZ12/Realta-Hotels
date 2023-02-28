import ActionType from "@/redux/Constant/Resto/ActionType";

const initialState = {
  restoMenus: [],
  restoMenu: []
};

function restoMenusReducers(state = initialState, action: any) {
  switch (action.type) {
    //GET
    case ActionType.GET_RESTOMENUS:
      return { ...state };
    case ActionType.GET_RESTOMENUS_SUCCEED:
      return { ...state, restoMenus: action.payload };
    // case ActionType.GET_RESTOMENUS_FAILED:
    //   return { ...state, restoMenus: action.payload };

    // GET ONE
    case ActionType.GET_RESTOMENU:
      return { ...state };
    case ActionType.GET_RESTOMENU_SUCCEED:
      return { ...state, restoMenu: action.payload };

    // CREATE

    case ActionType.ADD_RESTOMENUS:
      return { ...state };
    case ActionType.ADD_RESTOMENUS_SUCCEED:
      return { ...state, restoMenus: [...state.restoMenus, action.payload] };
    case ActionType.ADD_RESTOMENUS_FAILED:
      return { ...state, restoMenus: action.payload };

    // UPDATE

    case ActionType.UPDATE_RESTOMENUS:
      return { ...state };
    case ActionType.UPDATE_RESTOMENUS_SUCCEED:
      return applyUpdateRestoMenus(state, action);
    case ActionType.UPDATE_RESTOMENUS_FAILED:
      return applyUpdateRestoMenus(state, action);

    // DELETE

    case ActionType.DEL_RESTOMENUS:
      return { ...state };
    case ActionType.DEL_RESTOMENUS_SUCCEED:
      return { ...state, restoMenus: state.restoMenus.filter((restoMenus: any) => restoMenus.id !== action.payload.id) };
    // case ActionType.DEL_RESTOMENUS:
    // return { ...state };

    default:
      return { ...state, restoMenus: action.payload };
  }
}

const applyUpdateRestoMenus = (state: any, action: any) => {
  return state.restoMenus.result.map((restoMenus: any) => {
    if (restoMenus.remeId === state.restoMenu.results.remeId) {
      return {
        ...state,
        ...state.restoMenu.results,
      };
    } else {
      return state;
    }
  });
};

export default restoMenusReducers;
