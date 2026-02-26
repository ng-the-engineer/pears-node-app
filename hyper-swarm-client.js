const Hyperswarm = require("hyperswarm");
const crypto = require("crypto");

// Create two swarm instances
const swarm1 = new Hyperswarm();
const swarm2 = new Hyperswarm();

// Shared topic
const topic = crypto
  .createHash("sha256")
  .update("my-static-topic-anthony")
  .digest();

console.log("topic: ", topic.toString("hex"));

// Swarm 2: Act as client
swarm2.join(topic, { server: false, client: true });
swarm2.on("connection", (socket, peerInfo) => {
  console.log("Client: Connected to server");
  socket.on("data", (data) => {
    console.log("Client received:", data.toString());
  });
});
