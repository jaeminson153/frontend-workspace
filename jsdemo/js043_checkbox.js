let chkOpt1 = document.querySelector("#opt1");
let chkOpt2 = document.querySelector("#opt2");
let chkOpt3 = document.querySelector("#opt3");
let basicPrice = document.querySelector("#total");
let opt1 = 0;
let opt2 = 0;
let opt3 = 0;
let init = 50;
let total = 0;

chkOpt1.addEventListener('change', function () {
    if (chkOpt1.checked) {
        opt1 = 250000;
    } else {
        opt1 = 0;
    }
    total = opt1 + opt2 + opt3 + init;
    basicPrice.value = total;
});

chkOpt2.addEventListener('change', function () {
    if (chkOpt2.checked) {
        opt2 = 250000;
    } else {
        opt2 = 0;
    }
    total = opt1 + opt2 + opt3 + init;
    basicPrice.value = total;
});

chkOpt3.addEventListener('change', function () {
    if (chkOpt3.checked) {
        opt3 = 440000;
    } else {
        opt3 = 0;
    }
    total = opt1 + opt2 + opt3 + init;
    basicPrice.value = total;
});