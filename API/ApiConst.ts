import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:5000/",
  withCredentials: true,
});

export const getAllNotes = async () => {
  return await axios
    .get("http://192.168.108.206:5000/api/v1/notes")
    .then((res: any) => res);
};
