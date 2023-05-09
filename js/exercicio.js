var color = ['red', 'blue', 'green', 'purple', 'yellow', 'gray', 'black', 'orange', 'teal', 'cyan', 'pink', 'whitesmoke', 'lightgreen', 'brown', 'Salmon', 'whites']
var index = -1;


function changeColor() {

    if (index == color.length) {
        index = 0;
    } else {
        index = index + 1;
    } 
    
    document.body.style.backgroundColor = color[index];

}


function addItemList() {
    
    var input = document.getElementById("itemInput");
    var list = document.getElementById("itemList");
    const newItem = document.createElement('li');
    newItem.innerHTML = input.value;
    list.appendChild(newItem);

}
