import AxiosInstances from ".";

// Define the functions
const getAllMentors = () => {
  return AxiosInstances.get("/mentor");
};

const getMentorByUsername = (userName) => {
  return AxiosInstances.get("/mentor/" + userName);
};

// Assign the object to a variable
const mentorAPI = {
  getAllMentors,
  getMentorByUsername,
};

// Export the variable as default
export default mentorAPI;
