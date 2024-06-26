// ----------------------------- 전역 / ex_대한민국 / JS 전체 -------------------- //
let x1 = `전역`;

// ----------------------------- 지역{} / ex_인천광역시 / 일부 ------------------- //
if(true){   
    let x2 = `지역1`;
    console.log(x1);    // O
    console.log(x2);    // O
    // console.log(x3);    // X

// ----------------------------- 지역{} / ex_인천광역시 부평구 / 일부 -------------- //
    for(let i = 0; i < 1; i++){

        let x3 = `지역2`;

        console.log(x1);    // O
        console.log(x2);    // O
        console.log(x3);    // O
    }
// ----------------------------- 지역{} / ex_인천광역시 부평구 / 일부 -------------- //

}
// ----------------------------- 지역{} / ex_인천광역시 / 일부 ------------------- //

function y1(){
    let y2 =`지역3`;
    return y2;
}

console.log(x1);    // O
// console.log(x2);    // X
// console.log(x3);    // X
// console.log(y2);    // X
// ----------------------------- 전역 / ex_대한민국 / JS 전체 -------------------- //


// 전역변수와 지역변수의 활용 예시

// [[[ 전역변수 ]]]
let array = [];

function y2(){
    // let array = [];                                      // 0. 배열 선언, 함수가 끝나면 해당 배열의 데이터 삭제
    // let input = prompt(`성명 : `);                          // 1. 입력 받고 변수에 저장 > 사라짐
    // [[[ 지역변수 ]]]
    let input = document.querySelector(`#성명`).value;

    array.push(input);                                      // 2. 입력 받은 데이터를 변수에 저장 

    document.querySelector(`#출력박스`).innerHTML = array;   // 3. HTML에 출력

    document.querySelector(`#성명`).value = ``;
}

//  함수 사용하는 이유
//  1. 반복되는 코드를 한 번에 정의하고 필요에 따라 호출해서 반복 작업을 피할 수 있다. [코드 양 줄이기]
//  2. 긴 프로그램을 기능별로 함수를 구성해서 여러 함수로 모듈화[조각 / 레고]해서 전체 코드의 가독성[읽기]이 좋아짐.
//  3. 기능별(함수별)로 수정이 편하고 유지보수가 쉽다.
//  4. 매개변수 / 인수에 따른 서로 다른 결과물 ex_ x = 3일 때와 5일 때 서로 다른 결과
//  5. {} 지역변수를 사용하기 때문에 효율성이 좋다. 
//      -> 함수가 실행될 때만 {} 메모리를 할당하고 함수가 종료되면 메모리 초기화 / 사라짐. 