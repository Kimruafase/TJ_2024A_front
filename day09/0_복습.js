// 복습 예제 1 : 1차 점수, 2차 점수를 입력 받아 
//              총점이 150점 이상이면 '성공' 아니면 '실패'
//              HTML의 <h3>에 출력하시오.

// 1. 입력 받은 데이터를 변수에 저장
let score0 = Number(prompt(`1차 점수 : `));
let score1 = Number(prompt(`2차 점수 : `));

// 2. 연산( 1_연결연산, 2_산술연산 ) 
let totalScore = score0 + score1;
console.log(totalScore);
// 3. 논리 조건
let message = totalScore >= 150 ? `성공` : `실패`;
console.log(message);
// 4. 문자열 템플릿
let html = `결과 : ${message}`;
console.log(html);
// 5. html 출력
let result1 = document.querySelector(`#result1`);
console.log(result1);
result1.innerHTML = html
    // document : 문서, html 뜻
    // query(질의)Selector(선택자)
        // CSS 선택자 동일 : 1. 마크업 2. .class 3. #id
    // innerHTML : <마크업> [inner] </마크업>
    //              마크업 안에 HTML 형식의 문자열


// 복습 예제 2 : 두 사람의 이름을 입력받아
//              만약 이름이 "유재석"이면 (방장) 이라고 이름 뒤에 붙이고
//              HTML의 <ol>의 두 사람의 이름을 <li>로 출력하시오.

let name0 = prompt(` 사람 이름1 : `)
let name1 = prompt(` 사람 이름2 : `)

name0 = name0 == `유재석` ? `${name0} (방장)` : name0;  
name1 = name1 == `유재석` ? `${name1} (방장)` : name1;
console.log(name0);
console.log(name1);
let html1 = `
            <li> ${name0} </li>
            <li> ${name1} </li>
            `
console.log(html1);
let result2 = document.querySelector(`#result2`);
console.log(result2);
result2.innerHTML = html1
