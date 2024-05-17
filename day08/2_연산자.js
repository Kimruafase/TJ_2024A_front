/*

    연산자  :   연산 시 사용되는 기호
    1)  산술 연산자 :   결과물 ->   연산 결과
        >   +   더하기
        >   -   빼기
        >   *   곱하기
        >   /   나누기
        >   %   나머지
        >   몫  :   parseInt()  -   정수 반환 함수

    2)  연결 연산자 :   결과물  ->  연산 결과
        >   피연산자에 문자가 포함되면 연결 연산자로 적용
        >   문자 + (숫자1 + 숫자2)

    3)  비교 연산자 :   결과물  ->  true / false
        >   '>'     초과 / 크다     
        >   '>='    이상 / 크거나 같다
        >   '<'     미만 / 작다
        >   '<='    이하 / 작거나 같다
        >   '=='    [값]이 같다
        >   '==='   [값과 타입]이 같다
        >   '!='    같지 않다
        >   '!=='   같지 않다 (데이터의 타입까지)

    4)  관계 연산자 :   비교 연산자 2개 이상일 때
        >   '&&'    and
            true && true -> true
            true && false -> false
        >   '||'    or    
            true || true -> true
            false || true -> true
        >   '!'     부정의 반대 not 조건
            !true -> false
            !false -> true

    5)  대입 연산자
        >   '='     대입 (오른쪽 데이터를 왼쪽에 대입)
        >   '+='    오른쪽 데이터를 왼쪽 데이터와 계산(더하기) 후 왼쪽에 대입
        >   '-='
        >   '*='
        >   '/='
        >   '%='

    6)  증감 연산자
        >   '++'    1 증가  [ 선위 증가 : ++변수, 후위 증가 : 변수++ ]
        >   '--'    1 감소  [ 선위 감소 : --변수, 후위 감소 : 변수-- ] 
            *   선위 / 후위 기준 : [;] 세미콜론 기준인 줄 안에서 우선순위
    
    7)  삼항 연산자
        >   조건 ? 참 : 거짓
        >   조건1 ? 참1 : 조건2 ? : 참2 : 거짓
*/
console.log(10+3);                      //  13
console.log(10-3);                      //  7
console.log(10*3);                      //  30
console.log(10/3);                      //  3.3333333...
console.log(10%3);                      //  1
console.log(parseInt(10/3));            //  3
console.log('연산결과 : ' + 10 + 10);    //  연산 결과 : 1010
console.log('연산결과 : ' + (10 + 10));  //  연산 결과 : 20

//  >   prompt 함수의 주의할 점 :   모든 입력된 값이 문자이다. why? input이기 때문에 
//  >   "10" -> 10  문자 10을 숫자 10으로 변환하는 방법
//      1)  "10"*1          -> 10
//      2)  Number("10")    -> 10
//  >   10  ->  "10" 숫자 10을 문자 10으로 변환하는 방법
//      1)  10+""           ->  "10"
//      2)  String(10)      ->  "10"

//  문제 1
let Korean = Number(prompt("국어 점수 : "));    //  1. 국어 점수를 입력 받고 num으로 변환 후 저장
let English = Number(prompt("영어 점수 : "));   //  2. 영어 점수를 입력 받고 num으로 변환 후 저장
let Math = Number(prompt("수학 점수 : "));      //  3. 수학 점수를 입력 받고 num으로 변환 후 저장
let Score = Korean+English+Math;               //  4. 국어 + 영어 + 수학 총점 계산 후 저장
let Mean = Score/3;                            //   5. 총점을 3으로 나눠 평균 계산 후 저장
console.log(`총점 : ${Score}`);                 //  6. 총점을 console에 출력
console.log(`평균 : ${Mean}`);                  //  7. 평균을 console에 출력

// 문제 2
let r = Number(prompt("반지름 : "));            //  1. 반지름을 입력받고 num으로 변환 후 저장
let Area = (r**2)*3.14                          //  2. 입력받은 반지름을 pi * r^2로 넓이 계산 후 저장
console.log(`넓이 : ${Area}`);                  //  3. 넓이를 console에 출력

