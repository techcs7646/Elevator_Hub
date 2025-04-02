import { TOKEN } from "../const";

const getToken = () => {
  return sessionStorage.getItem(TOKEN);
};
const setToken = () => {
  return sessionStorage.getItem(TOKEN);
};
const removeToken = () => sessionStorage.removeItem(TOKEN);
export { getToken, setToken, removeToken };
