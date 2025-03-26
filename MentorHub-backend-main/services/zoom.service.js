const axios = require("axios");
const config = require("../config");

async function getZoomAuthToken() {
  const auth = Buffer.from(
    `${config.zoom.clientId}:${config.zoom.clientSecret}`
  ).toString("base64");

  try {
    const response = await axios.post(
      `https://zoom.us/oauth/token?grant_type=account_credentials&account_id=${config.zoom.accountId}`,
      {},
      {
        headers: {
          Authorization: `Basic ${auth}`,
        },
      }
    );

    return response.data.access_token;
  } catch (error) {
    console.error(error.response ? error.response.data : error.message);
  }
}

const createScheduledZoomMeeting = async (startTime, duration) => {
  try {
    const accessToken = await getZoomAuthToken();
    const response = await axios.post(
      `https://api.zoom.us/v2/users/me/meetings`,
      {
        topic: "Scheduled Meeting", // Meeting topic
        type: 2, // 2 = Scheduled meeting
        start_time: startTime, // Start time in ISO 8601 format (e.g., '2024-10-22T14:00:00Z')
        duration: duration, // Duration in minutes
        timezone: "Asia/Kolkata", // Set the timezone
        agenda: "This is a scheduled meeting.",
        settings: {
          host_video: true,
          participant_video: true,
          join_before_host: true,
          mute_upon_entry: true,
          enforce_login: false,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.join_url; // Return the meeting join URL
  } catch (error) {
    console.error(
      "Error creating Zoom meeting:",
      error.response ? error.response.data : error.message
    );
  }
};

module.exports = {
  createScheduledZoomMeeting,
};
