import axios from "axios";

const API = axios.create({
  // We keep '/api' at the end because your server.js uses app.use("/api/contact"...)
  baseURL: "https://api.nextlevelsignages.com/api", 
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;