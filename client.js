const DHT = require("hyperdht");

const node2 = new DHT();

const keyPair2 = DHT.keyPair();

console.log("keyPair2 pub: ", Buffer.from(keyPair2.publicKey).toString("hex"));
console.log("keyPair2 pri: ", Buffer.from(keyPair2.secretKey).toString("hex"));

const socket = node2.connect(
  "c37058a01fe56a2790afbd2e42be233732f8484320630d0702e7b8e3ee760c81",
);

socket.on("open", () => {
  console.log("Client connected to server!");
});

socket.on("data", (data) => {
  console.log("Client received data: ", data.toString());
});
