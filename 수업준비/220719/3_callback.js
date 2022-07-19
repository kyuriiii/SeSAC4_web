function func(callback) {
    callback();
}
function func2(){
    console.log( "gogo 함수" );
}
func(func2);

function doHomework( subject, callback ){
	console.log( `${subject} 과목 숙제를 시작합니다.` );
	callback();
}
doHomework( '코딩', function() {
    console.log( '코딩 숙제 끝!(1)' );
});

function finishHomework(){
    console.log( '코딩 숙제 끝!(2)' );
}
doHomework( '코딩', finishHomework );

/*
step1(function (value1) {
    step2(function (value2) {
        step3(function (value3) {
            step4(function (value4) {
                step5(function (value5) {
                    step6(function (value6) {
                        // Do something with value6
                    });
                });
            });
        });
    });
});
*/