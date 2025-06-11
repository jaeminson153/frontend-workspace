let hNode = document.getElementById("selector");
console.log(hNode);
console.log(typeof hNode);

let hClass = document.getElementsByClassName("choice");
console.log(hClass);
console.log(typeof hClass);
console.log(hClass.length);

let pNode = document.getElementsByTagName("p");
console.log(pNode);
console.log(typeof pNode);
console.log(pNode.length);
console.log('=========================1');
console.log(pNode[0]);  //p
console.log(pNode.item(0));
console.log(pNode[0].innerText);
console.log(pNode[1].innerText);
console.log(pNode[0].textContent);
console.log(pNode[1].textContent);
pNode[0].style.backgroundColor = "blue";
/////////////////////////////////////////////////////
console.log('=========================2');
let divNode = document.getElementsByTagName('div')[0];
console.log(divNode);
console.log(divNode.innerText); // content1  content3
console.log(divNode.textContent); // content1 content2 content3 content4
console.log(divNode.innerHTML); //
//  <p style="background-color: blue;">content1</p>
//   <p style="display: none">content2</p>
//   <p>content3</p>
//   <p style="display: none">content4</p>
console.log('=========================3');
//////////////////////////////////////

/////////////////////////////////////////////////////
let hId = document.querySelector("#selector");
console.log(hId);

let hData = document.querySelector(".choice");
console.log(hData);

let pList = document.querySelector("p");
console.log(pList);

let pList2 = document.querySelectorAll("p");
console.log(pList2);

function process() {
    let fname = document.frm.fname;
    console.log(fname, typeof fname);
    console.log(fname.value);
    console.log(fname.defaultValue);
    return false;
}

