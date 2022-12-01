function geText(text){
	return text; 
}
function getText2<T>(text: T):T {
	return text;
}
/*
console.log( getText2<number>(10) );
function getTExt2(text:number): number {
    return text;
}
*/
console.log( getText2<number>(10) );
console.log( getText2<string>('text') );
console.log( getText2<boolean>(true) );