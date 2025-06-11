document.addEventListener("DOMContentLoaded", function () {
    const options = [
        { id: 'opt1', price: 250000 },
        { id: 'opt2', price: 250000 },
        { id: 'opt3', price: 440000 }
    ];

    const basicPrice = document.querySelector("#total");
    const init = 50;

    function updateTotal() {
        let total = init;

        options.forEach(opt => {
            const checkbox = document.querySelector(`#${opt.id}`);
            if (checkbox && checkbox.checked) {
                total += opt.price;
            }
        });

        if (basicPrice) {
            basicPrice.value = total.toLocaleString(); // 보기 좋게 쉼표 추가
        }
    }

    options.forEach(opt => {
        const checkbox = document.querySelector(`#${opt.id}`);
        if (checkbox) {
            checkbox.addEventListener('change', updateTotal);
        }
    });

    updateTotal(); // 초기값 설정
});