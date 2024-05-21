//  1.  사용자가 입력한 번호 목록 / 배열
let inputNumberList = [];
//  2.  자동 생성된 번호 목록 / 배열
let randomNumberList = [];

//  3.  6개의 수를 입력 받아 inputNumberList에 저장
//      >   조건 : 1 ~ 45 사이의 숫자만 가능, 중복 제외
for(let i=1; i<=6; i++){
    let inputNumber = Number(prompt(` ${i}번째 숫자 입력 `));   //  3-1. 입력받고 저장.
    //  Number(데이터) : 숫자타입 변환 함수, 만일 문자이면 NaN, 공백은 0
    //  isNaN(데이터)  : 숫자가 아니면 true, 숫자이면 false
    //  만약에 입력된 번호가 1보다 작거나 45보다 크거나 숫자가 아니라면 취소
    if(inputNumber < 1 || inputNumber > 45 || isNaN(inputNumber)){  
        alert(`선택할 수 없는 번호입니다.`)
        i--;
        continue;
    }
    //  만약에 입력된 번호가 이미 배열에 존재한다면 취소
    if(inputNumberList.indexOf(inputNumber)!= -1){
        alert(`이미 선택한 번호입니다.`)
        i--;
        continue;
    }
    inputNumberList.push(inputNumber);                         //  3-2. 입력받은 데이터를 배열에 저장.
}

//  4.  6개의 수를 난수 / 임의로 생성해서 selectNumberList에 저장
//      >   조건 : 1 ~ 45 사이의 숫자만 가능, 중복 제외
for(let i=1; i<=6; i++){

    //  1)  난수 생성
    //  >   Math.random()*난수 범위 개수 + 시작 번호;     //  계산 공식
    // let randomNumber = Math.random();                //  0부터 1 미만의 실수 생성
    // let randomNumber = Math.random()+1;              //  1부터 2 미만의 실수 생성
    // let randomNumber = Math.random()*45+1;           //  0부터 45 미만의 실수 생성 -> +1 1부터 46 미만의 실수 생성
    let randomNumber = parseInt(Math.random()*45+1);    //  0부터 45 미만의 실수 생성 -> +1 1부터 46 미만의 실수 생성

    if(randomNumberList.indexOf(randomNumber) > 0){
        i--;
        continue;
    }
                 
    //  2)  생성된 난수를 배열에 저장
    randomNumberList.push(randomNumber);

}

//  5.  두 배열의 동일한 숫자가 몇 개인지 체크
let equalNumber = 0;
//  0번 인덱스부터 마지막 인덱스까지
for(let i = 0; i<=inputNumberList.length-1; i++){
    //  i번째 입력 번호 값이 추첨 번호 목록에 존재하면
    if(randomNumberList.indexOf(inputNumberList[i]) != -1){
        equalNumber++;
    }
}

//  6.  HTML 출력
document.querySelector(`#inputNumberList`).innerHTML = inputNumberList;
document.querySelector(`#randomNumberList`).innerHTML = randomNumberList;
document.querySelector(`#equalNumber`).innerHTML = equalNumber;