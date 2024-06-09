/*

    localStorage 활용
    방문록 : 1) 방문내용 2) 작성일 

*/

let visitList = [];

function _reg(){
    let 내용 = document.querySelector(`#내용`).value;
    let date = new Date();
    let 작성일 = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;

    let visit = {내용 : `${내용}`, 작성일 : `${작성일}`};

    //  기존에 localStorage에 있는 데이터 가져오기
    console.log(localStorage.getItem(`visitList`)); // 없으면 null, 있으면 []
    visitList = JSON.parse(localStorage.getItem(`visitList`));
    console.log(visitList);
    //  만약에 기존에 localStorage가 없으면 빈 배열 대입
    if(visitList==null){visitList=[];};

    visitList.push(visit);

    // 새로운 데이터를 배열에 저장했으면 localStorage에 다시 저장.
    localStorage.setItem(`visitList`, JSON.stringify(visitList));

    console.log(visitList);
    _print();
}

_print();
function _print(){
    let 출력구역 = document.querySelector(`#출력구역`);

    //  기존에 localStorage에 있는 데이터 가져오기
    visitList = JSON.parse(localStorage.getItem(`visitList`));
    if(visitList==null){return;};


    let html = ``;
        for(i=0; i<visitList.length; i++){
            html += `<div> ${visitList[i].내용} / ${visitList[i].작성일} </div>`;
        }

    출력구역.innerHTML = html;
}