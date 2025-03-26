import SignIn from "../page/signin";
import SignUp from "../page/signup";
import Home from "../page";
import Dashboard from "../page/dashboard/dashboard";
import Services from "../page/dashboard/services";
import Profile from "../page/dashboard/profile";
import Schedule from "../page/dashboard/schedule";
import Payment from "../page/dashboard/payment";
import PageNotFound from "../page/pageNotFound";
import AllMentors from "../page/allMentors";
import Bookings from "../page/dashboard/bookings";
import MentorDetails from "../page/mentorDetails";
import Booking from "../page/booking";
import SuccessPage from "../page/successPage";
import BookingPage from "../page/dashboard/bookingPage";

const routes = [
  {
    path: "/",
    element: <Home />,
    isProtected: false,
  },
  {
    path: "/signup/:role",
    element: <SignUp />,
    isProtected: false,
  },
  {
    path: "/signin",
    element: <SignIn />,
    isProtected: false,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    isProtected: true,
  },
  {
    path: "/dashboard/services",
    element: <Services />,
    isProtected: true,
  },
  {
    path: "/dashboard/profile",
    element: <Profile />,
    isProtected: true,
  },
  {
    path: "/dashboard/schedule",
    element: <Schedule />,
    isProtected: true,
  },
  {
    path: "/dashboard/payment",
    element: <Payment />,
    isProtected: true,
  },
  {
    path: "/dashboard/bookings",
    element: <Bookings />,
    isProtected: true,
  },
  {
    path: "/mentors",
    element: <AllMentors />,
    isProtected: false,
  },
  {
    path: "/mentor/:username",
    element: <MentorDetails />,
    isProtected: false,
  },
  {
    path: "/mentor/:username/:id",
    element: <Booking />,
    isProtected: true,
  },
  {
    path: "/success",
    element: <SuccessPage />,
    isProtected: true,
  },
  {
    path: "/user-bookings",
    element: <BookingPage />,
    isProtected: true,
  },
  {
    path: "*",
    element: <PageNotFound />,
    isProtected: false,
  },
];

export default routes;
