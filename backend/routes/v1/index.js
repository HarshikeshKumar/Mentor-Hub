const express = require("express");

const router = express.Router();

const homeRoute = require("./home.route");
const authRoute = require("./auth.route");
const serviceRoute = require("./service.route");
const userRoute = require("./user.route");
const availabilityRoute = require("./availability.route");
const mentorRoute = require("./mentor.route");
const bookingRoute = require("./booking.route");
const webhookRoute = require("./webhook.route");

const Routes = [
  {
    path: "/",
    route: homeRoute,
  },
  {
    path: "/auth",
    route: authRoute,
  },
  {
    path: "/service",
    route: serviceRoute,
  },
  {
    path: "/user",
    route: userRoute,
  },
  {
    path: "/availability",
    route: availabilityRoute,
  },
  {
    path: "/mentor",
    route: mentorRoute,
  },
  {
    path: "/booking",
    route: bookingRoute,
  },
  {
    path: "/webhook",
    route: webhookRoute,
  },
];

Routes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
