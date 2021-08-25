const form = document.querySelector('#addForm');
const itemList = document.querySelector('#items');
const filter = document.getElementById('filter');

// Add item
form.addEventListener('submit', addItem);

// Delete item
itemList.addEventListener('click', removeItem);

// Filter Items
filter.addEventListener('keyup', filterItems);

function addItem(e){
    e.preventDefault();
    // GETINPUTVALUE
    const newItem = document.getElementById('newItem');
    if(newItem.value != ''){
        // Create element
        const li = document.createElement('li');
        li.className = 'list-group-item';
        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
        deleteBtn.appendChild(document.createTextNode('X'));
        li.appendChild(document.createTextNode(newItem.value));
        li.appendChild(deleteBtn);
        // Add text node with input value
        itemList.appendChild(li);
        console.log(itemList);
    }
}
    
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            itemList.removeChild(e.target.parentElement)
        }
        console.log(e);
        console.dir(e.target.parentElement);
        
    }
}

function filterItems(e){
    // Convert value to lowercase
    const text = e.target.value.toLowerCase();
    const items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        const itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    })
    // console.log(e.target);
}