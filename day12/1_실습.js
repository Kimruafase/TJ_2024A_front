/*
    실습 1 : 회원가입과 로그인 구현
        [요구사항] 
        1) 아이디와 비밀번호를 입력받아 회원가입 처리해주세요.
        2) 아이디와 비밀번호가 기존 데이터와 일치했을 때 로그인 성공아 아니면 실패

        [개발 순서도]

        (요구사항 분석)
            > 회원가입 : 저장 C
            > 로그인   : 기존 데이터와 비교 R, 논리
        
        (백엔드)
        1) 메모리 구성
            > 회원가입 성공하고 추후에 로그인 시 해당 데이터와 비교해야하기 때문에 필요
            > 여러 사람의 아이디와 비밀번호를 저장하는 저장소 필요
            let idList=[];
            let pwList=[];

        2) 기능 / 서비스 구성
            > 회원가입 처리 = 함수
            singup
            [로직 순서도]
                > 아이디 / 비밀번호 입력받는다.         -> 입력 장치 : html
                > 입력받은 데이터를 각 배열에 저장한다.
                > 안내 메세지
            > 로그인 처리 = 함수
            login
            [로직 순서도]
                > 아이디 / 비밀번호 입력 받는다.
                > 입력받은 데이터를 각 배열 내 존재하는지 비교한다.
                > 안내 메세지

        3) 로직 순서도 구성, 함수 구현

        (프론트엔드)
        1) 회원가입 화면
            > 아이디 input, 비밀번호 input, 회원가입 처리 button

        2) 로그인 화면
            > 아이디 input, 비밀번호 input, 회원가입 처리 button

        3) 각 페이지 꾸미기

        (백엔드 / 프론트엔드 연동)
        각 button에 JS함수 연동
*/

//  1. 메모리 구성
let idList=[];      
let pwList=[];

//  2. 함수 구성
function signup(){ console.log(`signup()`);
    //  2-1
    let signupId = document.querySelector(`#signupId`);
    let signupPw = document.querySelector(`#signupPw`);
    //  2-2
    let id = signupId.value; 
    let pw = signupPw.value;
    //  2-3 입력 받은 데이터를 각 배열에 저장
    idList.push(id); console.log(idList);
    pwList.push(pw); console.log(pwList);
    //  2-4 안내 메세지
    alert(`회원 가입 성공`);
}



function login(){
    //  2-1
    let loginId = document.querySelector(`#loginId`);
    let loginPw = document.querySelector(`#loginPw`);
    //  2-2
    let id = loginId.value;
    let pw = loginPw.value;
    //  2-3 (비교)
        //  2-3 1) 아이디가 기존 배열 내 존재하는지
    let index = idList.indexOf(id)
    if(index != -1){
        //  2-3 2) 아이디가 존재하면 패스워드 검증
        //  만약에 아이디가 위치한 인덱스와 패스워드가 위치한 인덱스가 같다면 로그인 성공
        if(pwList[index] == pw){
            alert(`로그인 성공`)
        }else{
            alert(`패스워드가 다릅니다.`)
        }
    }else{
        alert(`없는 아이디입니다.`)
    }
}