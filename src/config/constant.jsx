let BACKEND_SERVER = null;
if (import.meta.env.REACT_APP_BACKEND_SERVER) {
  BACKEND_SERVER = import.meta.env.REACT_APP_BACKEND_SERVER;
} else {
  BACKEND_SERVER = "https://demandexcellence.net/api";
}
export const API_SERVER = BACKEND_SERVER;
