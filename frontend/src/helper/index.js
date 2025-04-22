// import { TOKEN } from "../const";

// const getToken = () => {
//   return sessionStorage.getItem(TOKEN);
// };

// const setToken = (data) => {
//   return sessionStorage.setItem(TOKEN, data);
// };

// const removeToken = () => sessionStorage.removeItem(TOKEN);

// export { getToken, setToken, removeToken };

// Add.....................
import { TOKEN } from "../const";

const getToken = () => {
  return localStorage.getItem("token"); // ✅ changed
};

const setToken = (data) => {
  return localStorage.setItem("token", data); // ✅ changed
};

const removeToken = () => localStorage.removeItem("token"); // ✅ changed

export { getToken, setToken, removeToken };
