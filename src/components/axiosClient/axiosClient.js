import axios from "axios";

const API = axios.create({
  baseURL: `https://newsapi.org/v2`,
});

export default API;
