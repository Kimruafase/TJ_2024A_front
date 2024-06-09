/*

    1. 제품 : {제품명 : , 가격 : };
    2. 주문 : {주문헙호 : , 주문시간 : , 제품번호 : };
*/

let productList =[
    {제품번호 : 1, 제품명 : `코카콜라`, 가격 : 1000},
    {제품번호 : 2, 제품명 : `사이다`, 가격 : 2000},
    {제품번호 : 3, 제품명 : `아메리카노`, 가격 : 3000}
];
let orderList = [
    {주문번호 : 1, 주문시간 : `2024-05-31 09:51`, 제품번호 : 2},
    {주문번호 : 2, 주문시간 : `2024-05-31 10:51`, 제품번호 : 2},
    {주문번호 : 3, 주문시간 : `2024-05-31 11:51`, 제품번호 : 3}
];
print();

//  1. 제품 등록
function productReg(){

    //  -------------------------- localStorage 호출 ------------------------   //
    dataUpdate(2);

    //  1. 입력받은 값을 가져온다.
    let productName = document.querySelector(`#productName`).value;
    let priceValue = document.querySelector(`#priceValue`).value;

    //  2. 데이터를 가공(객체화)
    let a = productList.length != 0 ? productList[productList.length-1].제품번호 + 1 : 1;  // 현재 제품 목록의 마지막 제품 번호의 +1, 길이는 1부터 / 인덱스는 0부터
    let product = {제품번호 : a, 제품명 : productName, 가격 : priceValue};
    
    //  3. [유효성 검사]
    //  4. 객체 저장
    productList.push(product);
    console.log(productList);

    //  -------------------------- localStorage 저장 ------------------------   //
    dataUpdate(1);

    alert(`제품 등록 성공`)
    print();
}

//  2. 제품 출력
function print(){

    //  -------------------------- localStorage 호출 ------------------------   //
    dataUpdate(2);
    dataUpdate(4);

    //  1. 어디에
    let productTable = document.querySelector(`#productPrint`);
    let orderTable = document.querySelector('#orderTable');

    //  2. 무엇을
    let html = ``;
    for(i=0; i<productList.length; i++){
        html += `<tr>
                    <td>
                        ${productList[i].제품번호}
                    </td>
                    <td>
                        ${productList[i].제품명}
                    </td>
                    <td>
                        ${productList[i].가격}
                    </td>
                    <td> 
                        <button onclick="orderReg(${productList[i].제품번호})"> 주문 </button>
                    </td>
                </tr>`
    }

    let html1 = ``;
    for(i=0; i<orderList.length; i++){
        html1 += `<tr>
                        <td>
                            ${orderList[i].주문번호}
                        </td>
                        <td>
                            ${productSearch(orderList[i].제품번호).제품명}
                        </td>
                        <td>
                            ${productSearch(orderList[i].제품번호).가격.toLocaleString()}
                        </td>
                        <td>
                            ${orderList[i].주문시간}
                        </td>
                    </tr>`;
    }

    //  3. 대입
    productTable.innerHTML = html;
    orderTable.innerHTML = html1;
}
//  3. 주문 > 주문 버튼을 클릭했을 때 발동
function orderReg(index){
    console.log(`orderReg()` + index);

    //  -------------------------- localStorage 호출 ------------------------   //
    dataUpdate(4);

    //  1. 데이터 가공(객체화 : 저장을 어떤 형식으로 할 것인지)
    let a = orderList.length != 0 ? orderList[orderList.length-1].주문번호+1 : 1;  //  마지막 주문번호에 +1, 마지막 주문번호 = 마지막 인덱스의 주문번호 = 배열.length-1
    let date = new Date();
    let orderDate = `${date.getFullYear()}-${dateNumChange(date.getMonth()+1)}-${dateNumChange(date.getDate())} ${dateNumChange(date.getHours())}:${dateNumChange(date.getMinutes())}`
    let order = {주문번호 : a, 주문시간 : orderDate, 제품번호 : index};

    //  2. 유효성검사

    //  3. 저장
    orderList.push(order);
    console.log(orderList);

    //  -------------------------- localStorage 저장 ------------------------   //
    dataUpdate(3);
    
    print();
}

//  * 날짜 / 숫자 2자리 변환 함수
function dateNumChange(value){
    
    //  만약에 월 / 일 / 시 / 분 (value)가 10보다 작으면 앞에 `0` 연결하기
    if(value < 10){ value = `0${value}`;};
    
    return value;
}

//  * 제품 번호를 매개변수로 전달 받고 해당 제품번호(매개변수)의 제품 객체(정보 ex_ 제품명, 가격)을 반환해주는 함수
function productSearch(num){
    //  1. 매개변수로 찾을 제품의 제품 번호를 받는다.
    //  2. 해당 제품번호를 찾는다. 제품 목록에서 하나씩 순회하면서 동일한 제품번호 찾기
    for(let i = 0; i<productList.length; i++){
        // 3. 만약에 제품번호(매개변수)와 i번째 제품의 번호가 같으면
        if(num == productList[i].제품번호){
            let product = productList[i];   // i번째 객체 호출
            return product;                 // 찾았으면 함수 종료하고 찾은 객체를 (해당 함수를 호출했던 곳으로)반환
        }

    }
}

//  4. 자동 주문 > 실행 조건 : 자동 주문을 클릭했을 때
function autoOrder(){
    console.log(`autoOrder()`);
    //  * 특정 주기마다 함수를 실행해주는 라이브러리 함수 
    //  *setInterVal 
    setInterval(()=>{
        let a = parseInt(Math.random()*(productList[productList.length-1].제품번호)+1);
        orderReg(a)
    }, 3000);
}

//  5. localStorage() > JS 메모리가 아닌 브라우저(크롬) 프로그램 메모리 저장
//                    > setItem(key, value) / getItem(key)
//  1. productReg() 2. orderReg() 3. print() 
//  1. setItem, getItem 2. setItem, getItem 3. getItem
function dataUpdate(x){
    //  ------------------- productList -----------------------------   //
    if(x==1){
        //  1) 저장
        localStorage.setItem(`productList`, JSON.stringify(productList));
    }else if(x==2){
        //  2) 호출
        productList = JSON.parse(localStorage.getItem(`productList`));
        if(productList==null){productList=[]};
    //  -------------------- orderList ------------------------------   //
    }else if(x==3){
        //  1) 저장
        localStorage.setItem(`orderList`, JSON.stringify(orderList));
    }else if(x==4){
        //  2) 호출
        orderList = JSON.parse(localStorage.getItem(`orderList`));
        if(orderList==null){orderList=[]};
    }else{
        alert(`error`)
    }
}
    
    

