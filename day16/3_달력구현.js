//  1. new Date()   : 현재 날짜 / 시간 객체 반환
console.log(new Date());
//  2. 현재 년도
console.log(new Date().getFullYear());
//  3. 현재 월 
console.log(new Date().getMonth()+1)
//  4. new Date(연도, 월, 일); 사용자 정의 날짜 객체 반환
console.log(new Date(2023, 4, 29))  //  2023-05-29
//  5. new Date(연도, 월, 0); 특정 정의 날짜의 마지막날
console.log(new Date(2024, 4, 1));  //  2024-05-01
console.log(new Date(2024, 4, 0));  //  2024-04-30
//  6. 요일 (일 ~ 월)
console.log(new Date().getDay());
//  7. 날짜
console.log(new Date().getDate());

//----------------------- 모든 함수에서 사용할 변수 : 전역변수 ----------------//
let currentDate = new Date();
let year = currentDate.getFullYear();
let month = currentDate.getMonth()+1;

//  객체 1개 = 일정 1개, 배열 1개 = 여러개의 일정
let scheduleList = [
    {no : 1, content : `학원개강`, date : `2024-5-7`, color : `blue`},
    {no : 2, content : `은행업무`, date : `2024-5-10`, color : `red`},
    {no : 3, content : `복습`, date : `2024-5-31`, color : `green`},
    {no : 4, content : `신용카드발급`, date : `2024-5-31`, color : `green`}
]
let a = 4;
//  1. 출력함수 > 실행조건 1. js 열렸을 때 2. 월이 변경되었을 때
calPrint();     // js 열렸을 때 실행
function calPrint(){

    //  ---------------------------- 상단 ----------------------------- //
    //  1. 어디에
    let 제목 = document.querySelector(`#calTop > h5`);

    //  2. 무엇을
    let html = `${year}년 ${month}월`

    //  3. 출력
    제목.innerHTML = html;

    //  ---------------------------- 캘린더 ----------------------------- //
    //  1. 어디에
    let calender = document.querySelector(`#calender`)

    //  2. 무엇을   2024년 05월 기준 31일까지 있으니 31개의 div
    let html1 = `<div id="sunday">
                    일
                </div>
                <div class="week">
                    월
                </div>
                <div class="week">
                    화
                </div>
                <div class="week">
                    수
                </div>
                <div class="week">
                    목
                </div>
                <div class="week">
                    금
                </div>
                <div class="saturday">
                    토
                </div>`;
    //  2-1. year, month 변수에 저장된 말일 구하기
    let date = new Date(year, month, 0);    // 2024 4월 말일
    let lastDate = date.getDate();
    console.log(lastDate);
    //  2-2. year, month 변수에 저장된 날짜의 1일 요일 구하기
    let date1 = new Date(year, month-1, 1); // 5월 -> 4
    let firstWeek = date1.getDay();         // 0 : 일 ~ 6 : 토
    console.log(firstWeek);
    //  * 1일 앞에 공백 출력 반복문
    for(let i=1; i<=firstWeek; i++){
        html1 += `<div></div>`
    }
    
    //  * 1일부터 말일까지 출력 반복문
    for(let i=1; i<=lastDate; i++){
        //  현재 반복되고 있는 날짜의 형식(연도-월-일) 만들기
        let date2 = `${year}-${month}-${i}`;
        let dateHtml = ``;  // 일마다의 content
        //  일정목록에 date2와 동일한 날짜가 있는지
        for(let j=0; j<scheduleList.length; j++){
            if(scheduleList[j].date==date2){
                dateHtml += `<div style="background-color:${scheduleList[j].color}; color:white">
                            ${scheduleList[j].content}
                            </div>`
            }
        }
        html1 += `<div onclick="modal(${i})"> ${i} ${dateHtml} </div>`
    }

    //  3. 출력
    calender.innerHTML=html1;
}

//  2. 월 변경함수 > 실행 조건 1. 화살표 클릭했을 때
function monthChange(index){
    console.log(`monthChange()`)
    //  만약에 이전 버튼을 클릭하면 월 1 차감
    if(index == 0){
        month--;
        if(month==0){
            month = 12;
            year--;
        }
    //  만약에 다음 버튼을 클릭하면 월 1 증가    
    }else if(index==1){
        month++;
        if(month==13){
            month = 1;
            year++;
        }
    }
    //  연도와 월이 변경되었으므로 출력 새로고침
    calPrint();
}
function modal(index){
    let btnOpenModal=document.querySelector(`#calender`);
    let modalBody = document.querySelector(`.modal_body`);
    let date3 = `${year}-${month}-${index}`;
    let html2 = ``;
    let modal = document.querySelector('.modal');
    btnOpenModal.addEventListener("click", ()=>{
        modal.style.display="flex";
        html2 = `<h2>${date3}</h2>
                <input type="text" id="content">
                <input type="color" id="color">
                <button onclick="reg(${index})">입력</button>
                <button onclick="_delete()" id="deleteBtn">창 닫기</button>`;
        modalBody.innerHTML = html2;
    });
}
function _delete(){
    document.querySelector('.modal').style.display="none";
}
function reg(index){
    let content = document.querySelector(`#content`).value;
    let color = document.querySelector(`#color`).value;
    let date4 = `${year}-${month}-${index}`;
    let scheduleAdd = {no : a++, content: `${content}`, date : `${date4}`, color : `${color}`};
    scheduleList.push(scheduleAdd);
    console.log(scheduleList);
    calPrint();
}