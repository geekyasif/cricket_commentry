const { io } = require("socket.io-client");

export const socket = io("http://127.0.0.1:8000");