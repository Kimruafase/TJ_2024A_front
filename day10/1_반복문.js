/*
    JS 제어문(반복문)
    for
    >   특정 범위 내 코드를 반복 실행

    >   for 형태
        for(초기값; 조건문; 증감식){실행코드}
        1)  초기값 : 반복을 할 때 반복의 카운트/횟수 체크하는 변수의 처음값
        2)  조건문 : 반복 실행문이 실행되는 조건이므로 true면 {} 실행 아니면 for 종료
        3)  증감식 : 반복 변수의 증가 혹은 감소 변화 연산식 / 패턴
        4)  실행 코드 : 조건문이 true 일 때 실행할 코드

    >   흐름 순서
        -   초기값 -> 조건문 -> 실행 코드 -> 증감식 -> 조건문 -> 실행코드 반복
        -   조건문이 false가 될 때까지 반복 false이면 for{}를 탈출 / 종료 한다.

    >   어디서부터 어디까지 얼마씩 증가하면서 무엇을 실행하는지?

    >   배열과 반복문
        -   배열의 인덱스는 순차적인 순서가 존재
        -   1.  배열 순회
                반복변수를 index처럼 사용
            1)  for(let index = 0; index < 배열변수.length; index++){}
        -   2.  향상된 for문
            1)  for(let 반복변수 in 배열변수){}     :   배열 변수 내 인덱스를 순차적으로 하나씩 반복 변수에 대입 반복
            2)  for(let 반복변수 of 배열변수){}     :   배열 변수 내 데이터를 순차적으로 하나씩 반복 변수에 대입 반복
        -   3.  스트림 함수 :   forEach(), map(), filter() 등등
    
    >   for 중첩
        for() {
            for(){}
        }

    >   무한 루프 / 종료없는 반복
        for( ; ; ){}
        while(true){}
        -   의미 없는 코드 반복은 메모리 과부하
        -   조건문(IF)와 break를 사용해서 탈출
    
    >   반복문 키워드
            1)  break;      //  가장 가까운 for문의 { } 탈출 / 종료 / 끝내기
            2)  continue;   //  가장 가까운 for문의 증감식으로 이동
*/

//  1. 동일한 코드를 입력하기 위해서는 ctrl + c / ctrl + v 지만 한계가 있다.
console.log(`콜라 구매 : `);
console.log(`콜라 구매 : `);
console.log(`콜라 구매 : `);
console.log(`콜라 구매 : `);
console.log(`콜라 구매 : `);    //  5번 반복

//  1-1. 1부터 5까지 1씩 증가하면서 `콜라 구매` 출력
for(let i=0; i<=4; i++){
    console.log(`콜라 구매`);
};

//  2. 1~10까지 숫자 출력
for(let i=0; i<=9; i++){
    console.log(i+1);
};

//  3. 1~10까지 누적 합계 i는 1부터 10까지 1씩 증가하면서 누적 합계 계산해서 출력
//  1) 누적값을 저장하는 변수는 1번만 선언해야 하므로 for 밖에 선언
let sum = 0;
for(let i=1; i<=10; i++){
    sum += i;          // sum = sum + i;
    console.log(sum);
};

//  4. 1~100까지의 7배수만 누적 합계 값 출력, i는 0부터 100까지 7씩 증가
let sum1 = 0;
for(let i = 0; i <= 100; i += 7){
    sum1 += i;
    console.log(i);
}
console.log(`sum1: ${sum1} `);

//  5. 반복문을 이용한 구구단 중에 2단 출력하시오. 예) 2 x 1 = 2 ~~~ 2 x 9 = 18

// for(let i = 1; i <= 9; i++){
//  for(let j = 2; j <= 9; j++){
//  console.log(`${j} x ${i} = ${j * i}`);
//  }
//}

//  6. 배열의 데이터 개수 : 3개, 인덱스 : 0~2
let fruitBox = [`사과`, `포도`, `딸기`];
//  인덱스는 0부터 2까지 1씩 증가
for(let index = 0; index <= 2; index++){console.log(fruitBox[index]);};
//  인덱스는 0부터 배열명.length
for(let index = 0; index < fruitBox.length; index++){console.log(fruitBox[index]);};

//  7.
for(let index in fruitBox){console.log(index);};
for(let fruit of fruitBox){console.log(fruit);};

//  8. 반복문을 이용하여 <ol> </ol> 안에 <li>학생명</li> 하나씩 HTML 출력 
let studentList = [`유재석`, `강호동`, `신동엽`];
let html=``;
for(i=0; i<studentList.length; i++){
    html+=`<li>${studentList[i]}</li>`
}
console.log(html);
document.querySelector('#studentList').innerHTML = html;

//  9. for문 중첩
for(let parent = 1; parent<=5; parent++){   //  1~5까지 1씩 증가 반복 (회전 5번)
    console.log(`부모 : ${parent}`);
    for(let children = 1; children <= 3; children++){   // 1~3까지 1씩 증가 반복 (회전 3번 * 5 = 15번)
        console.log(`>>>> 자식 : ${children}`);
    }
}

//  10. for 중첩을 이용한 구구단 출력
for(let i = 2; i <= 9; i++){
    for(let j = 1; j <= 9; j++){
        console.log(`${i} x ${j} = ${i*j}`);
    }
}
//  11.
// for( ; ; ){
//     console.log(`무한반복`); //  메모리 과부하의 오류 발생
// }
for( ; ; ){
    //  prompt, alert, confirm 등등 몇몇 함수들은 입력 / 출력 시 모든 JS 코드 실행 중지(wait)
    let input = prompt(`무한 입력 중 : `);  
    console.log(input);
    if(input=='X' || input=='x'){break;};
}

//  12. break; 이용한 1~10까지 1씩 증가하면서 5이면 반복문 종료
for(let i = 1; i<=10; i++){
    if(i==5){break;};  //  i가 20이면 반복문 종료
    console.log(i);
}

//  13. continue; 이용한 1~10까지 1씩 증가하면서 출력, 만일 5이면 건너뛰기.
for(let i = 1; i<=10; i++){
    if(i==5){continue;};  //  i가 20이면 반복문 건너뛰기(for문의 증감식으로 이동)
    console.log(i);
}

//  14. 입력받은 데이터를 numArray에 push(추가) 하기
//      조건 1  :   중복 입력은 가능하지만 중복 저장은 불가능하도록
//      조건 2  :   배열의 중복 없이 6개의 숫자가 등록되면 반복문 종료
let numberArray = [ ];

for(let i=1; i<=6; i++){        //  1. 총 6번의 입력을 받는다.
    let num = prompt(`${i}번째 수 입력 : `);  //  2.  입력 받고 변수에 저장
    if(numberArray.indexOf(num) >=0){   //  3.  중복 제외, 입력 받은 숫자가 배열 내 존재하면 for문 증감식으로 이동   
        alert(`중복입니다. 다시 입력하세요. `)
        i--;                //  현재 반복 변수의 카운트는 무효 / 차감
        continue;           //  continue; or break;는 만나면 아래 코드는 실행되지 않음
    }
    numberArray.push(num);  //  4.  배열 저장
}
//  5.  배열 출력
console.log(numberArray);