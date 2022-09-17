const { a, b } = require("./1_var.js" );
const returnString = require("./func.js");

import { a, b } from './1_var.js';
import returnString from './func.js';

console.log( returnString() );