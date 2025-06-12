//호출한 객체가 없을 경우에는 기본적으로 window 객체이다.
console.log(this);

//////////////////////////////////////
let member = {
    name: '홍길동',
    show: function () {
        console.log(this);
    }
}
// 자신
member.show();
//////////////////////////////////////
let member2 = {
    name: '홍길순',
    show: () => {
        console.log(this);
    }
}
//window
member2.show();
//////////////////////////////////////
let member3 = {
    name: '홍길동',
    show() {
        console.log(this);
    }
}
// 자신
member3.show();
//////////////////////////////////////
function showThisName() {
    console.log(this);
}
//window
showThisName();
/////////////////////////////////////////
let showThisName2 = () => {
    console.log(this);
}
//window
showThisName2();
///////////////////////////////////////////
//이벤트에서 this 
let btn = document.querySelector('#btn');
// btn 자신
btn.addEventListener('click', function () {
    console.log(this);
}, false);

//window
btn.addEventListener('click', () => {
    console.log(this);
}, false);
///////////////////////////////////////////
const hong = { name: '홍길동' };
const jung = { name: '정해인' };

//call() : call()메서드는 모든 함수에서 사용할 수 있는 this 값을 특정값으로 지정할 수 있다.
console.log('call()=========================');
//일반함수 는 this로 사용됨.
showThisName.call(hong);
showThisName.call(jung);

//화살표함수  는 여전히 window임.
showThisName2.call(hong);

function update(birthYear, job) {
    this.birthYear = birthYear;
    this.job = job;
    console.log(this);
}

update(2019, 'IT');
//////////////////////////////////////////////
//update.call(this의 대상객체, argument, argument)
update.call(hong, 2000, '프로그래머');
update.call(jung, 2016, '디자이너');

////////////////////////////////////////////
//apply()
//1. apply() 는 함수 매겨변수를 처리하는 방법을 제외하면 call()과 같다.
//2. call() 은 일반적인 함수와 마찬가지로 매개변수로 직접 받지만 apply()은 매개변수를 배열로 받는다.
update.apply(hong, [2000, '프로그래머']);
update.apply(jung, [2016, '디자이너']);

///////////////////////////////////////////
// bind()
// 1. call()과 사용방법은 같으나 실행을 해야 한다.
let hongUPdate = update.bind(hong, 2000, '프로그램');
hongUPdate();
update.bind(hong, 2000, '프로그램')();  // 바로 실행하려 할때 : 바로사용할때는 call

let jungUPdate = update.bind(jung, 2016, '디자이너');
jungUPdate();
update.bind(jung, 2016, '디자이너')();  // 바로 실행하려 할때










