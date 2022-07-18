const url = require("url");
console.log( url );
console.log( url.parse )
console.log( url.URL );
const naver = new url.URL(string);

const { URL, parse } = url;
parse();
url.parse();
// const { URL } = url;
// const string = "https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=sesac&oquery=sesac&tqi=hWg%2F8sprvmZss6uZF3GssssssfV-461107";
// const naver = new URL(string);

// console.log( url.format( naver ) );
// console.log( url.parse(string));

// console.log( naver.searchParams );Q