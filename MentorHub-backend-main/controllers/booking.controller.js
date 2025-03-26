const Razorpay = require("razorpay");
const bookingService = require("../services/booking.service");
const httpStatus = require("../util/httpStatus");
const serviceService = require("../services/service.service");
const config = require("../config");

const initiateBookingAndPayment = async (req, res, next) => {
  const { dateAndTime, serviceId } = req.body;

  const service = await serviceService.getServiceById(serviceId);

  // Create a new booking
  const newBooking = await bookingService.createBooking({
    user: req.user._id,
    mentor: service.mentor,
    dateAndTime,
    service: serviceId,
    price: service.price,
  });

  // Initialize Razorpay instance
  const razorpay = new Razorpay(config.razorpay);

  // Create an order in Razorpay
  const options = {
    amount: service.price * 100, // amount in the smallest currency unit
    currency: "INR",
    receipt: `receipt_order_${newBooking._id}`,
    payment_capture: 1,
    notes: {
      bookingId: newBooking._id,
    },
  };

  const order = await razorpay.orders.create(options);

  // Send response with booking and payment details
  res.status(httpStatus.created).json({
    booking: newBooking,
    order,
  });
};

const getBookings = async (req, res, next) => {
  const bookings = await bookingService.getUsersBooking(req.user._id);
  res.status(httpStatus.ok).json({ success: true, bookings });
};

const getMentorBookings = async (req, res, next) => {
  const bookings = await bookingService.getMentorBookings(req.user._id);
  res.status(httpStatus.ok).json({ success: true, bookings });
};

module.exports = {
  initiateBookingAndPayment,
  getBookings,
  getMentorBookings,
};
