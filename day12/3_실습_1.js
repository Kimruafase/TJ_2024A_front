let todoList = ["밥먹기,X"];

function add(){
    todoInput = document.querySelector(`#todoInput`);           // HTML의 id="todoInput"의 입력 받음
    let todo = todoInput.value;                                 // value값을 todo에 저장
    todoList.push(todo + `,X`);                                 // 저장받은 value값을 배열에 저장, `,X`도 같이 저장하는데 이유는 스위치 역할을 만들기 위함
    console.log(todoList);                                      // 배열이 잘 저장됐는 지 확인

    alert(` 리스트 저장 성공`);                                  // 입력이 잘 됐다면 메시지 출력
    print();                                                    // 출력 함수로 입력을 내보냄.
}

function print(){
    let todoBox = document.querySelector(`#todoBox`);           // 출력할 HTML의 div 부분의 id를 todoBox에 대입
    let html = ``;                                              // HTML을 연결시킬 변수 초기화

        for(let i=0; i<todoList.length; i++){                   // 반복문은 입력받은 배열의 길이만큼 진행
            let s=todoList[i].split(",")[0];                    // s와 e에 입력받은 배열 todoList의 i번째 인덱스를 ","를 기점으로 둘로 나눠서 [0]번째 인덱스는 s에 저장하고 [1]번째 인덱스는 e에 저장
            let e=todoList[i].split(",")[1];                    // ex_ ABC를 입력 받았다면 todoList에는 'ABC,X' 가 저장되어 있고 s와 e에는 ","를 기점으로 둘로 나뉘어서 s에는 [0]인 ABC가, e에는 [1]인 X가 저장됨.
            if(e=='O'){                                         // 만약 todoList의 i번째 인덱스에서 "," 뒤의 값이 'O'라면 아래 코드 실행
                html +=`<div id="blackBox">
                        <span>${s}</span>                       
            <button type="button" onclick="change(${i})"> 변경 </button>
            <button type="button" onclick="remove(${i})"> 삭제 </button></div>`
            }else{                                              // todoList의 i번째 인덱스가 'X'라면 아래 코드 실행
                html +=`<div id="whiteBox">
                        <span>${s}</span>
            <button type="button" onclick="change(${i})"> 변경 </button>
            <button type="button" onclick="remove(${i})"> 삭제 </button></div>`
            }
        } 
    todoBox.innerHTML = html;
    
}
function remove(i){
    todoList.splice(i, 1);                                      // 배열 내 특정 i번째 인덱스의 요소 삭제
    print();                                                    // 삭제가 되면 배열의 상태가 변경되므로 배열의 상태를 다시 출력(화면 업데이트)
}
function change(i){ 
        let s=todoList[i].split(",")[0]
        let e=todoList[i].split(",")[1]
        if(e=='O'){                                             // 만약 todoList의 i번째 인덱스에서 "," 뒤의 값이 'O'라면
        todoList[i] = s + ",X"                                  // todoList의 i번째 인덱스에 "," 앞의 값에 ",X"를 연결하고 대입
        }else{                                                  // 만약 todoList의 i번째 인덱스에서 "," 뒤의 값이 'X'라면
        todoList[i] = s + ",O"                                  // todoList의 i번째 인덱스에 "," 앞의 값에 ",O"를 연결하고 대입
        }console.log(e);                                        // todoList의 i번째 인덱스의 "," 뒤의 값을 확인
        print();                                                // 바뀐 todoList 배열의 i번째 인덱스값을 토대로 다시 출력(화면 업데이트)
}