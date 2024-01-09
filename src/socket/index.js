import io from "socket.io-client";

let socket;

function initializeSocket() {
  socket = io("http://localhost:4000", { transports: ["websocket"] });
}

export { socket, initializeSocket };
