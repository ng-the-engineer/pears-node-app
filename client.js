import DHT from "hyperdht";

const node2 = new DHT();

const keyPair2 = DHT.keyPair();

console.log("keyPair2 pub: ", Buffer.from(keyPair2.publicKey).toString("hex"));
console.log("keyPair2 pri: ", Buffer.from(keyPair2.secretKey).toString("hex"));

const socket = node2.connect(
  "f5d32199a5b63b2d52ee622e80b27893e87c21570518ad3486c5f8fd15488c1b",
);

socket.on("open", () => {
  console.log("Client connected to server!");
});

socket.on("data", (data) => {
  console.log("Client received data: ", data.toString());
});
