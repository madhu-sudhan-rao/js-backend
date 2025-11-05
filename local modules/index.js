
// this is a local module
// require('./add.js');

// In node.js, each file is a module that is isolated by default

// To load a module into another file, we use the require function

// When index.js is executed, the code in the module is also executed

// If the file we are requiring is a javascript file, we can skip specifying the extension
// and node.js will infer it on our behalf


// const add = require('./add.js'); // we can also assign if we use module.exports

// const sum = add(1, 2);
// console.log(sum);

// console.log('hello world');

// ------------------


require('./batman.js');
require('./superman.js');
