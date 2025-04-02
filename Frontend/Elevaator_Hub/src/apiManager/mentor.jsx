import AxiosInstances from ".";
const getAllMentors = () => {
  return AxiosInstances.get("/mentor");
};
const getMentorsByUsername = (username) => {
  return AxiosInstances.post("/mentor" + username);
};
const mentorApi = {
  getAllMentors,
  getMentorsByUsername,
};
export default mentorApi;
