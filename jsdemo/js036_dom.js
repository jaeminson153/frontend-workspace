let myNode = document.querySelector('#p2');

//parentNode 부모
let ptNode = myNode.parentNode;
console.log(ptNode);
console.log(`${ptNode}`);
//////////////////////////////////////////
//previousSibling 
let prevNode = myNode.previousSibling;
console.log(`prevNode=${prevNode}`);

prevNode = prevNode.previousSibling;
console.log(prevNode);
console.log(`prevNode=${prevNode}`);
/////////////////////////////////////////////
//nextSibling 
let nextNode = myNode.nextSibling;
console.log(`nextNode=${nextNode}`);

nextNode = nextNode.nextSibling;
console.log(nextNode);
console.log(`nextNode=${nextNode}`);
console.log("==============================1:previousElementSibling");
//////////////////////////////////////////////////////
//previousElementSibling 
let prevEleNode = myNode.previousElementSibling;
console.log(`prevEleNode=${prevEleNode}, ${prevEleNode.innerText}`);
console.log(prevEleNode);
console.log("==============================2:nextElementSibling");
//////////////////////////////////////////////////////
//nextElementSibling
let nextEleNode = myNode.nextElementSibling;
console.log(`nextEleNode=${nextEleNode} , ${nextEleNode.innerText}`);
console.log(nextEleNode);
console.log("==============================3:childNodes");
///////////////////////////////////////////////
// childNodes
let divNode = document.querySelector('#wrap');
console.log(`divNode:${divNode}`);
console.log(divNode);

let divChildesNode = divNode.childNodes;
console.log(`divChildesNode=${divChildesNode}`);
console.log(divChildesNode);

console.log("==============================4:children");
/////////////////////////////////////////////
//children
let divChildren = divNode.children;
console.log(`divChildren=${divChildren}`);
console.log(divChildren);
console.log(divChildren[0]);
console.log(divChildren.item(0));
console.log(divChildren.namedItem('p1'));

console.log("==============================4:firstChild");
///////////////////////////////////////////////
// firstChild, firstElementChild
let pNode = document.querySelector("#p4");
let aNode = pNode.firstChild;
console.log(aNode);

let imgNode = pNode.firstElementChild;
console.log(imgNode);

console.log("==============================5:getAttribute");
///////////////////////////////////////////////
// 객체.getAttribute("속성명"), 객체.setAttribute("속성명","속성값");
// 객체.속성명,             객체.속성명="속성값"

let imgAttrNode = imgNode.getAttribute("src");
console.log(imgAttrNode);

imgAttrNode = imgNode.src;
console.log(imgAttrNode);

imgNode.setAttribute("title", "스타배우");
imgNode.width = 300;
imgNode.height = 300;