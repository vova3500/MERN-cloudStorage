import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5000/api",
});

export const authAPI = {
  registration(email,password) {
      return instance.post(
        `auth/registration`,{
          email,
          password
        }
      );
    },

  login(email,password) {
    return instance.post(
      `auth/login`,{
        email,
        password
       }
    );
  },
};

export const diskAPI = {
  getFiles(dirId) {
      return instance.get(
        `file${dirId ? '?parent='+dirId : ''}`,{
          headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
        }
      );
    },
};