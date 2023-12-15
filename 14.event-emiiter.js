const evenEmitter = require("events");

const customEmitter = new evenEmitter();
customEmitter.on("response", (name, age) => {
  console.log(`data received ${name} who is ${age} years old`);
});

customEmitter.emit("response", "mingma", 22);
