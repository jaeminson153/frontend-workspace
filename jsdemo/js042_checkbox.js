// 약관 동의
document.frm.onsubmit = () => {
    let admin = document.frm.admin;
    if (!admin.checked) {
        alert("약관에 동의하세요.");
        return false;
    }
}

//전체선택
document.frm.allCheck.onclick = function () {
    //let checkgroup = document.querySelectorAll(".checkgroup");
    //console.log(this);
    // document.frm.subject1.checked = this.checked;
    // document.frm.subject2.checked = this.checked;
    // document.frm.subject3.checked = this.checked;

    ///////////////////  forEach()
    // let checkgroup = document.querySelectorAll(".checkgroup");
    // let myThis = this;
    // checkgroup.forEach(a => {
    //     a.checked = myThis.checked;
    // });

    ////////////////////// map()
    let checkgroup = document.querySelectorAll(".checkgroup");
    let myThis = this;
    // checkgroup 은 nodelist 이므로 map 을 사용할 수 없다.
    //Array.form()을 이용해서 NodeList를 Array로 생성함다.
    //let myArray = Array.from(checkgroup);
    //myArray.map(a => a.checked = myThis.checked);
    //////////////////////////////////
    let iArray = [...checkgroup];
    iArray.map(a => a.checked = myThis.checked);
    //////////////////////////////////////////////////////////


}
