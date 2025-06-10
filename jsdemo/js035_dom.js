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

console.log(pNode[0]);  //p
console.log(pNode.item(0));
console.log(pNode[0].innerText);
console.log(pNode[1].innerText);
console.log(pNode[0].textContent);
console.log(pNode[1].textContent);
pNode[0].style.backgroundColor = "blue";
/////////////////////////////////////////////////////
let hId = document.querySelector("#selector");
console.log(hId);

let hData = document.querySelector(".choice");
console.log(hData);

let pList = document.querySelector("p");
console.log(pList);

let pList2 = document.querySelectorAll("p");
console.log(pList2);



