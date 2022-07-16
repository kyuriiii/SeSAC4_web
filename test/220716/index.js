const { a, b } = require("./var.js" );
const returnString = require("./func.js");

import { a, b } from './var.js';
import returnString from './func.js';

console.log( returnString() );