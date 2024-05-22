
//  1. 함수 선언
// function reg(){}

//  2. (클릭) 이벤트 함수 호출 확인
// function reg(){
//     console.log(`reg()`);
// }

//  3. 로직(함수 안에서 처리할 코드) 작성
const nameList =[];
function reg(){
    console.log(`reg()`);

    //  1) [입력] html input에 입력된 값을 가져온다.
    //  html <input/> 을 JS의 객체(코드)로 반환한다.
    let input = document.querySelector(`#name`);
    console.log(input);
    //  .value 속성의 입력된 값을 반환한다.
    let name = input.value;
    console.log(name);
    //  -- let name = document.querySelector(`#name`).value;

    //  2) [저장] 입력받은 값을 배열에 저장한다.   * 배열 내 데이터는 전역

    //  -------------------------   유효성 검사    ----------------------  //
    if(nameList.indexOf(name) != -1){alert(` 이미 등록된 이름입니다. `); return ;};
    if(name.length != 3){alert(` 회원명은 3글자만 가능합니다.`); return ;};
    if(!isNaN(name[0]) || !isNaN(name[1]) || !isNaN(name[2])){alert(` 회원명에 숫자는 불가능합니다.`); return ;};
    console.log(nameList);
    nameList.push(name);
    out();
    //  * input 초기화
    input.value=``;
    

    
}

function del(){
    console.log(`del()`);

    //  1) [입력]
    let name = document.querySelector(`#name`).value;
    console.log(name);
    //  2) [처리]
    let deleteIndex = nameList.indexOf(`name`);
    console.log(deleteIndex);
    if(nameList.indexOf(name)==-1){alert(` 없는 회원입니다. `)}
    else{nameList.splice(deleteIndex, 1);}
    console.log(nameList);
    out();
}
function out(){
    //  3) [출력] 배열 내 데이터를 html table에 출력한다.
    //  >   [어디에]   
    let nameTable = document.querySelector(`#nameTable`);
    //  >   [무엇을]
    let html = `
            <tr>
                <th>
                    번호
                </th>
                <th>
                    이름
                </th>
            </tr>
        `                                   //  제목
    for(let i=0; i<nameList.length; i++){       //  0부터 마지막 인덱스까지 1씩 증가 반복
        html += `                               
            <tr>
                <td>
                    ${i+1}
                </td>
                <td>
                    ${nameList[i]}
                </td>
            </tr>
        `                                       //  배열 내 i번째 회원명을 문자열 템플릿${} 을 이용한 HTML문자열에 대입                                      
        console.log(html);
    }
    //  >   [출력]

    nameTable.innerHTML = html;
}

/*
    과제 조건.
        [등록 시]
        1. 등록 시 중복 제외
        if(nameList.indexOf(name) != -1){
        alert(` 이미 등록된 이름입니다. `);
        }else{
        console.log(nameList);
        nameList.push(name);
        out();}

        2. 회원명은 3글자
        if(nameList.indexOf(name) != -1){
        alert(` 이미 등록된 이름입니다. `);
        }else if(name.length != 3){
        alert(` 회원명은 3글자만 가능합니다.`)
        }else{
        console.log(nameList);
        nameList.push(name);
        out();}

        3. 회원명 숫자 제외
        if(nameList.indexOf(name) != -1){
        alert(` 이미 등록된 이름입니다. `);
        }else if(name.length != 3){
        alert(` 회원명은 3글자만 가능합니다.`)
        }else if(!isNaN(name[0]) || !isNaN(name[1]) || !isNaN(name[2])){
        alert(` 회원명에 숫자는 불가능합니다.`)
        }else{
        console.log(nameList);
        nameList.push(name);
        out();}

        vs --------------------------------------

        if(nameList.indexOf(name) != -1){alert(` 이미 등록된 이름입니다. `); return ;};
        if(name.length != 3){alert(` 회원명은 3글자만 가능합니다.`); return ;};
        if(!isNaN(name[0]) || !isNaN(name[1]) || !isNaN(name[2])){alert(` 회원명에 숫자는 불가능합니다.`); return ;};
        console.log(nameList);
        nameList.push(name);
        out();

        [삭제 시]
        4. 동일한 회원명이 있을 때만 삭제하고 없으면 삭제 안 함.
        let deleteIndex = nameList.indexOf(`name`);
        if(deleteIndex != -1){nameList.splice(deleteIndex, 1);}
        else{alert(` 없는 회원입니다. `)}

*/