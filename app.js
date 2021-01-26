'use strict'
// globale variable
var form = document.getElementById('myForm');
var table = document.getElementById('myTable');
var arrayOfCars = [];
// var arrayOfImg = 
var cat = document.getElementById('cat')




//constactor and prototype
function AllCar(name, catagory, modle,img) {
    this.carName = name;
    this.catagoryModel = catagory;
    this.modleYear = modle;
    this.img = '/img'+ img;
    arrayOfCars.push(this);
}
AllCar.prototype.renderCar = function () {
    var tableRow = document.createElement('tr');
    var carImg = document.createElement('img');
    var par = document.createElement('p');
    carImg.setAttribute("src", 'img/bmw.png');
    par.textContent = 'car name is : ' + this.carName + ' Model Year is : ' + this.modleYear;
    tableRow.appendChild(par);
    tableRow.appendChild(carImg);
    table.appendChild(tableRow);
};





// all Function
function userInput(event) {
    event.preventDefault();
    var carName = event.target.carName.value;
    var catagoryModel = event.target.catagoryModel.value;
    var modleYear = event.target.modleYear.value;
    var objectOne = new AllCar(carName, catagoryModel, modleYear);
    localStorage.setItem('Array', JSON.stringify(arrayOfCars));
    objectOne.renderCar();

}
function renderAgain() {
    for (let index = 0; index < arrayOfCars.length; index++) {
        
       ("src", "img_pulpit.jpg");
    var tableRow = document.createElement('tr');
    var carImg = document.createElement('img');
    var par = document.createElement('p');
    carImg.setAttribute("src", 'img/bmw.png');
    par.textContent = 'car name is : ' + arrayOfCars[index].carName + ' Model Year is : ' + arrayOfCars[index].modleYear;
    tableRow.appendChild(par);
    tableRow.appendChild(carImg);

    table.appendChild(tableRow);
}
}

function check() {
    if (localStorage.getItem('Array')) {
        arrayOfCars = JSON.parse(localStorage.getItem('Array'));
        renderAgain();
    }
}



// event leisenr and calling function 
form.addEventListener('submit', userInput)
check();
