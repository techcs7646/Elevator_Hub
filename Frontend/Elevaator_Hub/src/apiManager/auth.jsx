import AxiosInstances from ".";
const signin = (data) => {
  return AxiosInstances.post("auth/signup/", data);
};
const signup = (data) => {
  return AxiosInstances.post("auth/signup/", data);
};
export default { signin, signup };
