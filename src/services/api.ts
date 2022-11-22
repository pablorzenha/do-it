import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-todo-pablo.herokuapp.com",
});
