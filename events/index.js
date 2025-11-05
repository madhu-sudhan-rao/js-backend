const EventEmitter = require("node:events");

const emitter = new EventEmitter();

emitter.on("order-pizza", () => {
    console.log('pizza order vachindi');
    
})

emitter.emit("order-pizza");
