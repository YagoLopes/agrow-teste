const TOKEN_KEY = '@aGrow-Token';
const USER = '@aGrow-username';
export const isAuthenticated = () => sessionStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => sessionStorage.getItem(TOKEN_KEY);
export const setToken = (token) => {
  sessionStorage.setItem(TOKEN_KEY, token);
};

export const getName = () => sessionStorage.getItem(USER);
export const setName = (name) => {
  sessionStorage.setItem(USER, name);
};

export const logout = () => {
  sessionStorage.removeItem(TOKEN_KEY);
  sessionStorage.removeItem(USER);
};
