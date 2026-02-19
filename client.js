import DHT from "hyperdht";

const node2 = new DHT();

const keyPair2 = DHT.keyPair();

console.log("keyPair2 pub: ", Buffer.from(keyPair2.publicKey).toString("hex"));
console.log("keyPair2 pri: ", Buffer.from(keyPair2.secretKey).toString("hex"));

const socket = node2.connect(
  "f8811089af13c469b425177c9dd6831d3167e6c4b5919ae9d0a13f6c1afb2a12",
);

socket.on("open", () => {
  console.log("Client connected to server!");
});

socket.on("data", (data) => {
  console.log("Client received data: ", data.toString());
});
