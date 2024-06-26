/*
    >   이벤트 : 행사 또는 사건
    >   컴퓨터에서의 이벤트 : 프로그램에 의해 감지되고 처리될 수 있는 동작 or 사건
    >   컴퓨터에서의 동작 : 행위, 이벤트, 메소드, 함수
    >   함수 / function : 
        함(공간/상자) 수(숫자) : 상자 안에 들어있는 수 -> 미리 넣어둔 수 / 코드 -> 나중에 또 쓰기 위해
        ex_라면 레시피
            - 라면 스프(소금, 고춧가루, 분말) -> 데이터
            - 면 > 데이터
                1) 물(데이터)을 넣는다.(행위)
                2) 온도 체크(행위)
                3) 면(데이터) 또는 스프(데이터)를 넣는다(행위)
                4) 먹는다(행위)

    >   사용했던(미리 만들어진) 함수 = 라이브러리 함수(코드 모임)
        - console.log(), document.querySelector(), push() 등등
        - for(), if() [X]

    >   JS 데이터 타입
        1) 숫자 2) 문자 3) 논리 / boolean = 자료
        4) undefined = 자료 없음
        5) 배열 = 자료(데이터 다수)
        6) 함수 = 자료(코드 다수)

    >   함수의 종류
        1) 남이 만든 미리 만들어진 함수 = 라이브러리 함수 ex_console.log()
        2) 내가(개발자) 정의하는 함수 = 정의 함수
            - 선언적 함수, 익명 함수, 화살표 함수

    >   선언적 함수 선언 방법
        1) function             : 함수 선언 / 정의하기 위한 미리 만들어진 키워드 / 단어
        2) 함수명                : 여러 함수들을 식별하기 위한 용도(키워드x, 숫자시작x, 일부 특수 문자x, 띄어쓰기x)
        3) (매개변수)            : parameter / 인수 -> 함수 안으로 들어가는 수, 정해져 있지 않은 수
        4) {다양한 실행 코드;}    : 함수가 호출되면 실행되는 구역
        5) return                : 반환/리턴 -> 함수가 종료되면서 *함수가 호출했던 곳으로 수 반환

    >   익명 함수 선언 방법
        1) function
        2) (매개변수) 
        3) {다양한 실행 코드;}
        4) return

    >   화살표 함수 선언 방법
        1) (매개변수) 
        2) =>
        3) {다양한 실행 코드;}
        4) return
*/
//  1. 선언적 함수 정의 방법
function f(x){console.log(`함수 실행`); return `반환값`;};

//  2. 익명 함수 정의 방법
function(y){console.log(`함수 실행`); return `반환값`;};

//  3. 화살표 함수 정의 방법
(z) => {console.log(`함수 실행`); return `반환값`;};