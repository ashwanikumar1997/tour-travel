let accessToken = localStorage.getItem("authToken");

const config = {
  serverUrl: process.env.API_URL,
  authToken: accessToken || "",
  googleClientId: process.env.GOOGLE_CLIENT_ID
};

export default config;
