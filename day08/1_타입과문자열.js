/*
    0.  키워드  :   JS 회사에서 미리 만든 의미 / 기능이 담긴 단어    

    1.  세미콜론 [;]
        >   컴퓨터에게 문장 마침 알림 역할
        >   한 줄에 코드 문장이 1개 일때는 생략 가능
        >   한 줄에 코드 문장이 2개 이상일 때는 코드 문장마다 ; 마침 표시

    2.  데이터 타입
        >   typeof Data     :   data 타입 / 형싣을 출력
        -   HTML 언어는 문자열
    
    3.  문자열 처리
        1)  " ", ' ', ` `
            >   백틱 문자열 템플릿
            >   ` 문자열${JS코드} 문자열${} 문자열${} 문자열 `
        2)  변수 호출이나 연산은 문자열 처리 X

    4.  문자열은 배열과 같다.
*/
//  1.
console.log('사과');
console.log('바나나'); console.log('포도');

//  2.
console.log(typeof '사과');      //  string   :   문자열
console.log(typeof 10);          //  number  :   숫자
console.log(typeof true);       //  boolean :   논리
console.log(typeof  [1,2]);     //  object  :   객체(array 포함)

//  3.
console.log('유재석');          //  문자
console.log('35000');           //  문자
//console.log('유재석35000")      //  불가능 '로 열고 "로 닫기
console.log('유재석"30"');
console.log("유재석'30'");
console.log(`유재석"30"`);

//  4.
let age = 40;
console.log('유재석' + '강호동');           // 문자열 + 문자열  :   연결 연산자     >   유재석강호동
console.log('유재석'+30);                   //  문자열 + 숫자   :   연결 연산자     >   유재석30
console.log('유재석'+age);                 //  문자열 + 변수   :   연결 연산자     >   유재석40
console.log(`${'유재석'}${'강호동'}`);      //  ${data}${data}
console.log(`${'유재석'}${30}`)             //  ${data}${data}
console.log(`유재석${age}`)                //  `문자열${JS코드}문자열${JS코드}`

//  4-2.
let man0 = '유재석';
let man1 = '강호동';

let ageHTML0 = "<ol> <li>" + man0 + "</li> <li>" + man1 + " </li> </ol>";
document.write(ageHTML0);

let ageHTML1 = `<ol> <li> ${man0} </li> <li> ${man1} </li> </ol>`;
document.write(ageHTML1);

//  5.
let carNum = '250어7142';
console.log(carNum[1]);                     //  5
console.log(carNum.length);                 //  8
let newCarNum = carNum.split('어');         //  특정 문자 기준으로 분리해서 배열 반환
console.log(newCarNum);


//  예1 >   2명의 사원 이름을 입력 받아 HTML(table) 형식 출력('${}' 사용)
//  팁  >   HTML에서 표현하고자 하는 마크업을 만들어서 [ctrl + C ctrl + V]
let bMan0 = prompt('사원 이름 : ');
    console.log(bMan0);
let bMan1 = prompt('사원 이름 : ');
    console.log(bMan1);
let bName = `<table>
                <tr>
                    <th>
                        번호
                    </th>
                    <th>
                        이름
                    </th>
                </tr> 
                <tr>
                    <td>
                        1
                    </td>
                    <td>
                        ${bMan0}
                    </td>
                </tr>
                <tr>
                    <td>
                        2
                    </td>
                    <td>
                        ${bMan1}
                    </td>
                </tr>
            </table>`;
    console.log(bName);

document.write(bName);
