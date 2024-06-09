let list = [
    {no : 1, idList : `asd`, pwList : `1234`},
    {no : 2, idList : `fgh`, pwList : `5678`},
    {no : 3, idList : `jkl`, pwList : `9012`}
];
let a = 3;
function signup(){
    let signupId = document.querySelector(`#signupId`).value;
    let signupPw = document.querySelector(`#signupPw`).value;
    let listAdd = {no : ++a, idList : `${signupId}`, pwList : `${signupPw}`};
    list.push(listAdd);
    console.log(list);
    alert(`회원가입 성공`);
}

function login(){
    let loginId = document.querySelector(`#loginId`).value;
    let loginPw = document.querySelector(`#loginPw`).value;
    for(i=0;i<list.length; i++){
        if(loginId==list[i].idList){
            if(loginPw==list[i].pwList){
                alert('로그인 성공'); return;
            }else{
                alert(`패스워드가 다릅니다.`); return;
            }
        }
    }
    alert(`없는 아이디입니다.`);
}
