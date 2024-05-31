/*

인사정보 : hrList = [{"hrNum" : "사원코드", "name" : "이름", "birth" : "생년월일"}]
부서정보 : deptList = [{"drptNum" : "부서코드", "deptName" : "부서명", "contact" : "대표 연락처"}]
부서배정 : deptInfoList = [{"hrNum" : "사원코드", "drptNum" : "부서코드", "deptDay" : "부서 배정일", "rank" : "직책", "status" : "상태(T/F)"}]

*/

hrList = [{"hrNum" : "사원코드", "name" : "이름", "birth" : "생년월일"}];
deptList = [{"deptNum" : "부서코드", "deptName" : "부서명", "contact" : "대표 연락처"}];
deptInfoList = [{"hrNum" : "사원코드", "deptNum" : "부서코드", "deptDay" : "부서 배정일", "status" : "상태(T/F)"}];

let deptNum = 1;
let hrNum = 1;
function deptReg(){
    let deptName = document.querySelector(`#deptName`).value;
    let contact = document.querySelector(`#contact`).value;

    let dept = {"deptNum" : deptNum++, "deptName" : deptName, "contact" : contact};

    deptList.push(dept);
    console.log(deptList);
    deptInfoPrint();

}

function deptInfoReg(){
    let deptDay = document.querySelector(`#deptDay`).value;
    let deptNum = document.getElementById("deptNum").value;
    let hrNum = document.getElementById("hrNum").value;
    let status = document.getElementById("status").value;
    
    let deptInfo = {"hrNum" : hrNum, "deptNum" : deptNum, "deptDay" : deptDay, "status" : status};

    deptInfoList.push(deptInfo);
    console.log(deptInfoList);

    deptInfoPrint();
}
deptInfoPrint();
function deptInfoPrint(){
    let select1 = document.querySelector(`#select1`)
    let select2 = document.querySelector(`#select2`)

    let html01 = `<select class="form-select" id="hrNum">`;
    for(i=0;i<hrList.length; i++){
        html01 +=`<option value="${hrList[i].hrNum}">${hrList[i].name}</option>`;
    }
    html01 += `</select>`;

    let html02 = `<select class="form-select" id="deptNum">`;
    for(i=0; i<deptList.length; i++){
        html02 +=`<option value="${deptList[i].deptNum}">${deptList[i].deptName}</option>`;
        console.log(deptList[i]);
    }
    html02 += `</select>`;

    select1.innerHTML = html01;
    select2.innerHTML = html02;
}