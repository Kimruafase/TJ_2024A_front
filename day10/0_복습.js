/*  복습 예제 1 : 주차장 차량 검색대 
    조건 1 : let carArray = ['250어7142', '142가7415']; -> 차량 번호
    조건 2 : let locationArray = ['A1', 'B3'];          -> 주차 위치
    조건 3 : carArray, locationArray 인덱스가 같은 정보의 차량
    조건 4 : 차량 번호 입력 받아 내 차량 위치 찾기
        JS 문법
            >   prompt(),   console.log()
            >   변수란?
            >   배열 내 데이터 찾기
                -   indexOf(), includes()
            >   if(){}
*/
// let carArray = ['250어7142', '142가7415'];
// let locationArray = ['A1', 'B3'];
// let carNum = prompt(`차량 번호는? : `);         //  1. 차량 번호 입력 받아 변수에 저장 
// let carIndex = carArray.indexOf(carNum);       //  2. 입력받은 차량 번호의 배열 내 인덱스 찾기

// //  3. 논리 조건
// //      1) 만약 carIndex가 -1이면 주차 내역에 없다는 메세지 출력
// //      2) 아니면 차량번호의 위치 메세지 출력
// if(carIndex==-1){
//     console.log(`입력한 차량 번호는 주차 내역에 없습니다.`)
// }else{
//     let carLocation = locationArray[carIndex];
//     console.log(`입력한 차량 번호의 위치는 ${carLocation}입니다.`);
// };
// console.log(carIndex);
// console.log(locationArray[carIndex]);


/*  복습 예제 2 : 틱택토 / 삼목 게임 9칸 존재하고 연속된 3칸 만들면 승리
    설계  
    >   9칸 판이 필요, 9칸 배열 생성
    >   판넬의 상태 : B(Blank), O(p1), X(p2)
    >   승리 체크   
        (연속된 판넬이 3개의 모양이 같을 경우, B 제외)
        -   가로로 이기는 수        : [0]==[1]==[2] / [3]==[4]==[5] / [6]==[7]==[8]
        -   세로로 이기는 수        : [0]==[3]==[6] / [1]==[4]==[7] / [2]==[5]==[8]
        -   대각선으로 이기는 수    : [0]==[4]==[8] / [2]==[4]==[6] 
*/
//  1. 9칸 배열
let gamePane = [`B`, `B`,`B`, `B`,`B`, `B`,`B`, `B`,`B`];

//  2. 9칸 배열 출력
let html = `${gamePane[0]} ${gamePane[1]} ${gamePane[2]} <br/>
            ${gamePane[3]} ${gamePane[4]} ${gamePane[5]} <br/>
            ${gamePane[6]} ${gamePane[7]} ${gamePane[8]}
            `
//  3. 구성된 HTML 출력
document.querySelector('#gamePane').innerHTML = html;   

//  ------  [1. p1 입력 2. 승리 체크 3. p2 입력 4. 승리 체크] 이후 반복 (무승부까지)
if(gamePane[0]==gamePane[1] && gamePane[1]==gamePane[2]){}
if(gamePane[3]==gamePane[4] && gamePane[4]==gamePane[5]){}
if(gamePane[6]==gamePane[7] && gamePane[7]==gamePane[8]){}

if(gamePane[0]==gamePane[3] && gamePane[3]==gamePane[6]){}
if(gamePane[1]==gamePane[4] && gamePane[4]==gamePane[7]){}
if(gamePane[2]==gamePane[5] && gamePane[5]==gamePane[8]){}

if(gamePane[0]==gamePane[4] && gamePane[4]==gamePane[8]){}
if(gamePane[2]==gamePane[4] && gamePane[4]==gamePane[6]){}

if(gamePane.indexOf('B')==-1){}

for(let i=0; i<=2; i+=3){                                               // 가로 승리 조건
    if(gamePane[i]!='B' && gamePane[i+1]!='B' && gamePane[i+2]!='B'){   
    if(gamePane[i]==gamePane[i+1] && gamePane[i+1]==gamePane[i+2]){}
    }
}
for(let i=0; i<=2; i++){                                                // 세로 승리 조건
    if(gamePane[i]==gamePane[i+3] && gamePane[i+3]==gamePane[i+6]){}
}                                                                     
if(gamePane[0]==gamePane[4] && gamePane[4]==gamePane[8]){}              // 대각선 승리 조건
if(gamePane[2]==gamePane[4] && gamePane[4]==gamePane[6]){}

if(gamePane.indexOf('B')==-1){}                                         // 무승부