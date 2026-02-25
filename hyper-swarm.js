const Hyperswarm = require("hyperswarm");
const crypto = require("crypto");

// Create two swarm instances
const swarm1 = new Hyperswarm();
const swarm2 = new Hyperswarm();

// Shared topic
const topic = crypto.createHash("sha256").update("my-static-topic").digest();

console.log("topic: ", topic.toString("hex"));

// Swarm 1: Act as server
swarm1.join(topic, { server: true, client: false });
swarm1.on("connection", (socket, peerInfo) => {
  console.log(
    "Server: New connection from",
    peerInfo.publicKey.toString("hex"),
  );
  socket.write("Hello from server!");
});

// Swarm 2: Act as client
swarm2.join(topic, { server: false, client: true });
swarm2.on("connection", (socket, peerInfo) => {
  console.log("Client: Connected to server");
  socket.on("data", (data) => {
    console.log("Client received:", data.toString());
  });
});
