//  1. 복습 예제 : 특정 html(star1 div)에 '★'을 5개 출력하시오.
/*
    * DOM 객체
    document.querySelector()        : 특정 선택자의 html 요소를 js 객체로 반환해주는 요소
    document.querySelector(`#id명`)
    document.querySelector(`.class명`)
    document.querySelector(`tagName`)

    * DOM객체.innerHTML = 마크업 사이에 넣을 HTML형식의 문자열
        >   <마크업> 여기 </마크업>
        >   <div> </div>, <ol> </ol>, <span> </span> 등은 innerHTML 사용 가능
        >   <input />, <img /> 등은 innerHTML 사용 불가능
*/

let html = ` `;       //  ㅁ + 한자키 > 8 > ★    //  1) 데이터 구성
for(let i=0; i<=4; i++){                         //  2) 데이터를 0부터 4까지 1씩 증가시키면서 하나씩 출력
    html += `★`;
    //  3) 누적 합계 : 변수 += 값, 변수 = 변수 + 값
}
//  4) 특정 HTML 마크업의 innerHTML 속성에 변수값을 대입하기
document.querySelector(`#star1`).innerHTML=html;

//  2. 복습 예제 : 특정 html(star2 div)에 총점 5점에서 고객평점을 출력하시오.
//     출력 형식 : 만약에 고객 평점이 3점이라면 ★★★☆☆
let grade = 2;
let html0 = ` `;                                //  1) 구성할 html 변수 선언
for(let i=0; i<=4; i++){                        //  2) 0~4까지 1씩 증가하면서 별 출력
    if(i<=grade){html0+= `★`; continue;}       //  3) 0~2까지는 고객평점 `★` 출력
    html0 += `☆`;                              //  4) 나머지 ☆ 출력
}
document.querySelector(`#star2`).innerHTML=html0;

//  3. 복습 예제 : 특정 html(sheet div)에 좌석 배열 상태에 아래와 같이 출력하시오.
//  빈 좌석 : x, 예약된 좌석 : o
//  - 2개씩 3줄 출력
//  - 빈좌석이면 gray 표시, 예약된 좌석이면 red 표시
//  ㅁㅁ
//  ㅁㅁ
//  ㅁㅁ

let sheetArray = ['o', 'x', 'o', 'o', 'x', 'x']
let html1 = ``;
for(i=0; i<sheetArray.length; i++){
    if(sheetArray[i]==`x`){
    html1 += `<div class="grayBox"> 빈 좌석 </div>`}
    else{html1 += `<div class="redBox"> 예약석 </div>` }
}
document.querySelector(`#sheet`).innerHTML=html1;