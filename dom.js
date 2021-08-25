// ======================= PART 1 ======================= //

// EXAMINE THE DOCUMENT OBJECT //
// console.dir(document);

//  LOGGING DOCUMENT PROPERTIES //
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.forms);
// console.log(document.forms[0]);

// GETELEMENTBYID //
console.log(document.getElementById('header-title'));
const headerTitle = document.getElementById('header-title');
const header = document.getElementById('main-header');
console.log(headerTitle);
headerTitle.textContent = 'Hello Planet Earth!'
// headerTitle.innerHTML = '<h3>Hello Pepoll!</h3>'
header.style.borderBottom = 'solid 1px #000'

// GETELEMENTSBYCLASSNAME //
// const items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello World!'
// items[1].style.fontWeight = 'bold'
// items[1].style.backgroundColor = '#ba9a37'

// for(let i=0; i<items.length; i++){
//     items[i].style.backgroundColor = '#ba9a37';
// }

// const items = document.getElementsByTagName('li');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello World!'
// items[1].style.fontWeight = 'bold'

// for(let i=0; i<items.length; i++){
//     items[i].style.backgroundColor = '#f4f4f4';
// }

// QUERY SELECTOR //
// const header = document.querySelector('#main-header');
// console.log(header);

// const input = document.querySelector('input')
// input.placeholder = 'Hello World'

// const submit = document.querySelector('input[type="submit"]')
// submit.value = "SEND"

// const lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue'

// const secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = '#ba9a37'
// secondItem.style.fontWeight = 'normal'

// QUERYSELECTORALL //
// const titles = document.querySelectorAll('.title');
// console.log(titles);

// const odd = document.querySelectorAll('li:nth-child(odd)');
// const even = document.querySelectorAll('li:nth-child(even)');

// odd[1].style.color = 'blue'

// for(let i=0; i<even.length; i++){
//     even[i].style.color = 'brown'
// }

// ======================= PART 2 ======================= //

// TRAVERSING THE DOM
// const itemList = document.querySelector('#items');
// // parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4'
// // console.log(itemList.parentNode.parentNode.parentNode);
// console.log(itemList.parentElement.parentElement.parentElement);
// // childNodes
// console.log(itemList.childNodes);
// console.log(itemList.children);
// itemList.children[1].style.backgroundColor = 'yellow';
// // FirstChild
// console.log(itemList.firstChild);
// // FirstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello Planet Mars!'
// itemList.children[1].textContent = 'Elon Here!'
// // lastElementChild
// itemList.children[2].textContent = 'Ichi Ni San'
// itemList.lastElementChild.textContent = 'Arigato'
// // NextElementSibling
// console.log(itemList.nextElementSibling);
// // PreviousSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = '#ba9a37'

// createElement

// Create a div

const newDiv = document.createElement('div');
// Add class
newDiv.className = 'container'
// Add ID
newDiv.id = 'container-1'
// Add attr
newDiv.setAttribute('title', 'My Container')
// Create Text Node
const newDivText = document.createTextNode('Hello Planet Earth!')
console.log(newDivText);
// Add text to div
newDiv.appendChild(newDivText)
console.log(newDiv);

const container = document.querySelector('header .container');
const h1 = document.querySelector('header h1');

newDiv.style.fontSize = '20px'

container.insertBefore(newDiv, h1);


// EVENT //
// const button = document.getElementById('button').addEventListener('click', buttonClick);

// function buttonClick(e){
//     // console.log(e);

//     console.log(e.target);
//     console.log(e.target.id);
//     console.log(e.target.className);
//     console.log(e.target.classList);
//     document.getElementById('output').innerHTML = '<h3>'+e.target.id+'</h3>';
//     console.log(e.type);
//     console.log(e.clientX);
//     // console.log('Button Clicked');
//     // document.querySelector('#main').style.backgroundColor = '#f4f4f4'
// }

const button = document.getElementById('button');
const box = document.getElementById('box');
// button.addEventListener('click', runEvent)
// button.addEventListener('dblclick', runEvent)
// button.addEventListener('mousedown', runEvent)
// button.addEventListener('mouseup', runEvent)

// box.addEventListener('mouseenter', runEvent)
// box.addEventListener('mouseleave', runEvent)
// box.addEventListener('mouseover', runEvent)
// box.addEventListener('mouseout', runEvent)
// box.addEventListener('mousemove', runEvent)
const output = document.getElementById('output')
const itemInput = document.querySelector('input[type="text"]');
const form = document.querySelector('form')

itemInput.addEventListener('keydown', runEvent);

function runEvent(e){
    console.log('EVENT TYPE: '+e.type);
    console.log(e.target.value);
    output.innerHTML = `<h3> ${e.target.value} </h3>`
    // output.innerHTML = '<h3>MouseX: '+e.offsetX+' </h3><h3>MouseY: '+e.offsetY+'</h3>'

    // box.style.backgroundColor  = "rgb("+e.offsetX+","+e.offsetY+",40)"

    // document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)"
}

const addDiv = document.createElement('div');

const addTextNode = document.createTextNode('Hello Planet Earth!')

addDiv.className = 'container m-2';

addDiv.appendChild(addTextNode);

console.log(addDiv);