import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // change here later when backend goes live
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
