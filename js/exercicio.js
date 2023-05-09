var color = ['red', 'blue', 'green', 'purple', 'yellow', 'gray', 'black', 'orange', 'teal', 'cyan', 'pink', 'whitesmoke', 'lightgreen', 'brown', 'Salmon', 'white']
var index = -1;


var imgs = ['./img/esquilo1.jpg', './img/esquilo2.jpg', './img/esquilo3.jpg', './img/esquilo4.jpg', './img/esquilo5.jpg', './img/esquilo6.jpg' ]
var imgIndex = 0;

function changeColor() {
    if (index == color.length-1) {
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


function showImage() {

    var id = "imgEsquilo";
    var currentImg = document.getElementById(id);

    if (currentImg == null) {
        
        const img = document.createElement('img');
        img.src = "./img/esquilo1.jpg";
        img.id = id;
        document.body.appendChild(img);

    } else {
        
        if (imgIndex == imgs.length-1
            ) {
            imgIndex = 0;
        } else {
            imgIndex = imgIndex + 1;
        } 
        
        currentImg.src = imgs[imgIndex];
    }

}


function showMessage() {

    var p = document.getElementById("message");
    p.innerHTML = "Tenha um bom dia!"


}


