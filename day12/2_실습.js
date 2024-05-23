/*

    실습 2 : 웹 가계부 만들기
        [요구사항]
            > 항목마다 날짜, 항목명, 금액 3가지를 저장
            > 하단에 등록된 금액의 총 합계 출력
            > 출력은 <table> 사용

        + 추가 요구사항
            > 테이블에 항목 전체 내역을 아래와 같이 출력해주세요.
            ex_ 날짜          항목        금액
                2024-05-23    콜라        1000
                2024-05-24    커피        2000
            > 전체 내역에서 특정 항목 삭제하는 버튼 기능
            > 금액의 천원 단위마다 ',(쉼표)' 처리
                - toLocaleString()

        (설계)

        [백엔드]
            1) 메모리 구성
            let dateList = [];
            let nameList = [];
            let moneyList = [];

            2) 기능 구성
                > add(){} 입력 / 저장 함수
                > total(){} 총 합계 함수

            3) 기능 구현
                > 입력 저장 함수
                [로직 순서] 1. 입력받고 2. 배열 저장 3. 메시지 안내
                > 총 합계 함수
                [로직 순서] 1. 배열에 있는 데이터를 가져와서 다 더함. 2. 총 합계를 보여줌

        [프론트엔드]
            1) HTML 구성
                > <input/> 3개,<button/> 1개, <table> 1개 
            2) HTML 구현

        [백엔드 / 프론트엔드 연동]
            1) 선택자

            2) onclick
                >   add()   : 클릭 시
                >   total() : 항목 저
        

*/

let dateList = [];
let nameList = [];
let moneyList = [];

function add(){
    // [로직 순서] 1. 입력받고 2. 배열 저장 3. 메시지 안내
    let dateInput = document.querySelector(`#dateInput`);
    let nameInput = document.querySelector(`#nameInput`);
    let moneyInput = document.querySelector(`#moneyInput`);

    let date = dateInput.value;
    let name = nameInput.value;
    let money = moneyInput.value;

    dateList.push(date);
    nameList.push(name);
    moneyList.push(money);

    alert(`항목 저장 성공`);

    // total();
    print();
}

function total(){
    let sum=0;
    for(let i=0; i<moneyList.length; i++){
        sum += Number(moneyList[i]);
    }
    // 호출했던 곳으로 데이터 보내주기
    return sum;
}

function print(){
    let moneyTable = document.querySelector(`#moneyTable`);
    let html = ``;
    //  1. 테이블의 제목 부분
    html +=` <tr>
                <th>
                    날짜
                </th>
                <th>
                    항목
                </th>
                <th>
                    금액
                </th>
                <th>
                    비고
                </th>
            </tr>
            `;
    // 2. 테이블의 내용 부분 : 항목 내역들 = 배열 내 전체 = 반복문
    for(let i=0; i<moneyList.length; i++){
        //  각 i번째 인덱스의 항목 정보를 각각 호출
        let currentMoney = Number(moneyList[i]); 
        let currentName = nameList[i]; 
        let currentDate = dateList[i];
        
        html += `<tr>
                    <td>
                        ${currentDate}
                    </td>
                    <td>
                        ${currentName}
                    </td>
                    <td>
                        ${currentMoney.toLocaleString()}
                    </td>
                    <td>
                        <button onclick = "remove(${i})">
                            삭제
                        </button>
                    </td>
                </tr>
                `;
        
    }
    // 3. 하단 부분 : 총 합계
    html += `<tr>
                <td colspan="2">
                    합계
                </td>
                <td colspan="2">
                    ${total().toLocaleString()}
                </td>
            </tr>               
            `;
    moneyTable.innerHTML = html;
    console.log(html);
}

//  삭제 : 인덱스를 이용한 삭제 구현
function remove(deleteIndex){

    //let deleteIndex = 0;

    //  1. 배열 내 특정 인덱스의 요소 삭제
    dateList.splice(deleteIndex, 1);
    moneyList.splice(deleteIndex, 1);
    nameList.splice(deleteIndex, 1);
    //  2. 삭제가 되면 배열의 상태가 변경되므로 배열의 상태를 다시 출력 - 화면 업데이트
    print();
}