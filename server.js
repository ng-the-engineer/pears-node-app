import DHT from "hyperdht";

const node1 = new DHT();

const keyPair1 = DHT.keyPair();

console.log("keyPair1 pub: ", Buffer.from(keyPair1.publicKey).toString("hex"));
console.log("keyPair1 pri: ", Buffer.from(keyPair1.secretKey).toString("hex"));

// Node 1: Create server
const server = node1.createServer((socket) => {
  console.log("Server received connection");
  socket.write("Hello from server!");
});

await server.listen(keyPair1);
