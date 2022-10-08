// app.js

console.log( process.env.KEY );
require("dotenv").config();
// dotenv.config({ path: path.join(__dirname, "./config/envs/common.env") });
console.log( process.env.KEY );
console.log( process.env.USER );