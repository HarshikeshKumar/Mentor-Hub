import AxiosInstances from ".";

const getMentorAvailability = async (mentorId, duration) => {
  return await AxiosInstances.get(
    `availability/${mentorId}?duration=${duration}`
  );
};

export default { getMentorAvailability };
