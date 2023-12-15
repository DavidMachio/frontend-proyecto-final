import axios from "axios";

const APIHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  Authorization: {
    toString() {
      return `Bearer ${localStorage.getItem("token")}`;
    },
  },
};

const API = axios.create({
  baseURL: "https://spaincampingsdb.vercel.app",
  headers: APIHeaders,
  timeout: 8000,
});

export default API;
