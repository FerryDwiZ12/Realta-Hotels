import ActionType from "@/redux/Constant/Resto/ActionType";

const initialState = {
  restoCardClient: [],
  restoCardId: [],
};

function restoCardClientReducers(state = initialState, action: any) {
  switch (action.type) {
    case ActionType.GET_CARDRESTOMENUS:
      return { ...state };
    case ActionType.GET_CARDRESTOMENUS_SUCCEED:
      return { ...state, restoCardClient: action.payload };
    case ActionType.GET_CARDRESTOMENUS_FAILED:
      return { ...state, restoCardClient: action.payload };
    default:
      return { ...state };
  }
}

export default restoCardClientReducers;
