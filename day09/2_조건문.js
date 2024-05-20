//  > 문제 조건 : 입력 prompt 함수, 출력 console 함수 사용
//  > 문제
//      1)  3개의 점수를 각 입력받아 총점 계산 -> 90점 이상 '성공' 아니면 '실패'
//      2)  2개의 정수를 각 입력받아 더 큰 수를 출력
//      3)  3개의 정수를 각 입력받아 가장 큰 수를 출력
//      4)  3개의 정수를 각 입력받아 오름차순 or 내림차순하여 정렬해서 출력
//      5)  1개의 정수를 입력받아 90점 이상이면 'A등급', 80점 이상이면 'B등급', 
//          70점 이상이면 'C등급', 그 외는 '재시험' 출력
//      6)  아이디와 비밀번호를 입력 받아 아이디가 'admin' 이고 비밀번호가 '1234' 이면 '로그인 성공' 
//          아니면 '로그인 실패' 출력
//      7)  과일 배열을 선언하고 let fruitList = ['바나나' , '사과'];
//          하나의 과일명을 입력받아 fruitList 배열에 존재하면 '이미 존재하는 과일입니다' 출력
//          아니라면 배열에 입력받은 과일 저장 후 현재 배열 출력
//      8)  주민등록번호를 입력 받아서 성별이 남자면 색상 변수에 blue 를 
//          여자면 색상 변수에 red를 대입하고 색상 변수를 출력
//      9)  가위바위보 게임
//          조건 1 > 가위 : 0, 바위 : 1, 보 : 2
//          조건 2 > 플레이어 2명
//          실행조건 > 각 플레이어가 한번씩 (0~2) 중에 입력
//          출력조건 > 
//              플레이어 1 이겼을 경우 : '플레이어 1 승리' 출력
//              플레이어 2 이겼을 경우 : '플레이어 2 승리' 출력
//              비겼을 경우 : '무승부' 출력
//      10) 좌석 3개의 상태를 갖는 배열 선언하고 let sheetList ['O', 'X', 'O']
//          하나의 좌석 순서 번호를 입력받아 빈 좌석이면 '예약 성공' 출력
//          아니면 '예약 불가' 출력
//          빈 좌석 : 'X', 사용 중인 좌석 : 'O'

//  [교환 / swap]
//  >   변수들 간의 값 교환 (변수는 1개의 값만 저장한다.)
//  >   A = B , A를 B에 대입하면 기존의 A의 값은 사라짐.
//  >   [임시 변수 필요]
//  >   temp = A;           A = 7, B = 5, temp = 7
//      A = B;              A = 5, B = 5, temp = 7
//      B = temp;           A = 5, B = 7, temp = 7

//  문제 1
let score0 = Number(prompt(`점수 1 : `));
let score1 = Number(prompt(`점수 2 : `));
let score2 = Number(prompt(`점수 3 : `));

let Sum0 = score0 + score1 + score2;

if(Sum0 >= 90){console.log(`성공`)}
else{console.log(`실패`)};

//  문제 2
let int0 = Number(prompt('정수 1 : '));
let int1 = Number(prompt('정수 2 : '));

if(int0 > int1) {console.log(int0)}
else if(int0 = int1){console.log(int0); console.log(int1)}
else{console.log(int1)};

//  문제 3
let int2 = Number(prompt('정수 1 : '));
let int3 = Number(prompt('정수 2 : '));
let int4 = Number(prompt('정수 3 : '));

if(int2 > int3) {console.log(int2);}
else if(int3 > int4) {console.log(int3);}
else{console.log(int4);};

//  문제 4
let int5 = Number(prompt('정수 1 : '));
let int6 = Number(prompt('정수 2 : '));
let int7 = Number(prompt('정수 3 : '));

if(int5 > int6){
    let temp = int5;
    int5 = int6;
    int6 = temp;
};
if(int6 > int7){
    let temp = int6; 
    int6 = int7; 
    int7 = temp;
};
if(int7 > int5){
    let temp = int7; 
    int7 = int5; 
    int5 = temp;
};
console.log(`오름차순 : ${int5} -> ${int6} -> ${int7}`);

//  문제 5
let score3 = Number(prompt(`점수 1 : `));
if(score3 >= 90){console.log(`A등급`)}
else if(score3 >= 80){console.log(`B등급`)}
else if(score3 >= 70){console.log(`C등급`)}
else{console.log(`재시험`)};

//  문제 6
let id = prompt(`아이디 : `);
let pw = prompt(`비밀번호 : `);
if(id == `admin` && pw == 1234){console.log(`로그인 성공`);}
else{console.log(`로그인 실패`);};

// if (id == `admin`){
//     if(pw == 1234){console.log('로그인 성공')}
//     else{console.log(`로그인 실패`)}
// }else{console.log(`로그인 실패`)};

//  문제 7
let fruitList = ['바나나' , '사과'];
let fruit = prompt(`과일명 : `);
if(fruit == fruitList[0] || fruit == fruitList[1]) {console.log(`이미 존재하는 과일입니다.`)}
else{fruitList.push(fruit); console.log(fruitList);};

//  문제 8
let id0 = prompt(`주민번호 : `);
let Var = id0.substring(7, 8);
let color = '';
console.log(Var); 
if(Var==1 || Var==3){color = 'blue'}
else if(Var==2 || Var==4){color = 'red'}
console.log(color);
let html = `<h3 style='color : ${color} '> 주민등록번호 : ${id0} </h3>`
document.querySelector(`#result1`).innerHTML = html
console.log(html);

//  문제 9  (경우의 수 판단하기)
//  1) 승리(p0이 승리하려면) 2) 패배(p0이 패배하려면) 3) 무승부(p0이 무승부하려면)
//      p0 가위 p1 보                 그 외                  p0 가위 p1 가위
//      p0 바위 p1 가위               그 외                  p0 바위 p1 바위
//      p0 보   p1 바위               그 외                  p0 보   p1 보
let p0 = Number(prompt(`가위바위보 입력 1 (0[가위] 1[바위] 2[보]) : `));
let p1 = Number(prompt(`가위바위보 입력 2 (0[가위] 1[바위] 2[보]) : `));

//  풀이 1 : 경우의 수 조건문
if((p0==0 && p1==2) || (p0==1 && p1==0) || (p0==2 && p1==1)){
    console.log('p0 win')
}
else if((p0==0 && p1==0) || (p0==1 && p1==1) || (p0==2 && p1==2)){
    console.log('draw')
}
else{console.log('p1 win')};

//  풀이 2 : 경우의 수 패턴 식 만들기
let answer = p0 == p1 ? 'draw' : p0 == (p1+1)%3 ? 'p0 win' : `p1 win`;
console.log((p1+1)%3);
console.log(p0 == (p1+1)%3);
console.log(answer);

//  문제 10
let sheetList = ['O' , 'X' , 'O'];
let sheetNum = prompt('좌석1, 좌석2, 좌석3 : ')  //  1. 좌석 번호 입력받고 저장

// 2. 만약에 선택한 좌석번호에 'O' 이면
if(sheetList[sheetNum-1]=='O'){           // 3. 좌석 번호는 1, 2, 3 / 인덱스는 0, 1, 2
    console.log(`예약불가`)
}else if(sheetList[sheetNum-1]=='X'){
    console.log('예약성공'); sheetList[sheetNum-1] = 'O'
}
console.log(sheetList[1])
