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

  console.log("Peer public key:", peerInfo.publicKey.toString("hex"));
  console.log("Associated topics:", peerInfo.topics); // Only populated in client mode
  console.log("Is prioritized:", peerInfo.prioritized);

  socket.write("Hello from server!");
});

swarm1.on("update", () => {
  console.log("Connecting:", swarm1.connecting);
  console.log("Total connections:", swarm1.connections.size);
  console.log("Known peers:", swarm1.peers.size);
});

// Access swarm properties
console.log("Active connections:", swarm1.connections);
console.log("All peers:", swarm1.peers); // Map of publicKey -> PeerInfo
// console.log("Underlying DHT:", swarm1.dht);
