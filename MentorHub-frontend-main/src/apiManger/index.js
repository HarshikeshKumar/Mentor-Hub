import axios from "axios"; // Import axios for making HTTP requests

import toast from "react-hot-toast"; // Import toast for displaying notifications

import { USER_STORE_PERSIST } from "../const"; // Import constants
import { BASE_URL } from "../const/env.const"; // Import environment constants
import { getToken, removeToken } from "../helper"; // Import helper functions

let AxiosInstances; // Declare a variable to hold the axios instance

(() => {
  // Create an axios instance with a base URL
  AxiosInstances = axios.create({
    baseURL: BASE_URL,
  });

  // Add a request interceptor to include the token in the headers
  AxiosInstances.interceptors.request.use((config) => {
    const token = getToken(); // Get the token from storage
    token && (config.headers.Authorization = `Bearer ${token}`); // If token exists, add it to the headers
    return config; // Return the modified config
  });

  // Add a response interceptor to handle errors
  AxiosInstances.interceptors.response.use(
    (response) => response, // If the response is successful, return it
    (error) => {
      // If the response indicates a failure
      if (error.response?.data.success === "false") {
        const message = error.response.data.message; // Get the error message
        message ? toast.error(message) : toast.error("Something went wrong"); // Display the error message
        if (error.response.status === 401) {
          // If the error status is 401 (Unauthorized)
          removeToken(); // Remove the token from storage
          sessionStorage.removeItem(USER_STORE_PERSIST); // Remove user data from session storage
          window.location.href = "/signin"; // Redirect to the signin page
        }
      } else {
        toast.error("Something went wrong"); // Display a generic error message
      }
      throw error; // Throw the error to be handled by the calling function
    }
  );
})();

export default AxiosInstances; // Export the axios instance
