import { TOKEN } from "../const";

const getToken = () => {
  return sessionStorage.getItem(TOKEN);
};

const setToken = (data) => {
  return sessionStorage.setItem(TOKEN, data);
};

const removeToken = () => sessionStorage.removeItem(TOKEN);

export { getToken, setToken, removeToken };
