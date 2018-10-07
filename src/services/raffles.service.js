import axios from "axios";
import config from "./config";
export const getRaffles = () => {
  return axios.get(config.raffles).catch(error => {
    console.log(error);
  });
};
