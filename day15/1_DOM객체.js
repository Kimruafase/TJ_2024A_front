/*
    DOM : 문서 객체 모델

    document : HTML 전체 요소
    document.querySelector(`선택자`)    : 요소 1개를 객체로 반환
    document.querySelectorAll(`선택자`)    : 요소 여러개를 객체 배열로 반환
    - 선택자 : CSS와 동일
        > 1. 마크업 2. class명 3. id명 4. 자식 자손 선택자
    - 요소 조작 속성 / 함수
        .innerHTML 속성
            - 사용가능 요소 : <div> <ol> <table> 등등 <> </> 열고 닫는 마크업이 있는 마크업들
            - 사용불가능 요소 : <input /> <img /> <br /> 등등
            <호출> document.querySelector(`선택자`).innerHTML;
            <수정 / 대입> document.querySelector(`선택자`).innerHTML = HTML 형식의 문자열 데이터;
        .value 속성
            - 사용가능 요소 : <input /> <select> <textarea> 등등
            - 사용불가능 요소 : <div>, <table> 등등
            <호출> document.querySelector(`선택자`).value;
            <수정 / 대입> document.querySelector(`선택자`).value = HTML 형식의 문자열 데이터;
        .src 속성
            - 사용가능 요소 : <img /> <audio /> <video /> 등등
            <호출> document.querySelector(`선택자`).src;
            <수정 / 대입> document.querySelector(`선택자`).src = `파일경로`;
        .style 속성
            <전체 호출>
                document.querySelector(`선택자`).style;
            <전체 수정>
                document.querySelector(`선택자`).style = `CSS 속성코드`;
            <일부 호출>
                document.querySelector(`선택자`).style.CSS속성명;
            <일부 수정>
                document.querySelector(`선택자`).style.CSS속성명 = `속성값`;

            > CSS 속성명 작성시 카멜 표기법
                ex_ background-color -> backgroundColor
                ex_ margin-left      -> marginLeft

*/


//  1. DOM객체 확인
console.log(document);  // 현재 실행된 HTML 뜻
console.log(document.body);
console.log(document.querySelector(`body`));

//  2. document.querySelector(`선택자`)
    // 마크업 선택자 : `마크업명`
console.log(document.querySelector(`div`));
console.log(document.querySelectorAll(`div`));
    // class 선택자  : `.class명`
console.log(document.querySelector(`.box2`));
    // id 선택자     : `#id명` 
console.log(document.querySelector(`#box3`));
    // 자식, 자손 선택자
console.log(document.querySelector(`body > div`));

//  3. 선택된 요소(마크업)를 저장
let box3 = document.querySelector(`#box3`);
console.log(box3);

//  4. innerHMTL : 문서의 요소 필요
console.log(document.querySelector(`.box2`).innerHTML);
document.querySelector(`.box2`).innerHTML = `box2`

//  5. value : 
console.log(document.querySelector(`input`).value);
document.querySelector(`input`).value = `강호동`;

let select = document.querySelector(`select`);
console.log(select.value);  // 첫번째 목록이 기본값이므로 `바나나` 출력
select.value = `수박`;  // 목록을 `수박`으로 수정 / 대입

console.log(document.querySelector(`textarea`).value);
document.querySelector(`textarea`).value = `긴글 텍스트`;

//  6. src :
document.querySelector(`img`).src=`../개.jpg`;

//  7. style :
    //  전체 스타일 
console.log(document.querySelector(`#box4`).style);
document.querySelector(`#box4`).style = `color:white; background-color:blue`;
    //  부분 스타일 : CSS 속성명 작성할 때 `-` 사용하면 안 된다.
        //  카멜 표기법 : `-`를 못 쓰는 경우 대문자를 사용
        //  ex_ carspeed -> carSpeed,   background-color -> backgroundColor
console.log(document.querySelector(`#box4`).style.backgroundColor);
document.querySelector(`#box4`).style.backgroundColor = `red`;