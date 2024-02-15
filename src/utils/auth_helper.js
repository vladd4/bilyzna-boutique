export const getAuthToken = () => {
  return window.sessionStorage.getItem("auth_token");
};

export const setAuthToken = (token) => {
  window.sessionStorage.setItem("auth_token", token);
};
