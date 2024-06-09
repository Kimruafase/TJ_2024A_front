let todoList = [];
let a = 0;
print();
function add(){
    todoInput = document.querySelector(`#todoInput`).value;
    todoAdd = {no : ++a, todo : `${todoInput}`, switch : `O`};
    todoList = JSON.parse(localStorage.getItem(`todoList`));
    if(todoList==null){todoList=[];};
    todoList.push(todoAdd);
    console.log(todoList);   
    localStorage.setItem(`todoList`, JSON.stringify(todoList));
    alert(` 리스트 저장 성공`);                                  // 입력이 잘 됐다면 메시지 출력
    print();   
}

function print(){
    let todoBox = document.querySelector(`#todoBox`);  
    todoList = JSON.parse(localStorage.getItem(`todoList`));
    if(todoList==null){return;};  
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
    let e = todoList[index].switch
    if(e==`O`){
    todoList[index].switch = "X"
    }else{
        todoList[index].switch = "O"
    }
    localStorage.setItem(`todoList`, JSON.stringify(todoList));
    print();
}
function remove(index){
    todoList.splice(index,1);              
    localStorage.setItem(`todoList`, JSON.stringify(todoList));                        // 배열 내 특정 i번째 인덱스의 요소 삭제
    print();           
}