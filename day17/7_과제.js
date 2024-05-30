let productList = [];
let orderList = [];

let a = 0;
let time = 0;
let timerId;
print();

function reg(){
    let product = document.querySelector(`#product`).value;
    let price = document.querySelector(`#price`).value;
    let price0 = price*1
    let price1 = price0.toLocaleString();
    let productReg = {제품명 : `${product}`, 가격 : `${price1}`};

    productList = JSON.parse(localStorage.getItem(`productList`));
    if(productList==null){productList=[];};
    productList.push(productReg);

    console.log(productList);

    localStorage.setItem(`productList`, JSON.stringify(productList));
}
function _order(){
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let date1 = date.getDate();
    let hour = date.getHours();
    let min = date.getMinutes();
    productList = JSON.parse(localStorage.getItem(`productList`));
    timerId = setInterval(() => {
        time++; 
        let random = parseInt(Math.random()*productList.length);
        let orderReg = {주문번호 : ++a, 제품명 : `${productList[random].제품명}`, 가격 : `${productList[random].가격}`, 주문시간 : `${year}-${month}-${date1} ${hour}:${min}`};
        orderList = JSON.parse(localStorage.getItem(`orderList`));
        if(orderList==null){orderList=[];};
        orderList.push(orderReg);
        console.log(orderReg);
        localStorage.setItem(`orderList`, JSON.stringify(orderList));
        print();
        }, 3000);
}
function print(){
    let table = document.querySelector(`#table`);
    orderList = JSON.parse(localStorage.getItem(`orderList`));
    productList = JSON.parse(localStorage.getItem(`productList`));
    timerId = setInterval(() => {
    let html =``;
    for(i=0; i<orderList.length; i++){
        html +=`<tr>
                    <td>
                        ${orderList[i].주문번호}
                    </td>
                    <td>
                        ${orderList[i].제품명}
                    </td>
                    <td>
                        ${orderList[i].가격}
                    </td>
                    <td>
                        ${orderList[i].주문시간}
                    </td>
                </tr>`;
    }
    table.innerHTML = html;
    }, 3000);
}