/*

    interval : 시간적인 간격에 따라 특정 로직 / 함수 반복 실행
        > setInterval(함수, 주기);
            > 함수 : 주기에 따라 실행할 함수명
            > 주기 : 1/1000초(밀리초), 1000 -> 1초, 10000 -> 10초(마다)
                > 주기마다 특정 함수 실행    

        > clearInterval(인터벌 반환 값의 변수); 
            > 인터벌 종료


*/
let value = 0;
function 증가(){
    value++;
    document.querySelector(`#box1`).innerHTML=value;
}
//  1.
setInterval(증가, 1000);

function watch(){
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    document.querySelector(`#box2`).innerHTML = `${hour} : ${min} : ${sec}`
}
//  2. 1초마다 watch 함수를 호출
setInterval(watch, 1000);

//  3.
//  현재 타이머의 초
let time = 0;  
//  함수 여러곳에 사용하기 위해 전역변수 timerId에 저장 
let timerId; 

//  타이머 작동 로직 함수
function timer(){   
    time++;
    document.querySelector(`#box3`).innerHTML=time;
}


//  타이머 시작
function timerStart(){
    //  1) 선언적 함수
    timerId = setInterval(timer, 1000);

    //  2) 익명 함수
    // timerId = setInterval(
    //     function(){
    //         time++; document.querySelector(`#box3`).innerHTML=time;
    //     }, 1000)

    //  3) 화살표 함수
    // timerId = setInterval(() => {
    //     time++; document.querySelector(`#box3`).innerHTML = time;
    // }, 1000);

}
//  타이머 중지
function timerStop(){
    // - clearInterval(인터벌 변수명)
    clearInterval(timerId);
}

