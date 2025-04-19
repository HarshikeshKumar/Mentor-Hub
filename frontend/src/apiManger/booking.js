import AxiosInstances from ".";

const bookService = async (data) => {
  return await AxiosInstances.post("/booking/initiate-booking", data);
};
const getMentorBookings = async () => {
  return await AxiosInstances.get("/booking/mentor");
};
const getStudentBookigs = async () => {
  return await AxiosInstances.get("/booking/");
};

const booking = {
  bookService,
  getMentorBookings,
  getStudentBookigs,
};

export default booking;
