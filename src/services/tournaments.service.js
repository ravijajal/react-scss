import axios from "axios";
import config from "./config";
export const getTournaments = () => {
  return axios.get(config.tournaments).catch(error => {
    console.log(error);
  });
};
