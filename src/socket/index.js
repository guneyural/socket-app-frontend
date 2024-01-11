import io from "socket.io-client";

let socket;

function initializeSocket() {
  try {
    socket = io(
      process.env.NODE_ENV === "production"
        ? process.env.REACT_APP_PRODUCTION_SERVER
        : process.env.REACT_APP_DEVELOPMENT_SERVER,
      {
        transports: ["websocket"],
      }
    );
  } catch (err) {
    console.log("An error occured while initializing socket:");
    console.log(err);
  }
}

export { socket, initializeSocket };
