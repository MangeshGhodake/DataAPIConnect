import axios from "@/api/axio";

class AuthApi {
  static Login = (data) => {
    return axios.post(`${base}/login`, data);
  };

  static Register = (data) => {
    return axios.post(`${base}/register`, data);
  };

  static Logout = (data) => {
    return axios.post(`${base}/logout`, data, {
      headers: { Authorization: `${data.token}` },
    });
  };

  static Verify = (data) => {
    return axios.post(`${base}/verify`, data);
  };

  static Resend = (data) => {
    return axios.post(`${base}/resend`, data);
  };
}

let base = "users";

export default AuthApi;
