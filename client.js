import DHT from "hyperdht";

const node2 = new DHT();

const keyPair2 = DHT.keyPair();

console.log("keyPair2 pub: ", Buffer.from(keyPair2.publicKey).toString("hex"));
console.log("keyPair2 pri: ", Buffer.from(keyPair2.secretKey).toString("hex"));

const socket = node2.connect(
  "6d3d79a79614201ebe1539b222d52d8b58e7fabd76ce95b7c029c4f65fc88840",
);

socket.on("open", () => {
  console.log("Client connected to server!");
});

socket.on("data", (data) => {
  console.log("Client received data: ", data.toString());
});
