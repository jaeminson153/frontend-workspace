// form 안에서 사용되면 자동적으로 submit event가 발생함.
// <input type="submit" value="login" />
// <button value="login">login</button>
// <input id="imgBtn" type="image" src="images/signin.gif">


let idNode = document.querySelector("#my_id");
let passNode = document.querySelector("#my_pass");

//document.log_f.onsubmit = function () {
document.log_f.onsubmit = () => {

    if (idNode.value == "") {
        alert("아이디를 입력하세요.");
        return false;
    }

    if (passNode.value == "") {
        alert("비밀번호를 입력하세요.");
        return false;
    }

    document.log_f.submit();

}

