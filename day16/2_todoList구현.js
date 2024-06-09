let todoList = [
    {no : 1, todo : `식사`, switch : `O`},
    {no : 2, todo : `공부`, switch : `O`},
    {no : 3, todo : `여행`, switch : `O`}
]
let a = 3;
print();
function add(){
    todoInput = document.querySelector(`#todoInput`).value;
    todoAdd = {no : ++a, todo : `${todoInput}`, switch : `O`};
    todoList.push(todoAdd);
    console.log(todoList);   
    alert(` 리스트 저장 성공`);                                  // 입력이 잘 됐다면 메시지 출력
    print();   
}

function print(){
    let todoBox = document.querySelector(`#todoBox`);    
    let html = ``;  
    for(let i=0; i<todoList.length; i++){                   // 반복문은 입력받은 배열의 길이만큼 진행
        let s=todoList[i].todo;                    // s와 e에 입력받은 배열 todoList의 i번째 인덱스를 ","를 기점으로 둘로 나눠서 [0]번째 인덱스는 s에 저장하고 [1]번째 인덱스는 e에 저장
        let e=todoList[i].switch;                    // ex_ ABC를 입력 받았다면 todoList에는 'ABC,X' 가 저장되어 있고 s와 e에는 ","를 기점으로 둘로 나뉘어서 s에는 [0]인 ABC가, e에는 [1]인 X가 저장됨.
        if(e=='X'){                                         // 만약 todoList의 i번째 인덱스에서 "," 뒤의 값이 'O'라면 아래 코드 실행
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

function change(index){
    let e=todoList[index].switch;
        if(e=='O'){                                             // 만약 todoList의 i번째 인덱스에서 "," 뒤의 값이 'O'라면
        todoList[index].switch = "X"                                  // todoList의 i번째 인덱스에 "," 앞의 값에 ",X"를 연결하고 대입
        }else{                                                  // 만약 todoList의 i번째 인덱스에서 "," 뒤의 값이 'X'라면
        todoList[index].switch = "O"                         // todoList의 i번째 인덱스에 "," 앞의 값에 ",O"를 연결하고 대입
        }console.log(e); console.log(todoList);                                        // todoList의 i번째 인덱스의 "," 뒤의 값을 확인
        print();   
}
function remove(index){
    todoList.splice(index,1);                                      // 배열 내 특정 i번째 인덱스의 요소 삭제
    print();
}