//Destructuring (구조 분해 할당)
// : Destructuring(디스트럭쳐링)은 structuring(구조화)된 배열 또는 객체를 Destructuring(비구조화)
//   하여 개별적으로 변수에 할당하는 개념이다.

//1. 배열 Destructuring 
let level = [5, 10];
let a, b;
a = level[0];
b = level[1];
console.log(`a=${a}, b=${b}`);

let c, d;
[c, d] = [15, 110];
console.log(`c=${c}, d=${d}`);

let k, p, next;
[k, p, next] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(`k=${k}, p=${p}, next=${next} `);

[k, p, ...next] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(`k=${k}, p=${p}, next=${next} `);
console.log(next);

[k, _, p, _, ...next] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(`k=${k}, p=${p}, next=${next} `);
console.log(next);

let u, t, w;
[u, t, w] = [1, 2];
console.log(`u=${u}, t=${t}, w=${w}`);

[u, t = 4, w = 3] = [1, 2];
console.log(`u=${u}, t=${t}, w=${w}`);
console.log("=================================================");

/////////////////////////////////////////////////////////
//2. 객체 Destructuring 
const customer = { fullname: '고수', job: '연기자' };
let fullname = customer.fullname;
let job = customer.job;
console.log(`fullname=${fullname}, job=${job}`);

let { fullname: fn, job: jb } = customer;
console.log(fn, jb);
console.log(`fullname=${fn}, job=${jb}`);

let { job: jb2, fullname: fn2 } = customer;
console.log(fn2, jb2);
console.log(`fullname=${fn2}, job=${jb2}`);

let { fullname: fn3, job: jb3, loc = '서울' } = customer;
console.log(`fullname=${fn3}, job=${jb3}, loc=${loc}`);

// let { s, r } = { s: 1, r: 2 };
// console.log(s, r);

let { r, s } = { s: 1, r: 2 };
console.log(r, s);

//////////////////////////////////////////////////////////////////
//completed의 값이 true인 데이터만 검색하라.
let habits = [
    { id: 1, content: "수영", completed: false },
    { id: 2, content: "걷기", completed: true },
    { id: 3, content: "명상", completed: true },
    { id: 4, content: "독서", completed: false },
];

let listHabit = [];
for (let i = 0; i < habits.length; i++) {
    if (habits[i].completed)
        listHabit.push(habits[i]);
}

console.log(listHabit);
/////////////////////////////////////////////////////////////////
let completedHabit = habits.filter(element => element.completed);
console.log(completedHabit);


let completedHabit2 = habits.filter(element => element.completed);
console.log(completedHabit2);

/////////////////////////////////////////////////////////////
//member변수에서 데이터를 추출하여 '고수 고객님은 서울에 거주합니다.' 라고 출력하세요.

let member = {
    hname: "고수",
    address: {
        zipCode: "526-143",
        city: "서울",
    },
};

//let { hname, address } = member;
//console.log(`${hname} 고객님은 ${address.city}에 거주합니다.`);

let { hname, address: { zipCode, city } } = member;
console.log(`${hname} 고객님은 ${city}에 거주합니다.`);


