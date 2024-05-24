let boardList = ["제목입니다,내용입니다,1234,2024-05-24,3",
                 "두번째 제목,내용입니다,2345,2024-05-25,0"
                ];

//  1. 등록
function _create(){ // 실행 조건 : [등록] 버튼 클릭했을 때
    //  1-1
    let title = document.querySelector(`#titleInput`).value;
    let content = document.querySelector(`#contentInput`).value;
    let password = document.querySelector(`#passwordInput`).value;
    //  1-2. 입력받지 않은 데이터를 초기화
    let date = new Date();  // 현재 날짜 / 시간을 반환해주는 라이브러리 함수
        console.log(date);
        console.log(date.getFullYear());  // 연도만 추출            2024
        console.log(date.getMonth());     // 월만 추출              4[5월]
        console.log(date.getDate());       // 일만 추출              24
        console.log(date.getHours());     // 시간만 추출            11
        console.log(date.getMinutes());   // 분만 추출              18
        console.log(date.getSeconds());   // 초만 추출              30
    // 원하는 날짜 추출해서 가공
    let currentYear = date.getFullYear();
    let currentMonth = date.getMonth()+1 < 10 ? "0"+(date.getMonth()+1) : (date.getMonth()+1);
    let currentDay = date.getDate() < 10 ? "0"+(date.getDate()) : date.getDate();
    date = `${currentYear}-${currentMonth}-${currentDay}`;
    console.log(date);
    let view = 0; // 처음 등록시 조회 수는 0부터 시작
    //  1-3. "," 쉼표 구분해서 하나의 문자열로 만들자.
    let board = `${title},${content},${password},${date},${view}`; 
    console.log(board);
    //  1-4. 배열 등록
    boardList.push(board);
    console.log(boardList);
    //  1-5. 메시지 출력
    alert(` 등록 성공 `);
    _allRead();
}
_allRead();
//  2. 출력
function _allRead(){    // 실행 조건 : 1. 페이지가 열렸을 때(HTML 실행 -> JS 실행) 2. 데이터의 변화(수정 / 삭제 / 등록)가 있을 때
    //  1. 어디에
    let tableBody = document.querySelector(`#tableBody`);

    //  2. 무엇을
    let html = ``;
    for(let i=0; i<boardList.length; i++){  // 배열 순회 > 0번 인덱스부터 마지막 인덱스까지
        //  i번째 게시물 반환
        let board = boardList[i]; console.log(board);
        //  게시물의 정보 분류 > 특정 문자 기준으로 문자열 분류 함수 [.split] > 기존 문자 기준으로 자른 후 배열 반환
        let boardArray = board.split(`,`); console.log(board.split(`,`));
        // "," 쉼표 기준으로 각 분류된 배열의 정보
        console.log(boardArray[0]);
        console.log(boardArray[3]);
        console.log(boardArray[4]);

        html +=`<tr>
                    <td>
                        ${i+1}
                    </td>
                    <td onclick="_read(${i})">
                        ${boardArray[0]}
                    </td>
                    <td>
                        ${boardArray[3]}
                    </td>
                    <td>
                        ${boardArray[4]}
                    </td>
                </tr>
                `; 
    }

    //  3. 출력 / 대입
    tableBody.innerHTML=html;
}

//  3. 상세 페이지 출력 / 출력개별 출력 실행 조건 : 1. 제목을 클릭했을 때
function _read(i){
    //  선택 / 클릭 했을 때 클릭된 해당 인덱스를 매개변수로 받아서
    let boardArray = boardList[i].split(`,`);   //  해당 인덱스의 게시물 정보를 `,` 기준으로 인덱스 배열 반환
    //  1. 어디에
    let viewPage = document.querySelector(`#viewPage`);

    //  2. 무엇을
    let html = `<h3>
                    상세 페이지
                </h3>
                <div>
                    ${boardArray[0]}
                </div>
                <div>
                    <span>
                        조회수 : ${boardArray[4]}
                    </span>
                    <span>
                        작성일 : ${boardArray[3]}
                    </span>
                </div>
                <div>
                    ${boardArray[1]}
                </div>    
                <button type="button" onclick="_update(${i})"> 수정 </button>
                <button type="button" onclick="_delete(${i})"> 삭제 </button> 
                `;

    //  3. 출력 / 대입
    viewPage.innerHTML = html;

}

//  4. 수정함수 / 실행 조건 > (누구를) 1. 수정 버튼 클릭할 때
function _update(i){
    if(!(_pwConfirm(i))){
        return;
    }
    //  배열 내 특정 데이터 수정
    //  > 해당 게시물 분류
    let board = boardList[i].split(`,`);
    //  새로운 제목과 내용 입력 받음
    let uTitle = prompt(`수정할 제목 : `);
    let uContent = prompt(`수정할 내용 : `);
    //  수정할 정보로 구성 > 새로운 제목과 내용만 수정 변수로 구성하고 나머지는 기존 데이터 사용
    let uBoard = `${uTitle},${uContent},${board[2]},${board[3]},${board[4]}`
    //  i번째 boardList의 인덱스의 정보를 uBoard로 수정(대입)
    boardList[i] = uBoard;
    //  화면 새로고침(재출력 > 데이터의 변화가 있기 때문에 업데이트함)
    _allRead();
    _read(i);
}


//  5. 삭제함수 / 실행 조건 > (누구를) 1. 삭제 버튼 클릭할 때
function _delete(i){
    if(!(_pwConfirm(i))){
        return;
    }
    //  배열 내 특정 인덱스 삭제
    boardList.splice(i,1);
    //  화면 새로고침(재출력 > 데이터의 변화가 있기 때문에 업데이트함)
    _allRead();
    document.querySelector(`#viewPage`).innerHTML = ``;
}

//  6. 패스워드 체크 함수
function _pwConfirm(i){
    //  - 패스워드 검증
    //  1. 검증받을 패스워드를 입력 받는다.
    let confirmPw = prompt(` 비밀번호 : `);
    //  2. 해당 인덱스의 비밀번호와 입력받은 비밀번호가 다르면 함수를 중간에 종료
    if(confirmPw != boardList[i].split(`,`)[2]){
        alert(`패스워드가 다릅니다`);
        return false; // 패스워드 일치 실패, 함수 종료, 이하 코드는 실행이 안됨.
    }
    return true;    // 패스워드 일치 뜻
}
