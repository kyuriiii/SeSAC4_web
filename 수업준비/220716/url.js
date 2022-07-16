const string = "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=sesac";
const { URL } = require("url");
const myURL = new URL(string);

console.log("searchParams : ", myURL.searchParams );
console.log("searchParams.getAll() : ", myURL.searchParams.getAll("where"));
console.log("searchParams.has() : ", myURL.searchParams.has("where"));

console.log("---------------");
const url = require("url");
const querystring = require("querystring");

const parsedUrl = url.parse(string);
const query = querystring.parse(parsedUrl.query);
console.log("querystring.parse() : ", query);
console.log("querystring.stringify() : ", querystring.stringify(query));