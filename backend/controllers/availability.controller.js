const ApiError = require("../helper/apiError");
const availabilityService = require("../services/availability.service");
const httpStatus = require("../util/httpStatus");

// const createAvailability = async (req, res, next) => {
//   const userId = req.user._id;
//   const availabilityData = req.body;

//   const existingAvailability = await availabilityService.getAvailability(
//     userId
//   );

//   if (existingAvailability) {
//     return next(
//       new ApiError(httpStatus.badRequest, "Availability already exists")
//     );
//   }

//   const availability = await availabilityService.createAvailability(
//     userId,
//     availabilityData
//   );

//   res.status(httpStatus.created).json({
//     success: true,
//     message: "Availability created successfully",
//     availability,
//   });
// };

// Add...................................................
const createAvailability = async (req, res, next) => {
  const userId = req.user._id;
  const availabilityData = req.body;

  try {
    const existingAvailability = await availabilityService.getAvailability(
      userId
    );

    let availability;
    if (existingAvailability) {
      // update if already exists
      availability = await availabilityService.updateAvailability(
        userId,
        availabilityData
      );
    } else {
      // create if not exists
      availability = await availabilityService.createAvailability(
        userId,
        availabilityData
      );
    }

    res.status(httpStatus.ok).json({
      success: true,
      message: existingAvailability
        ? "Availability updated successfully"
        : "Availability created successfully",
      availability,
    });
  } catch (error) {
    return next(
      new ApiError(httpStatus.internalServerError, "Something went wrong")
    );
  }
};

const getAvailability = async (req, res, next) => {
  const userId = req.user._id;

  const availability = await availabilityService.getAvailability(userId);

  if (!availability) {
    return next(new ApiError(httpStatus.notFound, "Availability not found"));
  }

  res.status(httpStatus.ok).json({
    success: true,
    availability,
  });
};

const getNext14DaysAvailability = async (req, res, next) => {
  const mentorId = req.params.mentorId;
  const durationInMinutes = req.query.durationInMinutes || 30;

  const availability =
    await availabilityService.getMentorAvailabilityForNext14Days(
      mentorId,
      durationInMinutes
    );

  res.status(httpStatus.ok).json({
    success: true,
    availability,
  });
};

module.exports = {
  createAvailability,
  getAvailability,
  getNext14DaysAvailability,
};
