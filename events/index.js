// const EventEmitter = require("node:events");

// const emitter = new EventEmitter();

// emitter.on("order-pizza", () => {
//     console.log('pizza order vachindi');
    
// })

// emitter.emit("order-pizza");


// ----------------------------------

const PizzaShop = require("./pizza-shop");
const pizzaShop = new PizzaShop()

pizzaShop.on('order', (size, toppings) => {
    console.log(size, toppings);
    
})

pizzaShop.order('large', 'choco nuts');
pizzaShop.displayOrderNumber()