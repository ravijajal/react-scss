import axios from "axios";
import config from "./config";
export const getProfiles = () => {
  return axios.get(config.profiles).catch(error => {
    console.log(error);
  });
};
export const getProfile = id => {
  return axios.get(config.profiles + "/" + id).catch(error => {
    console.log(error);
  });
};
