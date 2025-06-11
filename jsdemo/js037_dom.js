let pNode = document.querySelector("#wrap");

// 1 P null
console.log(`${pNode.nodeType}  ${pNode.nodeName}  ${pNode.nodeValue}`);
console.log("====================================1");
////////////////////////////////////////////////
// 속성명
let pAttr = pNode.attributes;

console.log(pAttr);
console.log(pAttr[0]);
console.log(pAttr[1]);
console.log(pAttr.id);
console.log(pAttr.length);

// 2 id wrap
console.log(`${pAttr[0].nodeType}  ${pAttr[0].nodeName}  ${pAttr[0].nodeValue}`);
console.log("====================================2");

///////////////////////////////////////////////
let textNode = pNode.firstChild;
console.log(textNode);

//3 #text content
console.log(`${textNode.nodeType}  ${textNode.nodeName}  ${textNode.nodeValue}`);

//////////////////////////////////////////////
console.log(pNode.innerText);
console.log(pNode.textContent);
console.log(pNode.innerHTML);

let fname = document.querySelector("#fname");
console.log(fname.value);

//////////////////////////////////////////////////////