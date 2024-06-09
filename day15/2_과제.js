let movieList =[
    {번호 : 1, 지역 : `인천`, 지점 : `부평역사점`, 영화 : `범죄도시4`, 날짜 : `2024-05-28`, 관 :`6관`, 시간 : `13:20` }
];

let num = 1;

function _create(){
    let region = document.querySelector(`#regionSelect`).value;
    let branch = document.querySelector(`#branchSelect`).value;
    let movie = document.querySelector(`#movieSelect`).value;
    let theater = document.querySelector(`#theaterSelect`).value;
    let date1 = new Date();
    let date2 = new Date();
    let currentYear = date1.getFullYear();
    let currentMonth = date1.getMonth()+1 < 10 ? "0"+(date1.getMonth()+1) : (date1.getMonth()+1);
    let currentDay = date1.getDate() < 10 ? "0"+(date1.getDate()) : date1.getDate();
    date1 = `${currentYear}-${currentMonth}-${currentDay}`;
    let currenthour = date2.getHours();
    let currentminute = date2.getMinutes();
    date2 = `${currenthour}:${currentminute}`

    // * "," 구분이 아닌 객체형식으로 만들자.
    let list = {번호 : ++num, 지역 : region, 지점 : branch, 영화 : movie, 날짜 : date1, 관 : theater, 시간 : date2};

    movieList.push(list);
    alert(` 등록 성공 `);
    _allRead();
}

let 카테고리목록 =[
    {cno : 1, cname : `삼성전자`},
    {cno : 2, cname : `LG전자`}
];
let 게시물목록 = [
    {bno : 1, btitle : `올랐다.`, bcontent : `좋아요`, bpassword : `1234`, bdate : `2024-05-28`, cno : 1},
    {bno : 2, btitle : `내렸다.`, bcontent : `싫어요`, bpassword : `4567`, bdate : `2024-05-27`, cno : 1}
];
let 댓글목록 = [
    {rno : 1, rcontent : `좋겠네`, rdate : `2024-05-28`, bno : 1},
    {rno : 2, rcontent : `싫겠네`, rdate : `2024-05-28`, bno : 2},
    {rno : 3, rcontent : `하하`, rdate : `2024-05-29`, bno : 2}
];

//  1. 1번 게시물의 댓글 출력해보기
let clickBno = 1;
for(let i=0; i<댓글목록.length; i++){
    //  조건 : 1번 게시물만
    if(댓글목록[i].bno == clickBno){
        console.log(댓글목록[i]);
    }
}

//  2. 삼성전자의 게시물과 댓글 출력해보기
let clickCno = 1;
for(let i = 0; i < 게시물목록.length; i++){ // 게시물 목록 모두 순회
    //  조건 : clickCno와 같은 경우만 출력
    if(게시물목록[i].cno == clickCno){
        console.log(게시물목록[i]);
        console.log(`-----------------------`);

        for(let j = 0; j < 댓글목록.length; j++){
            //  조건2 : 위에 있는 i번째 게시물 번호와 댓글에 있는 게시물 번호가 같으면
            if(게시물목록[i].bno == 댓글목록[j].bno){
                console.log(댓글목록[j]);
            }
        }
        console.log(`-----------------------`);
    }
}