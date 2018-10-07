import { combineReducers } from "redux";
import tournaments from "./tournaments";
import raffles from "./raffles";
import profiles from "./profiles";
import profile from "./profile";
import user from "./user";
import socket from "./socket";

const rootReducer = combineReducers({
  tournaments,
  raffles,
  profiles,
  profile,
  user,
  socket
});
export default rootReducer;
