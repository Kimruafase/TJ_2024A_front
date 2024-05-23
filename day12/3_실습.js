let todoList = ["밥먹기,X"];

function add(){
    todoInput = document.querySelector(`#todoInput`);
    console.log(todoInput);
    let todo = todoInput.value;    
    todoList.push(todo + `,O`);
    console.log(todoList);

    alert(` 리스트 저장 성공`);
    print();
}

function print(){
    let todoBox = document.querySelector(`#todoBox`);
    let html = ``;

        for(let i=0; i<todoList.length; i++){
            let s=todoList[i].split(",")[0]
            let e=todoList[i].split(",")[1]
            if(e=='O'){
                html +=`<div id="blackBox">
                        ${s}
            <button type="button" onclick="change(${i})"> 변경 </button>
            <button type="button" onclick="remove(${i})"> 삭제 </button></div>`
            
            }else{
                html +=`<div id="whiteBox">
                        ${s}
            <button type="button" onclick="change(${i})"> 변경 </button>
            <button type="button" onclick="remove(${i})"> 삭제 </button></div>`
            }
        }
    todoBox.innerHTML = html;
    
}
function remove(deleteIndex){

    //let deleteIndex = 0;

    //  1. 배열 내 특정 인덱스의 요소 삭제
    todoList.splice(deleteIndex, 1);
    //  2. 삭제가 되면 배열의 상태가 변경되므로 배열의 상태를 다시 출력 - 화면 업데이트
    print();
}
function change(i){ 
        let s=todoList[i].split(",")[0]
        let e=todoList[i].split(",")[1]
        if(e=='O'){

        todoList[i] = s + ",X"
        }else{
        todoList[i] = s + ",O"
        }

        print()
}