/*
    - 매개변수의 반환값 선언                       호출
    >   1. function func1(){}                  func1()
    >   2. function func2(x,y){}               func2(x,y)
    >   3. function func3(x,y){return}         let result1 = func3(x,y)
    >   4. function func4(){return}            let result2 = func4()

    - 함수 호출하는 방법
    >   1. JS에서 JS 함수를 호출하는 방법       : 함수명()[선언된 함수가 같은 JS에 존재할 경우]
    >   2. HTML에서 JS 함수를 호출하는 방법     : <마크업 이벤트속성="함수명()"> </마크업>
            -> 이벤트 속성의 종류
                1) onclick : 클릭 이벤트가 발생했을 때

*/


//  함수 정의 만들기

//  1. 선언적 함수
//  매개변수 X, 반환값 X
function func1( ){console.log(`func1 실행`);};
//  매개변수 O, 반환값 X
function func2(x,y){console.log(`func2 실행 `+ (x+y));};
//  매개변수 O, 반환값 O
function func3(x,y){console.log(`func3 실행 `+ (x+y)); return x+y;};
//  매개변수 X, 반환값 O
function func4(){console.log(`func4 실행 `); return `10`;};

//  함수 호출
//  0. 라이브러리 : 미리 만들어둔 함수 호출
// console.log(`lib 실행`);        //  매개변수 O : f12 개발자도구 출력할 메시지, 반환값 X
// prompt(`메시지 : `);            //  매개변수 O : 알림창에 출력할 메시지, 반환값 O : 입력받은 값
// document.querySelector();       //  매개변수 O : 선택자, 반환값 : DOM객체(html 마크업을 js코드객체로)
// Math.random();                  //  매개변수 X, 반환 O : 0~1 미만의 난수 값
//  1. 함수명( ) : 매개변수 X인 함수 호출
func1();
//  2. 함수명(데이터, 데이터) : 매개변수에 대입할 데이터 대입
func2(10, 4);
func2(5, 12);
//  3. 함수명(데이터, 데이터) : 매개변수에 대입할 데이터 대입,
func3(15,42);                   //  15와 42를 대입해서 함수가 실행 후 57 반환하지만 변수에 대입하지 않아 사라짐
let result3 = func3(15,42);
console.log(func3(10,3));
//  4. 함수명()
let result4 = func4();
