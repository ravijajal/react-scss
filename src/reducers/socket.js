import { CHAT_MESSAGE_RECEIVE, CHAT_MESSAGE_SEND } from "../types/socket";

const initialState = {
  messages: [],
};

const socket = (state = initialState, action) => {
  switch (action.type) {
    case CHAT_MESSAGE_RECEIVE:
    case CHAT_MESSAGE_SEND:
      return {
        ...state,
        messages: [...state.messages,action.msg]
      };
    default:
      return state;
  }
};
export default socket;