import { CHAT_MESSAGE_RECEIVE, CHAT_MESSAGE_SEND } from "../types/socket";
import socket from "../socket";

export const chatMessageReceive = msg => ({
  type: CHAT_MESSAGE_RECEIVE,
  msg
});
export const chatMessageSend = msg => ({
  type: CHAT_MESSAGE_SEND,
  msg
});
export const chatMessageSendToIO = (event, msg) => (dispatch, getState) => {
  socket.emit(event, msg);
  dispatch(chatMessageSend(msg));
};
