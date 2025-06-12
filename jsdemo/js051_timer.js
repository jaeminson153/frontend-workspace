function display() {
    for (let i = 0; i < 5; i++) {
        console.log(`i=${i}`);
    }
}

console.log("start===================");
//1000이 1초
//setTimeout(실행함수, 시간);
setTimeout(display, 5000);      // 한번만 수행
//setInterval(display, 5000);   // 반복 수행됨.  clearInterval()


console.log("end=====================");