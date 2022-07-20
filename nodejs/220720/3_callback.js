function func1(callback){ 
    callback();
}


func1(function (){
    console.log( " 안녕 " );
});