//  문제 3
let num0 = Number(prompt("실수 값 : "));        //  1.  실수 1 입력 받고 num으로 변환 후 저장
let num1 = Number(prompt("실수 값 : "));        //  2.  실수 2 입력 받고 num으로 변환 후 저장
let per = 100*(num0/num1);                      //  3.  입력 받은 실수 1과 실수 2의 비율 계산
console.log(`비율 : ${per}%`);                  //  4.  비율을 console에 출력 (1 > 100%, 0.1 > 10%, 0.01 > 1%, 10 > 1000%)

//  비교 연산자
console.log(10 > 3);    //  초과 true
console.log(10>=3);     //  이상 true
console.log(10<3);      //  미만 false
console.log(10<=3);     //  이하 false
console.log(10==3);     //  같다 false
console.log(10=="10");  //  같다 true
console.log(10==="10")  //  강력비교 false
console.log(10!=3);     //  같지 않다 true
console.log(10!==3)     //  강력비교 true

//  관계 연산자
console.log(10>3&&20>10);   //  true && true -> true
console.log(10>3&&20>30);   //  true && false -> false
console.log(10>3||20>10);   //  true || true -> true
console.log(10>3||20>30);   //  true || false -> true
console.log(!(10>3));       //  !true -> false

//  문제 4
let int0 = Number(prompt('정수 : '));    
let int1 = (int0%2==1);                      //  int0의 값을 2로 나눴을 때 나머지가 1이라면 true 아니면 false
console.log(`결과 : ${int1}`);

//  문제 5
let int2 = Number(prompt('정수 : '));
let int3 = (int2%7 == 0);                    //  int2의 값을 7로 나눴을 때 나머지가 0이라면 true 아니면 false 
console.log(`결과 : ${int3}`);

//  문제 6
let id = prompt('아이디 : ');
let pw = Number(prompt('비밀번호 : '));
let eq = (id=="admin" && pw==1234);          //  id의 문자가 "admin"이고 pw의 값이 1234라면 true, 아니라면 false
console.log(`결과 : ${eq}`)

//  문제 7
let int4 = Number(prompt('정수 : '));
let int5 = (int4%2==1 && int4%7==0);         //  int4의 값을 2로 나눴을 때 나머지가 1이고 7로 나눴을 때 나머지가 0이라면 true 아니면 false
console.log(`결과 : ${int5}`);

//  문제 8
let int6 = Number(prompt('금액 : '));
let money0 = parseInt(int6/100000);             //  ex_456789 / 100000 = 4
let money1 = parseInt(int6%100000/10000);       //  ex_456789 % 100000 = 56789, 56789 / 10000 = 5
let money2 = parseInt(int6%10000/1000);         //  ex_456789 % 10000 = 6789, 6789 / 1000 = 6
console.log(`결과 : 10만원권 [${money0}장] 1만원권 [${money1}장] 1천원권 [${money2}장]`);

//  대입 연산자
let x = 10;
x = x + 3;      //  x = 10 + 3;
                //  x = 13;
                //  x(13)
x += 3;         //  오른쪽 값을 왼쪽 값과 더한 후 결과를 왼쪽에 대입
x -= 3;
x *= 2;

//  증감 연산자
let y = 40;
console.log(y++);   //  40 1. 변수 호출 2. 출력 3. 1 증가
console.log(y);     //  41
console.log(++y);   //  42

console.log(y--);   //  42
console.log(y);     //  41
console.log(--y);   //  40

/*
    y = y + 1;  (O)
    y += 1;     (O)
    y++;        (O)

    y = y + 3;  (O)
    y += 3;     (O)
    y++++++;    (X)
*/

//  삼항 연산자
let score = 75;
console.log(score >= 80);                                           //     false
console.log(score >= 80 ? `합격` : `불합격`);                        //     false -> 불합격

let age = 39;
console.log(age >= 19);                                             //     true
console.log(age >= 19 ? `성인` : `미성년자`);                        //     true -> 성인
console.log(age >= 40 ? `중년` : age >= 19 ? `청년` : `미성년자`);    //    성인    

let score0 = prompt('점수 : ');
console.log(score0 >= 80 ? `합격` : `불합격`);